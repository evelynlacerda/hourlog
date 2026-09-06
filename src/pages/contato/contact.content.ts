import type { LegalContentNode } from "@/types/LegalContentNode";

export const contactContent: LegalContentNode[] = [
    {
        type: "groupTitle",
        id: "title",
        variant: "default",
        children: [
            {
                type: "heading",
                level: 1,
                text: "Contato",
            },
            {
                type: "span",
                variant: "subtitle",
                text: "Fale com a equipe do Hourlog",
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
                text: "Se você tem dúvidas, sugestões ou precisa de ajuda com a sua conta, entre em contato conosco pelos canais indicados abaixo.",
            },
        ],
    },
    {
        type: "section",
        id: "canal-de-atendimento",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "canal-de-atendimento-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "1. Canal de atendimento",
                    },
                    {
                        type: "paragraph",
                        text: "O atendimento do Hourlog é feito por e-mail:",
                    },
                ],
            },
            {
                type: "group",
                id: "canal-de-atendimento-email",
                variant: "paragraph",
                children: [
                    {
                        type: "span",
                        text: "helperdevbr@gmail.com",
                        variant: "contact",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "assuntos-atendidos",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "assuntos-atendidos-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "2. Assuntos que atendemos",
                    },
                    {
                        type: "paragraph",
                        text: "Você pode entrar em contato para tratar de assuntos como:",
                    },
                ],
            },
            {
                type: "group",
                id: "assuntos-atendidos-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Suporte e dúvidas sobre o uso da plataforma;",
                            "Problemas de acesso ou autenticação na conta;",
                            "Dúvidas sobre projetos, tarefas e relatórios;",
                            "Solicitações relacionadas a privacidade e proteção de dados pessoais;",
                            "Exclusão da conta e dos dados associados;",
                            "Sugestões, elogios e reporte de problemas técnicos.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "prazo-de-resposta",
        children: [
            {
                type: "heading",
                level: 3,
                text: "3. Prazo de resposta",
            },
            {
                type: "group",
                id: "prazo-de-resposta-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Buscamos responder todas as mensagens no menor prazo possível, normalmente em alguns dias úteis.",
                    },
                    {
                        type: "paragraph",
                        text: "Para agilizar o atendimento, descreva o assunto com o máximo de detalhes e informe o e-mail utilizado no cadastro da conta.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "privacidade-e-protecao-de-dados",
        children: [
            {
                type: "heading",
                level: 3,
                text: "4. Privacidade e proteção de dados",
            },
            {
                type: "group",
                id: "privacidade-e-protecao-de-dados-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Para solicitações relacionadas ao tratamento de dados pessoais, consulte a nossa Política de Privacidade e a Política de Cookies, que explicam quais dados são coletados e como exercer os seus direitos.",
                    },
                    {
                        type: "paragraph",
                        text: "Pedidos relacionados a dados pessoais também podem ser enviados pelo e-mail de atendimento indicado nesta página.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "responsavel-pelo-hourlog",
        children: [
            {
                type: "heading",
                level: 3,
                text: "5. Responsável pelo Hourlog",
            },
            {
                type: "group",
                id: "responsavel-pelo-hourlog-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "O Hourlog é desenvolvido e mantido por:",
                    },
                    {
                        type: "span",
                        text: "Evelyn dos Santos Lacerda",
                        variant: "contact",
                    },
                    {
                        type: "span",
                        text: "helperdevbr@gmail.com",
                        variant: "contact",
                    },
                ],
            },
        ],
    },
];
