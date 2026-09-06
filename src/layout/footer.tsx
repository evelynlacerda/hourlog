import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <div
        className="w-full min-h-16 flex items-center justify-between border-t border-dashed border-dark400 bottom-0 px-6 text-dark500 text-sm
                        max-md:flex-col max-md:gap-4 max-md:px-4 max-md:py-6"
      >
        <ul className="footer-links flex text-center gap-2">
          <NavLink
            to="/politica-de-privacidade"
            className="hover:text-orange500"
          >
            Política de Privacidade
          </NavLink>
          {" "}<span aria-hidden="true">•</span>{" "}
          <NavLink to="/cookies" className="hover:text-orange500">
            Política de Cookies
          </NavLink>
          {" "}<span aria-hidden="true">•</span>{" "}
          <NavLink to="/termos-de-uso" className="hover:text-orange500">
            Termos de Uso
          </NavLink>
          {" "}<span aria-hidden="true">•</span>{" "}
          <NavLink to="/contato" className="hover:text-orange500">
            Contato
          </NavLink>
        </ul>
        <p>Desenvolvido por Evelyn Lacerda © {new Date().getFullYear()}</p>
      </div>
    );
};

export default Footer;
