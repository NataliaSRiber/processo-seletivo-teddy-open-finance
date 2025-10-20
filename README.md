# Projeto Frontend — Teste Técnico Teddy Open Finance

Sistema moderno de gerenciamento de clientes desenvolvido com React, TypeScript e arquitetura de micro-frontends. Oferece uma experiência completa de CRUD com interface intuitiva, performance otimizada e design responsivo.
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
   - Selecionar cliente 

3. **Tela de clientes selecionados**  
   - Exibição dos clientes selecionados 

---

## 🧱 Stack Tecnológica

Frontend: React 18 + Vite + TypeScript

Estilização: TailwindCSS

Gerenciamento de Estado: Context API

Build Tool: Vite

Package Manager: pnpm

Testes: Cypress (E2E)

Containerização: Docker + Docker Compose

Deploy: Vercel


---

## 🚀 Executando o projeto

É necessário ter o **Docker** e **pnpm** instalados.

### Opção 1: Docker (Recomendado para teste rápido)

```bash
git clone git@github.com:NataliaSRiber/processo-seletivo-teddy-open-finance.git
cd processo-seletivo-teddy-open
docker-compose up
http://localhost:5173/
```

### Opção 2: Desenvolvimento local

Pré-requisitos
Node.js 18+
pnpm (npm install -g pnpm)

```bash
git clone git@github.com:NataliaSRiber/processo-seletivo-teddy-open-finance.git
cd processo-seletivo-teddy-open
pnpm install
pnpm --filter @teddy/web dev
 http://localhost:5173/
```
## Comandos de desenvolvimento

```bash
# Desenvolvimento da aplicação principal
pnpm --filter @teddy/web dev

# Desenvolvimento de todos os pacotes
pnpm dev

# Build de produção
pnpm --filter @teddy/web build

# Preview do build
pnpm --filter @teddy/web preview

# Análise de código
pnpm --filter @teddy/web lint
```

## 🔬 Testes End-to-End (Cypress)

```bash
# Interface visual interativa
pnpm cy:open

# Execução em modo headless
pnpm cy:run

# Teste específico de clientes
pnpm cy:run -- --spec "cypress/e2e/clients.cy.ts"

# Executar com browser específico
pnpm cy:run -- --browser chrome
```

Configuração do Cypress

```bash
# Instalação do Cypress (se necessário)
pnpm add -D cypress

# Instalar binário do Cypress
npx cypress install
```

🚀 ## Deploy

A aplicação está configurada para deploy automático na Vercel. Cada push para a branch main gera um deploy automático.

Desenvolvido para Teddy Open Finance
