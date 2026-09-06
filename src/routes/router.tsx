import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Structor from "@/layout/structor";
import Cadastrar from "@/pages/auth/cadastrar";
import Login from "@/pages/auth/login";
import Dashboard from "@/pages/dashboard";
import ProjetosIndex from "@/pages/projetos";
import EditarProjeto from "@/pages/projetos/[id]/editar";
import IncluirProjeto from "@/pages/projetos/add/incluir";

import RequireAuth from "@/routes/requireAuth";
import PublicRoutes from "@/routes/publicRoutes";
import ResetPasswordSoon from "@/pages/soon/resetPassword";
import Relatorios from "@/pages/relatorios";
import VisualizarProjeto from "@/pages/projetos/view/visualizar";
import PrivacyPolicy from "@/pages/politica/privacyPolicy";
import TermsOfUse from "@/pages/termos/useTerms";
// import RecuperarSenha from "@/pages/auth/recuperar";
// import ResetPassword from "@/pages/auth/resetPassword";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* públicas (bloqueadas se já logado) */}
                <Route element={<PublicRoutes />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrar" element={<Cadastrar />} />
                    <Route path="/recuperar" element={<ResetPasswordSoon />} />
                    {/* <Route path="/recuperar" element={<RecuperarSenha />} />
					<Route path="/nova-senha/:uid/:token" element={<ResetPassword />} /> */}
                </Route>

                {/* protegidas */}
                <Route element={<RequireAuth />}>
                    <Route element={<Structor />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/projetos" element={<ProjetosIndex />} />
                        <Route path="/incluir" element={<IncluirProjeto />} />
                        <Route
                            path="/projetos/:id/editar"
                            element={<EditarProjeto />}
                        />
                        <Route
                            path="/projetos/:id/visualizar"
                            element={<VisualizarProjeto />}
                        />
                        <Route path="/relatorios" element={<Relatorios />} />
                    </Route>
                </Route>

                {/* raiz e fallback */}
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                />

                {/* politicas e termos */}
                <Route
                    path="/politica-de-privacidade"
                    element={<PrivacyPolicy />}
                />
                <Route path="/termos-de-uso" element={<TermsOfUse />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
