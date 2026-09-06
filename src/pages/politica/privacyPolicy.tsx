import Footer from "@/layout/footer";
import { LegalContentRenderer } from "@/helpers/legalContentRender";
import { privacyPolicyContent } from "./privacy-policy.content";
import Header from "@/layout/header";

const PrivacyPolicy = () => {
    return (
        <div className="w-full">
            <Header />

            <main className="legal-main text-dark800 max-w-2xl mx-auto py-20 px-6">
                <LegalContentRenderer content={privacyPolicyContent} />
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
