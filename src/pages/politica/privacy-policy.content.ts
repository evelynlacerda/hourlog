import type { LegalContentNode } from "@/types/LegalContentNode";

export const privacyPolicyContent: LegalContentNode[] = [
    {
        type: "groupTitle",
        id: "title",
        variant: "default",
        children: [
            {
                type: "heading",
                level: 1,
                text: "Política de Privacidade",
            },
            {
                type: "span",
                variant: "subtitle",
                text: "Última atualização: 23.06.2026",
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
                text: "Esta Política de Privacidade explica como o Hourlog coleta, utiliza, armazena, compartilha e protege os dados pessoais dos usuários que acessam e utilizam a plataforma.",
            },
            {
                type: "paragraph",
                text: "Ao criar uma conta ou utilizar o Hourlog, você declara estar ciente das práticas descritas nesta Política.",
            },
        ],
    },
    {
        type: "section",
        id: "sobre-o-hourlog",
        children: [
            {
                type: "heading",
                level: 3,
                text: "1. Sobre o Hourlog",
            },
            {
                type: "paragraph",
                text: "O Hourlog é uma plataforma desenvolvida para auxiliar usuários no controle de projetos, tarefas, horários registrados e relatórios relacionados ao tempo dedicado em cada atividade.",
            },
            {
                type: "paragraph",
                text: "A plataforma é disponibilizada por Evelyn Lacerda, doravante denominada “Hourlog”, “nós” ou “plataforma”.",
            },
        ],
    },
    {
        type: "section",
        id: "quais-dados-coletamos",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "quais-dados-coletamos-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "2. Quais dados coletamos",
                    },
                    {
                        type: "paragraph",
                        text: "Podemos coletar os seguintes dados pessoais e informações relacionadas ao uso da plataforma:",
                    },
                ],
            },
            {
                type: "group",
                id: "dados-de-cadastro",
                variant: "ulList",
                children: [
                    {
                        type: "heading",
                        level: 4,
                        text: "Dados de cadastro",
                    },
                    {
                        type: "list",
                        items: [
                            "Nome;",
                            "E-mail;",
                            "Senha protegida por mecanismos de segurança, como criptografia ou hash;",
                            "Data de criação da conta;",
                            "Data de atualização da conta.",
                        ],
                    },
                ],
            },
            {
                type: "group",
                id: "dados-de-uso-da-plataforma",
                variant: "ulList",
                children: [
                    {
                        type: "heading",
                        level: 4,
                        text: "Dados de uso da plataforma",
                    },
                    {
                        type: "list",
                        items: [
                            "Projetos cadastrados pelo usuário;",
                            "Tarefas vinculadas aos projetos;",
                            "Datas, horários de início e fim das tarefas;",
                            "Descrições informadas pelo próprio usuário;",
                            "Status dos projetos;",
                            "Horas totais calculadas;",
                            "Relatórios gerados, incluindo relatórios em PDF.",
                        ],
                    },
                ],
            },
            {
                type: "group",
                id: "dados-tecnicos-e-seguranca",
                variant: "ulList",
                children: [
                    {
                        type: "heading",
                        level: 4,
                        text: "Dados técnicos e de segurança",
                    },
                    {
                        type: "paragraph",
                        text: "Também podemos coletar informações técnicas necessárias para funcionamento, segurança e melhoria da plataforma, como:",
                    },
                    {
                        type: "list",
                        items: [
                            "Endereço IP;",
                            "Data e horário de acesso;",
                            "Tipo de navegador;",
                            "Sistema operacional;",
                            "Identificadores de sessão;",
                            "Logs de erro e eventos técnicos;",
                            "Informações básicas sobre o dispositivo utilizado.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "como-usamos-seus-dados",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "como-usamos-seus-dados-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "3. Como usamos seus dados",
                    },
                    {
                        type: "paragraph",
                        text: "Utilizamos os dados pessoais para as seguintes finalidades:",
                    },
                ],
            },
            {
                type: "group",
                id: "finalidades-uso-dados",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Criar e gerenciar sua conta;",
                            "Permitir login e autenticação na plataforma;",
                            "Exibir, cadastrar, editar e excluir projetos e tarefas;",
                            "Calcular horas trabalhadas ou registradas;",
                            "Gerar relatórios relacionados aos projetos;",
                            "Proteger a conta do usuário contra acessos indevidos;",
                            "Prevenir fraudes, abusos ou usos inadequados da plataforma;",
                            "Melhorar a estabilidade, segurança e funcionamento do sistema;",
                            "Cumprir obrigações legais ou regulatórias, quando aplicável;",
                            "Responder solicitações de suporte, dúvidas ou pedidos relacionados à privacidade.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "bases-legais-para-tratamento-dos-dados",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "bases-legais-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "4. Bases legais para tratamento dos dados",
                    },
                    {
                        type: "paragraph",
                        text: "Tratamos dados pessoais de acordo com as bases legais previstas na Lei Geral de Proteção de Dados Pessoais.",
                    },
                    {
                        type: "paragraph",
                        text: "Dependendo da situação, o tratamento poderá ocorrer com base em:",
                    },
                ],
            },
            {
                type: "group",
                id: "bases-legais-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Execução de contrato ou procedimentos preliminares relacionados ao uso da plataforma;",
                            "Cumprimento de obrigação legal ou regulatória;",
                            "Exercício regular de direitos;",
                            "Legítimo interesse, especialmente para segurança, prevenção de fraudes, melhoria do serviço e manutenção da plataforma;",
                            "Consentimento, quando necessário, especialmente para cookies não essenciais, comunicações opcionais ou funcionalidades futuras que dependam dessa autorização.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "compartilhamento-de-dados",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "compartilhamento-de-dados-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "5. Compartilhamento de dados",
                    },
                    {
                        type: "paragraph",
                        text: "O Hourlog não vende dados pessoais dos usuários.",
                    },
                    {
                        type: "paragraph",
                        text: "Podemos compartilhar dados pessoais apenas quando necessário para o funcionamento da plataforma, cumprimento de obrigações legais ou proteção dos nossos direitos.",
                    },
                    {
                        type: "paragraph",
                        text: "O compartilhamento pode ocorrer com:",
                    },
                ],
            },
            {
                type: "group",
                id: "compartilhamento-de-dados-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Provedores de hospedagem e infraestrutura;",
                            "Serviços de banco de dados;",
                            "Serviços de envio de e-mails transacionais, como recuperação de senha ou notificações;",
                            "Ferramentas de monitoramento de erros e segurança;",
                            "Autoridades públicas, quando houver obrigação legal, ordem judicial ou solicitação válida;",
                            "Prestadores de serviço necessários para operação, suporte ou manutenção da plataforma.",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Os fornecedores que tratam dados pessoais em nome do Hourlog devem atuar de acordo com instruções compatíveis com esta Política e com a legislação aplicável.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "armazenamento-e-retencao-dos-dados",
        children: [
            {
                type: "heading",
                level: 3,
                text: "6. Armazenamento e retenção dos dados",
            },
            {
                type: "group",
                id: "armazenamento-e-retencao-dos-dados-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Os dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta Política, permitir o uso da plataforma, atender obrigações legais, resolver disputas, manter registros de segurança e exercer direitos.",
                    },
                    {
                        type: "paragraph",
                        text: "Enquanto a conta estiver ativa, os dados vinculados ao uso da plataforma poderão ser mantidos para que o usuário consiga acessar seus projetos, tarefas e relatórios.",
                    },
                    {
                        type: "paragraph",
                        text: "Em caso de exclusão da conta, os dados pessoais poderão ser excluídos, anonimizados ou mantidos por período adicional quando necessário para cumprimento de obrigação legal, prevenção de fraudes, auditoria, segurança ou exercício regular de direitos.",
                    },
                    {
                        type: "paragraph",
                        text: "Projetos, tarefas ou dados finalizados também poderão estar sujeitos a regras específicas de retenção automática, quando essa funcionalidade estiver ativada na plataforma.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "seguranca-dos-dados",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "seguranca-dos-dados-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "7. Segurança dos dados",
                    },
                    {
                        type: "paragraph",
                        text: "Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados, perda, alteração, destruição, uso indevido ou divulgação indevida.",
                    },
                    {
                        type: "paragraph",
                        text: "Entre as medidas que podem ser utilizadas estão:",
                    },
                ],
            },
            {
                type: "group",
                id: "seguranca-dos-dados-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Controle de acesso por autenticação;",
                            "Armazenamento seguro de senhas;",
                            "Uso de tokens ou mecanismos equivalentes para sessão;",
                            "Restrição de acesso aos dados;",
                            "Monitoramento de erros e eventos técnicos;",
                            "Backups, quando aplicável;",
                            "Boas práticas de desenvolvimento e segurança da informação.",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Apesar dos esforços para proteger os dados, nenhum sistema é totalmente imune a incidentes. Caso ocorra algum incidente relevante envolvendo dados pessoais, adotaremos as medidas cabíveis conforme a legislação aplicável.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "cookies-e-tecnologias-semelhantes",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "cookies-e-tecnologias-semelhantes-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "8. Cookies e tecnologias semelhantes",
                    },
                    {
                        type: "paragraph",
                        text: "O Hourlog pode utilizar cookies ou tecnologias semelhantes para permitir o funcionamento adequado da plataforma.",
                    },
                    {
                        type: "paragraph",
                        text: "Podemos utilizar cookies essenciais para:",
                    },
                ],
            },
            {
                type: "group",
                id: "cookies-essenciais-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Manter o usuário autenticado;",
                            "Proteger a sessão;",
                            "Garantir a segurança da navegação;",
                            "Lembrar preferências básicas de uso;",
                            "Permitir o funcionamento correto das funcionalidades da plataforma.",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Caso sejam utilizados cookies não essenciais, como cookies de análise, desempenho, publicidade ou marketing, o usuário será informado e poderá gerenciar suas preferências, quando aplicável.",
                    },
                    {
                        type: "paragraph",
                        text: "Você também pode configurar seu navegador para bloquear ou apagar cookies, mas isso pode afetar o funcionamento de algumas funcionalidades do Hourlog.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "transferencia-internacional-de-dados",
        children: [
            {
                type: "heading",
                level: 3,
                text: "9. Transferência internacional de dados",
            },
            {
                type: "group",
                id: "transferencia-internacional-de-dados-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Alguns fornecedores utilizados para hospedagem, armazenamento, envio de e-mails, monitoramento ou infraestrutura podem estar localizados fora do Brasil ou utilizar servidores em outros países.",
                    },
                    {
                        type: "paragraph",
                        text: "Quando houver transferência internacional de dados, adotaremos medidas razoáveis para garantir que os dados sejam tratados de forma compatível com a legislação aplicável de proteção de dados pessoais.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "direitos-do-usuario",
        variant: "spaced",
        children: [
            {
                type: "group",
                id: "direitos-do-usuario-intro",
                children: [
                    {
                        type: "heading",
                        level: 3,
                        text: "10. Direitos do usuário",
                    },
                    {
                        type: "paragraph",
                        text: "Nos termos da Lei Geral de Proteção de Dados Pessoais, o usuário pode solicitar:",
                    },
                ],
            },
            {
                type: "group",
                id: "direitos-do-usuario-lista",
                variant: "ulList",
                children: [
                    {
                        type: "list",
                        items: [
                            "Confirmação sobre a existência de tratamento de seus dados pessoais;",
                            "Acesso aos dados pessoais tratados;",
                            "Correção de dados incompletos, inexatos ou desatualizados;",
                            "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a legislação;",
                            "Portabilidade dos dados, quando aplicável;",
                            "Informação sobre o compartilhamento de dados com terceiros;",
                            "Revogação do consentimento, quando o tratamento depender de consentimento;",
                            "Eliminação dos dados tratados com base no consentimento, quando aplicável;",
                            "Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências dessa negativa;",
                            "Revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais, quando aplicável.",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Para exercer seus direitos, entre em contato pelo canal indicado nesta Política.",
                    },
                    {
                        type: "paragraph",
                        text: "Antes de atender a uma solicitação, poderemos pedir informações adicionais para confirmar a identidade do solicitante e proteger os dados contra acessos indevidos.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "exclusao-da-conta",
        children: [
            {
                type: "heading",
                level: 3,
                text: "11. Exclusão da conta",
            },
            {
                type: "group",
                id: "exclusao-da-conta-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "O usuário poderá solicitar a exclusão de sua conta e dos dados pessoais associados.",
                    },
                    {
                        type: "paragraph",
                        text: "Após a solicitação, os dados poderão ser excluídos ou anonimizados, exceto quando a manutenção for necessária para cumprimento de obrigação legal, exercício regular de direitos, prevenção de fraudes, segurança ou outras hipóteses permitidas pela legislação.",
                    },
                    {
                        type: "paragraph",
                        text: "A exclusão da conta poderá resultar na perda de acesso aos projetos, tarefas, relatórios e demais informações vinculadas ao usuário.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "dados-inseridos-pelo-proprio-usuario",
        children: [
            {
                type: "heading",
                level: 3,
                text: "12. Dados inseridos pelo próprio usuário",
            },
            {
                type: "group",
                id: "dados-inseridos-pelo-proprio-usuario-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "O usuário é responsável pelas informações que cadastra na plataforma, incluindo nomes de projetos, descrições de tarefas, horários, observações e demais conteúdos inseridos manualmente.",
                    },
                    {
                        type: "paragraph",
                        text: "Recomendamos que o usuário evite inserir dados sensíveis ou informações de terceiros nos campos de descrição, salvo quando isso for realmente necessário e estiver de acordo com a legislação aplicável.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "dados-de-criancas-e-adolescentes",
        children: [
            {
                type: "heading",
                level: 3,
                text: "13. Dados de crianças e adolescentes",
            },
            {
                type: "group",
                id: "dados-de-criancas-e-adolescentes-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "O Hourlog não é direcionado a crianças e adolescentes.",
                    },
                    {
                        type: "paragraph",
                        text: "Caso identifiquemos o tratamento indevido de dados pessoais de menores de idade sem a devida autorização, poderemos remover essas informações e adotar as medidas cabíveis.",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        id: "alteracoes-nesta-politica",
        children: [
            {
                type: "heading",
                level: 3,
                text: "14. Alterações nesta Política",
            },
            {
                type: "group",
                id: "alteracoes-nesta-politica-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças na plataforma, na legislação ou nas práticas de tratamento de dados.",
                    },
                    {
                        type: "paragraph",
                        text: "Quando houver alterações relevantes, poderemos comunicar os usuários por meio da própria plataforma, por e-mail ou por outro meio adequado.",
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
        id: "contato-sobre-privacidade",
        children: [
            {
                type: "heading",
                level: 3,
                text: "15. Contato sobre privacidade",
            },
            {
                type: "group",
                id: "contato-sobre-privacidade-textos",
                variant: "paragraph",
                children: [
                    {
                        type: "paragraph",
                        text: "Em caso de dúvidas, solicitações ou reclamações relacionadas a esta Política de Privacidade ou ao tratamento de dados pessoais, entre em contato pelo e-mail:",
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
