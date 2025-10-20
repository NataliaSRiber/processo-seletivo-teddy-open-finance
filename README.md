# Projeto Frontend — Teste Técnico Teddy Open Finance

Aplicação frontend desenvolvida em **React + Vite + TypeScript**, com foco em **performance, componentização e boas práticas**.  
A aplicação consome uma **API REST já existente (fornecida pelo desafio)** e implementa um **Design System próprio** via pacote compartilhado.

---

## 🎯 Escopo Funcional

A aplicação contém:

1. **Tela inicial**  
   - Input para o nome do usuário  
   - Redirecionamento automático para a listagem de clientes  

2. **Tela de listagem de clientes**  
   - Visualizar todos os clientes paginados  
   - Cadastrar novos clientes  
   - Editar e excluir clientes existentes  
   - Selecionar cliente para ver detalhes  

3. **Tela de clientes selecionados**  
   - Exibição completa dos dados dos clientes selecionados 

---

## 🧱 Tecnologias Utilizadas

- ⚛️ **React** + **Vite** (última versão)
- 💙 **TypeScript**
- 🎨 **TailwindCSS** (mobile-first)
- 🧩 **Context API** para gerenciamento de estado global
- 🧱 **Arquitetura de micro-frontends**
  - `apps/web` → aplicação principal  
  - `packages/ui` → design system compartilhado (botões, modais, inputs, etc.)
- 📦 **pnpm** para monorepo e gerenciamento de dependências
- 🐳 **Docker** para containerização
- ☁️ **Deploy automático na Vercel**
- 🧪 **Testing Library + Vitest** (testes unitários)
- 🧾 **Commits semânticos** (Conventional Commits)
- ⚙️ **CI/CD** configurado (integração contínua)

---

## 🐳 Executando com Docker

> É necessário ter o **Docker** e **pnpm** instalados.

### 1. Clone o repositório

```bash
# 1) Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto

# 2) Instale as dependências do monorepo
pnpm install

# 3) Crie o .env do app web (ajuste a URL da API se necessário)
echo 'VITE_API_URL=https://boasorte.teddybackoffice.com.br' > apps/web/.env
# iniciar somente o app web
pnpm --filter @teddy/web dev
# App: http://localhost:5173

# iniciar somente o app web
pnpm --filter @teddy/web dev
# App: http://localhost:5173
# checar lint
pnpm --filter @teddy/web lint

# build de produção
pnpm --filter @teddy/web build

# pré-visualizar o build (servidor estático local)
pnpm --filter @teddy/web preview
# Preview: http://localhost:4173

