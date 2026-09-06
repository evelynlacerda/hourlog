import type { LegalContentNode } from "@/types/LegalContentNode";

export const cookiesPolicyContent: LegalContentNode[] = [
    {
        type: "groupTitle",
        id: "title",
        variant: "default",
        children: [
            {
                type: "heading",
                level: 1,
                text: "Política de Cookies",
            },
            {
                type: "span",
                variant: "subtitle",
                text: "Última atualização: 06.09.2026",
            },
        ],
    },
    {
        type: "group",
        id: "intro",
        variant: "default",
        children: [
            {
                type: "paragraph",
                text: "Esta Política de Cookies explica o que são cookies, como o Hourlog utiliza cookies e tecnologias semelhantes e quais opções o usuário tem para gerenciá-los.",
            },
            {
                type: "paragraph",
                text: "Esta Política complementa a nossa Política de Privacidade e deve ser lida em conjunto com ela.",
            },
        ],
    },
    {
        type: "section",
        id: "o-que-sao-cookies",
        children: [
            {
                type: "heading",
                level: 3,
                text: "1. O que são cookies",
            },
            {
                type: "paragraph",
                text: "Cookies são pequenos arquivos de texto armazenados no navegador ou no dispositivo do usuário quando ele acessa um site ou aplicação.",
            },
            {
                type: "paragraph",
                text: "Eles permitem que a plataforma reconheça o dispositivo, mantenha o usuário autenticado, lembre preferências e funcione de forma segura e adequada.",
            },
            {
                type: "paragraph",
                text: "Além dos cookies, tecnologias semelhantes, como armazenamento local do navegador e identificadores de sessão, podem ser utilizadas para as mesmas finalidades descritas nesta Política.",
            },
        ],
    },
    {
        type: "section",
        id: "como-o-hourlog-utiliza-cookies",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "como-o-hourlog-utiliza-cookies-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "2. Como o Hourlog utiliza cookies",
                    },
                    {
                        type: "paragraph",
                        text: "O Hourlog utiliza cookies e tecnologias semelhantes principalmente para garantir o funcionamento da plataforma. De forma geral, eles são utilizados para:",
                    },
                ],
            },
            {
                type: "group",
                id: "como-o-hourlog-utiliza-cookies-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Manter o usuário autenticado durante a navegação;",
                            "Proteger a sessão contra acessos não autorizados;",
                            "Garantir a segurança e a integridade da navegação;",
                            "Lembrar preferências básicas de uso, como o estado do menu lateral;",
                            "Permitir o funcionamento correto das funcionalidades da plataforma;",
                            "Ajudar a identificar erros e a melhorar a estabilidade do serviço.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "tipos-de-cookies-utilizados",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "tipos-de-cookies-utilizados-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "3. Tipos de cookies utilizados",
                    },
                    {
                        type: "paragraph",
                        text: "Os cookies podem ser classificados de acordo com a sua finalidade:",
                    },
                ],
            },
            {
                type: "group",
                id: "cookies-essenciais",
                variant: "ulList",
                children: [
                    {
                        type: "heading",
                        level: 4,
                        text: "Cookies essenciais",
                    },
                    {
                        type: "paragraph",
                        text: "São necessários para o funcionamento da plataforma e não podem ser desativados nos nossos sistemas. Sem eles, serviços como login e segurança da conta não funcionam corretamente. São utilizados para:",
                    },
                    {
                        type: "list",
                        items: [
                            "Autenticar o usuário e manter a sessão ativa;",
                            "Armazenar o token de acesso necessário para uso da conta;",
                            "Proteger a plataforma contra fraudes e acessos indevidos.",
                        ],
                    },
                ],
            },
            {
                type: "group",
                id: "cookies-de-preferencias",
                variant: "ulList",
                children: [
                    {
                        type: "heading",
                        level: 4,
                        text: "Cookies de preferências",
                    },
                    {
                        type: "paragraph",
                        text: "Permitem que a plataforma lembre escolhas feitas pelo usuário para oferecer uma experiência mais personalizada, como:",
                    },
                    {
                        type: "list",
                        items: [
                            "Estado do menu lateral (expandido ou recolhido);",
                            "Preferências básicas de exibição da interface.",
                        ],
                    },
                ],
            },
            {
                type: "group",
                id: "cookies-de-desempenho-e-analise",
                variant: "ulList",
                children: [
                    {
                        type: "heading",
                        level: 4,
                        text: "Cookies de desempenho e análise",
                    },
                    {
                        type: "paragraph",
                        text: "Podem ser utilizados para entender como a plataforma é usada, identificar erros e melhorar funcionalidades. Quando utilizados, coletam informações de forma agregada, como:",
                    },
                    {
                        type: "list",
                        items: [
                            "Páginas acessadas e ações realizadas na plataforma;",
                            "Logs de erro e eventos técnicos;",
                            "Informações básicas sobre o navegador e o dispositivo.",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Cookies de desempenho e análise só são utilizados quando permitido pela legislação aplicável e, quando exigido, mediante consentimento do usuário.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "cookies-de-terceiros",
        children: [
            {
                type: "heading",
                level: 3,
                text: "4. Cookies de terceiros",
            },
            {
                type: "group",
                id: "cookies-de-terceiros-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Alguns serviços utilizados pelo Hourlog para hospedagem, infraestrutura, envio de e-mails transacionais ou monitoramento de erros podem definir cookies ou tecnologias semelhantes.",
                    },
                    {
                        type: "paragraph",
                        text: "Esses terceiros atuam de acordo com suas próprias políticas de privacidade e de cookies. O Hourlog não controla os cookies definidos por serviços de terceiros.",
                    },
                    {
                        type: "paragraph",
                        text: "O Hourlog não utiliza cookies de publicidade e não vende dados pessoais dos usuários.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "por-quanto-tempo-os-cookies-permanecem",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "por-quanto-tempo-os-cookies-permanecem-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "5. Por quanto tempo os cookies permanecem",
                    },
                    {
                        type: "paragraph",
                        text: "Quanto ao tempo de permanência, os cookies podem ser:",
                    },
                ],
            },
            {
                type: "group",
                id: "por-quanto-tempo-os-cookies-permanecem-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Cookies de sessão: são temporários e apagados automaticamente quando o navegador é fechado;",
                            "Cookies persistentes: permanecem no dispositivo por um período determinado ou até serem apagados manualmente pelo usuário.",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "O tempo de permanência de cada cookie varia conforme a sua finalidade e a tecnologia utilizada.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "como-gerenciar-e-desativar-cookies",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "como-gerenciar-e-desativar-cookies-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "6. Como gerenciar e desativar cookies",
                    },
                    {
                        type: "paragraph",
                        text: "O usuário pode gerenciar, bloquear ou apagar cookies diretamente nas configurações do navegador. As opções costumam permitir:",
                    },
                ],
            },
            {
                type: "group",
                id: "como-gerenciar-e-desativar-cookies-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Apagar cookies já armazenados no dispositivo;",
                            "Bloquear a criação de novos cookies;",
                            "Receber um aviso antes de um cookie ser armazenado;",
                            "Bloquear apenas cookies de terceiros.",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "O bloqueio de cookies essenciais pode comprometer o funcionamento da plataforma, impedindo, por exemplo, que o usuário permaneça autenticado.",
                    },
                    {
                        type: "paragraph",
                        text: "Quando forem utilizados cookies não essenciais que dependam de consentimento, o usuário poderá gerenciar suas preferências pelos meios disponibilizados na própria plataforma, quando aplicável.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "alteracoes-nesta-politica-de-cookies",
        children: [
            {
                type: "heading",
                level: 3,
                text: "7. Alterações nesta Política de Cookies",
            },
            {
                type: "group",
                id: "alteracoes-nesta-politica-de-cookies-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Esta Política de Cookies poderá ser atualizada periodicamente para refletir mudanças na plataforma, na legislação ou nas práticas de uso de cookies.",
                    },
                    {
                        type: "paragraph",
                        text: "Quando houver alterações relevantes, poderemos comunicar os usuários por meio da própria plataforma ou por outro meio adequado.",
                    },
                    {
                        type: "paragraph",
                        text: "A data da última atualização estará sempre indicada no início deste documento.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "contato-sobre-cookies",
        children: [
            {
                type: "heading",
                level: 3,
                text: "8. Contato",
            },
            {
                type: "group",
                id: "contato-sobre-cookies-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Em caso de dúvidas ou solicitações relacionadas a esta Política de Cookies, entre em contato pelo e-mail:",
                    },
                    {
                        type: "span",
                        text: "helperdevbr@gmail.com",
                        variant: "contact",
                    },
                    {
                        type: "paragraph",
                        text: "Responsável pelo tratamento dos dados:",
                    },
                    {
                        type: "span",
                        text: "Evelyn dos Santos Lacerda",
                        variant: "contact",
                    },
                ],
            },
        ],
    },
];
