import type { LegalContentNode } from "@/types/LegalContentNode";

export const useTermsContent: LegalContentNode[] = [
    {
        type: "groupTitle",
        id: "title",
        variant: "default",
        children: [
            {
                type: "heading",
                level: 1,
                text: "Termos de Uso",
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
                text: "Estes Termos de Uso regulam o acesso e a utilização do Hourlog, plataforma desenvolvida para auxiliar usuários no controle de projetos, tarefas, horas registradas e relatórios.",
            },
            {
                type: "paragraph",
                text: "Ao criar uma conta, acessar ou utilizar o Hourlog, você declara que leu, compreendeu e concorda com estes Termos de Uso e com a nossa Política de Privacidade. Caso não concorde com qualquer parte destes Termos, não utilize a plataforma.",
            },
        ],
    },
    {
        type: "section",
        id: "sobre-o-hourlog",
        children: [
            {
                type: "heading",
                level: 4,
                text: "1. Sobre o Hourlog",
            },
            {
                type: "paragraph",
                text: "O Hourlog é uma ferramenta de organização e controle de tempo que permite ao usuário cadastrar projetos, registrar tarefas, informar horários, acompanhar horas totais e gerar relatórios.",
            },
            {
                type: "paragraph",
                text: "As informações exibidas e os relatórios gerados dependem dos dados inseridos pelo próprio usuário. Por isso, o usuário é responsável por conferir se as informações cadastradas estão corretas antes de utilizá-las para fins profissionais, comerciais, administrativos ou financeiros.",
            },
        ],
    },
    {
        type: "section",
        id: "conta-de-usuario",
        children: [
            {
                type: "heading",
                level: 4,
                text: "2. Conta de usuário",
            },
            {
                type: "paragraph",
                text: "Para utilizar o Hourlog, o usuário deverá criar uma conta informando dados verdadeiros, completos e atualizados.",
            },
            {
                type: "paragraph",
                text: "O usuário é responsável por manter a segurança de sua senha e por todas as atividades realizadas em sua conta.",
            },
            {
                type: "paragraph",
                text: "É proibido compartilhar credenciais de acesso, tentar acessar contas de terceiros ou utilizar a plataforma de forma que comprometa sua segurança, funcionamento ou integridade.",
            },
            {
                type: "paragraph",
                text: "Podemos suspender ou encerrar contas que violem estes Termos, utilizem a plataforma de forma indevida ou apresentem risco à segurança do Hourlog ou de outros usuários.",
            },
        ],
    },
    {
        type: "group",
        id: "uso-da-plataforma",
        variant: "ulList",
        children: [
            {
                type: "heading",
                level: 4,
                text: "3. Uso da plataforma",
            },
            {
                type: "paragraph",
                text: "Ao utilizar o Hourlog, o usuário se compromete a:",
            },
            {
                type: "list",
                items: [
                    "Utilizar a plataforma de forma lícita e adequada;",
                    "Não inserir conteúdo ofensivo, ilegal, discriminatório, fraudulento ou que viole direitos de terceiros;",
                    "Não tentar explorar falhas, realizar ataques, automações abusivas ou qualquer prática que prejudique a plataforma;",
                    "Não utilizar o Hourlog para finalidade diferente daquela para a qual foi desenvolvido.",
                    "Identificadores de sessão;",
                    "Logs de erro e eventos técnicos;",
                    "Informações básicas sobre o dispositivo utilizado.",
                ],
            },
            {
                type: "paragraph",
                text: "O usuário é responsável pelo conteúdo que cadastrar na plataforma, incluindo nomes de projetos, descrições de tarefas, datas, horários e demais informações inseridas manualmente.",
            },
        ],
    },
    {
        type: "section",
        id: "relatorios",
        children: [
            {
                type: "heading",
                level: 4,
                text: "4. Relatórios",
            },
            {
                type: "paragraph",
                text: "O Hourlog poderá gerar relatórios com base nos dados cadastrados pelo usuário.",
            },
            {
                type: "paragraph",
                text: "Esses relatórios têm finalidade informativa e organizacional. O Hourlog não garante que os relatórios sejam adequados para todos os fins legais, fiscais, contábeis, trabalhistas ou contratuais.",
            },
            {
                type: "paragraph",
                text: "Cabe ao usuário revisar as informações antes de utilizar qualquer relatório fora da plataforma.",
            },
        ],
    },
    {
        type: "section",
        id: "planos-e-pagamentos",
        children: [
            {
                type: "heading",
                level: 4,
                text: "5. Planos e pagamentos",
            },
            {
                type: "paragraph",
                text: "O Hourlog poderá ser oferecido de forma gratuita, paga, experimental ou em diferentes planos.",
            },
            {
                type: "paragraph",
                text: "Caso existam planos pagos, as informações sobre valores, formas de pagamento, recursos disponíveis, cancelamento e eventual reembolso serão apresentadas na própria plataforma ou em página específica.",
            },
            {
                type: "paragraph",
                text: "Se o Hourlog estiver em fase gratuita, beta ou experimental, funcionalidades poderão ser alteradas, limitadas ou removidas a qualquer momento.",
            },
        ],
    },
    {
        type: "section",
        id: "privacidade-e-dados",
        children: [
            {
                type: "heading",
                level: 4,
                text: "6. Privacidade e dados pessoais",
            },
            {
                type: "paragraph",
                text: "O tratamento de dados pessoais realizado pelo Hourlog está descrito em nossa Política de Privacidade.",
            },
            {
                type: "paragraph",
                text: "Ao utilizar a plataforma, o usuário declara estar ciente de que seus dados poderão ser tratados para cadastro, autenticação, funcionamento da conta, registro de projetos e tarefas, geração de relatórios, segurança e melhoria da plataforma.",
            },
            {
                type: "paragraph",
                text: "A Política de Privacidade faz parte destes Termos de Uso.",
            },
        ],
    },
    {
        type: "section",
        id: "disponibilidade-e-alteracoes",
        children: [
            {
                type: "heading",
                level: 4,
                text: "7. Disponibilidade e alterações",
            },
            {
                type: "paragraph",
                text: "Buscamos manter o Hourlog disponível e funcionando corretamente, mas não garantimos que a plataforma estará sempre livre de erros, interrupções ou instabilidades.",
            },
            {
                type: "paragraph",
                text: "O Hourlog poderá passar por manutenções, atualizações, correções ou alterações de funcionalidades.",
            },
            {
                type: "paragraph",
                text: "Também poderemos modificar, adicionar ou remover recursos da plataforma para melhorar o serviço, corrigir problemas, aumentar a segurança ou adequar o produto a novas necessidades.",
            },
        ],
    },
    {
        type: "group",
        id: "limitacao-de-responsabilidade",
        variant: "ulList",
        children: [
            {
                type: "heading",
                level: 4,
                text: "8. Limitação de responsabilidade",
            },
            {
                type: "list",
                items: [
                    "Erros causados por informações inseridas incorretamente pelo usuário;",
                    "Decisões tomadas com base em dados ou relatórios gerados pela plataforma;",
                    "Perda de acesso causada por uso indevido da conta ou compartilhamento de senha;",
                    "Não utilizar o Hourlog para finalidade diferente daquela para a qual foi desenvolvido.",
                    "Falhas, instabilidades ou indisponibilidades temporárias;",
                    "Problemas causados por serviços de terceiros;",
                    "Uso da plataforma em desacordo com estes Termos.",
                ],
            },
            {
                type: "paragraph",
                text: "Nada nestes Termos limita direitos que não possam ser limitados pela legislação aplicável.",
            },
        ],
    },
    {
        type: "section",
        id: "propriedade-intelectual",
        children: [
            {
                type: "heading",
                level: 4,
                text: "9. Propriedade intelectual",
            },
            {
                type: "paragraph",
                text: "O nome Hourlog, sua identidade visual, interface, funcionalidades, textos, estrutura, código e demais elementos da plataforma pertencem a [nome da empresa ou responsável pelo projeto], salvo quando indicado de outra forma.",
            },
            {
                type: "paragraph",
                text: "O uso da plataforma não concede ao usuário qualquer direito de propriedade sobre o Hourlog.",
            },
            {
                type: "paragraph",
                text: "É proibido copiar, reproduzir, modificar, distribuir, vender ou explorar comercialmente qualquer parte da plataforma sem autorização prévia.",
            },
        ],
    },
    {
        type: "section",
        id: "encerramento-da-conta",
        children: [
            {
                type: "heading",
                level: 4,
                text: "10. Encerramento da conta",
            },
            {
                type: "paragraph",
                text: "O usuário poderá solicitar a exclusão de sua conta conforme os canais indicados na plataforma ou na Política de Privacidade.",
            },
            {
                type: "paragraph",
                text: "A exclusão da conta poderá resultar na perda de acesso aos projetos, tarefas, relatórios e demais informações vinculadas ao usuário.",
            },
            {
                type: "paragraph",
                text: "Alguns dados poderão ser mantidos pelo tempo necessário para cumprimento de obrigações legais, segurança, prevenção de fraudes ou exercício regular de direitos.",
            },
        ],
    },
    {
        type: "section",
        id: "alteracoes-nestes-termos",
        children: [
            {
                type: "heading",
                level: 4,
                text: "11. Alterações nestes Termos",
            },
            {
                type: "paragraph",
                text: "Estes Termos de Uso poderão ser atualizados a qualquer momento para refletir mudanças na plataforma, na legislação ou nas nossas práticas.",
            },
            {
                type: "paragraph",
                text: "A versão atualizada será publicada nesta página, com indicação da data da última atualização.",
            },
            {
                type: "paragraph",
                text: "O uso contínuo do Hourlog após a publicação das alterações representa ciência e concordância com os novos Termos.",
            },
        ],
    },
    {
        type: "section",
        id: "lei-aplicavel-e-contato",
        children: [
            {
                type: "heading",
                level: 4,
                text: "12. Lei aplicável e contato",
            },
            {
                type: "paragraph",
                text: "Estes Termos são regidos pelas leis da República Federativa do Brasil.",
            },
            {
                type: "paragraph",
                text: "Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail:",
            },
            {
                type: "span",
                text: "helperdevbr@gmail.com",
                variant: "contact",
            },
            {
                type: "paragraph",
                text: "Para assuntos relacionados à privacidade e proteção de dados pessoais, consulte nossa Política de Privacidade ou entre em contato pelo mesmo e-mail.",
            },
            {
                type: "paragraph",
                text: "Responsável pelo Hourlog:",
            },
            {
                type: "span",
                text: "Evelyn dos Santos Lacerda",
                variant: "contact",
            },
        ],
    },
];