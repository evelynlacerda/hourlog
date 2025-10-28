export function isTokenValid(token?: string | null): boolean {
    if (!token || token === "undefined" || token === "null") return false;

    try {
        const [, payloadB64] = token.split(".");
        if (!payloadB64) return false;

        const payload = JSON.parse(atob(payloadB64));
        const exp = Number(payload?.exp);
        if (!exp) return true;

        const now = Math.floor(Date.now() / 1000);
        return now < exp;
    } catch {
        return false;
    }
}