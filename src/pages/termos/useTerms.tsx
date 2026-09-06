import Footer from "@/layout/footer";
import { LegalContentRenderer } from "../../helpers/legalContentRender";
import { useTermsContent } from "./use-of-terms.content";
import Header from "@/layout/header";

const TermsOfUse = () => {
    return (
        <div className="w-full">
            <Header />

            <main className="legal-main text-dark800 max-w-2xl mx-auto py-20 px-6">
                <LegalContentRenderer content={useTermsContent} />
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfUse;
