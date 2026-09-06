# ⏱️ Hourlog – Frontend (PT-BR)

O **Hourlog Frontend** é a interface web do Hourlog, uma aplicação de controle de horas trabalhadas por projeto e por tarefa, com cálculo automático de horas totais e exportação de relatórios em PDF.

Construído em **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4** e **shadcn/ui**, com **TanStack Query** para o consumo da API e deploy automático na **Vercel**.

![License](https://img.shields.io/badge/License-Custom%20Restricted-red?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/evelynlacerda/hourlog?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/evelynlacerda/hourlog?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/evelynlacerda/hourlog?style=for-the-badge)

> 🌎 Leia em outro idioma:
> **[Read in English](./README.md)**

🔗 **Aplicação:** [hourlog.vercel.app](https://hourlog.vercel.app)
🔗 **Repositório da API:** [evelynlacerda/hourlog-backend](https://github.com/evelynlacerda/hourlog-backend)

## 🚀 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=for-the-badge&logo=radixui&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![TanStack Table](https://img.shields.io/badge/TanStack%20Table-FF4154?style=for-the-badge&logo=reacttable&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router%207-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Date Fns](https://img.shields.io/badge/Date%20Fns-770C56?style=for-the-badge&logo=date-fns&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Funcionalidades

- **Autenticação JWT** — login e cadastro, com token persistido no `localStorage` e injetado automaticamente em todas as requisições por um interceptor do Axios.
- **Rotas protegidas** — o `RequireAuth` valida a expiração do token antes de renderizar a área logada; o `PublicRoutes` impede que usuários já autenticados voltem para o login.
- **Gestão de projetos** — criação, edição, visualização e exclusão, com status (Em andamento, Pausado, Concluído, Finalizado) e cores por status.
- **Gestão de tarefas** — descrição, data, hora de início e hora final por tarefa, com atualização das horas totais do projeto a cada alteração.
- **Tabela de dados** — listagem com ordenação, filtros e ações em linha construída com TanStack Table.
- **Relatórios em PDF** — download do relatório do projeto gerado pela API, entregue como `Blob` no navegador.
- **Tema escuro e layout responsivo** — camada de CSS própria (`variables`, `dark`, `responsive`) sobre o Tailwind.
- **Feedback de interface** — notificações com Sonner e diálogos de confirmação para ações destrutivas.

## 📁 Estrutura do Projeto

```bash
hourlog/
├── public/
├── src/
│   ├── assets/css/          # variáveis, tema escuro, responsividade e camada Tailwind
│   ├── components/
│   │   ├── hourlog/         # componentes de domínio (DataTable, FormProjeto, TarefaInput...)
│   │   └── ui/              # primitivos do shadcn/ui
│   ├── constants/           # itens de menu e valores fixos
│   ├── helpers/             # utilitários de apresentação (Loading, ordenação de tarefas)
│   ├── hooks/               # useProjetos, useTarefas, usePassword, useRelatorioPdf, useLogout
│   ├── layout/              # header, sidebar, footer e shell autenticado (structor)
│   ├── lib/                 # instância do Axios, validação de token, PDF e utilitários
│   ├── pages/               # auth, dashboard, projetos e relatórios
│   ├── routes/              # router, rotas públicas e guarda de autenticação
│   ├── services/            # chamadas diretas à API
│   ├── types/               # tipagens de domínio
│   ├── utils/               # sincronização de tarefas
│   ├── App.tsx
│   └── main.tsx
├── components.json          # configuração do shadcn/ui
├── vite.config.ts
├── vercel.json
└── package.json
```

## ⚙️ Instalação e Execução Local

### Pré-requisitos

- **Node.js 20+**
- API do Hourlog rodando localmente ou o endereço da API em produção

### 1. Clonar o repositório

```bash
git clone https://github.com/evelynlacerda/hourlog.git
cd hourlog
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz:

```env
VITE_API_URL=http://localhost:3000
```

Em produção, aponte para a API publicada:

```env
VITE_API_URL=https://hourlog-backend.vercel.app
```

### 4. Rodar em modo de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

> A API libera CORS para `http://localhost:5173`, `http://localhost:3000` e `https://hourlog.vercel.app`. Ao usar outra porta, inclua-a na lista de origens permitidas do backend.

## 📜 Scripts

| Comando           | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Sobe o servidor de desenvolvimento do Vite com HMR      |
| `npm run build`   | Checa os tipos com `tsc -b` e gera o build de produção  |
| `npm run preview` | Serve localmente o conteúdo gerado em `dist/`           |
| `npm run lint`    | Executa o ESLint em todo o projeto                      |

## 🔐 Autenticação

O token é salvo em `localStorage` após o login e enviado automaticamente em cada requisição:

```ts
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
```

Antes de liberar as rotas privadas, `isTokenValid()` decodifica o payload do JWT e confere o campo `exp`. Se o token estiver ausente, malformado ou expirado, ele é removido e o usuário é redirecionado para `/login`.

## 🗺️ Rotas da Aplicação

| Rota                          | Acesso    | Descrição                              |
| ----------------------------- | --------- | -------------------------------------- |
| `/login`                      | Público   | Autenticação do usuário                |
| `/cadastrar`                  | Público   | Criação de conta                       |
| `/recuperar`                  | Público   | Recuperação de senha                   |
| `/dashboard`                  | Protegido | Visão geral                            |
| `/projetos`                   | Protegido | Listagem de projetos                   |
| `/incluir`                    | Protegido | Cadastro de projeto                    |
| `/projetos/:id/editar`        | Protegido | Edição de projeto e tarefas            |
| `/projetos/:id/visualizar`    | Protegido | Detalhes do projeto                    |
| `/relatorios`                 | Protegido | Geração e download de relatórios       |

A raiz (`/`) e qualquer rota desconhecida redirecionam para `/dashboard`.

## 🔌 Integração com a API

O estado do servidor é gerenciado pelo TanStack Query, com invalidação de cache após cada mutação.

| Hook                       | Endpoints consumidos                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| `useProjetos`              | `GET /projetos`, `POST /projetos/incluir`, `PUT /projetos/:id`, `DELETE /projetos/:id`     |
| `useTarefas`               | `GET /projetos/:id/tarefas`, `POST /projetos/:id/tarefas`, `PUT /tarefas/:id`, `DELETE /tarefas/:id` |
| `usePassword`              | `POST /password/forgot`, `POST /password/reset`                                            |
| `useRelatorioPdf`          | `GET /relatorios/item/:id/pdf`                                                             |

A documentação completa dos endpoints está no repositório da API: [hourlog-backend](https://github.com/evelynlacerda/hourlog-backend).

## 🚀 Deploy (Vercel)

Deploy automático a cada push na branch principal.

A variável `VITE_API_URL` deve ser cadastrada em **Vercel → Project → Settings → Environment Variables**.

Como se trata de uma SPA, o `vercel.json` reescreve todas as rotas sem extensão para o `index.html`, evitando erro 404 ao recarregar páginas internas:

```json
{
	"rewrites": [{ "source": "/((?!.*\\..*).*)", "destination": "/index.html" }]
}
```

## 👩‍💻 Autora

Desenvolvido por **Évelyn Lacerda**
[GitHub](https://github.com/evelynlacerda) · [LinkedIn](https://www.linkedin.com/in/evelyndsl) · [Portfólio](https://www.evelynlacerda.com.br)
