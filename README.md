# projetoFrontBase

Projeto de microfrontend

## Estrutura do Projeto

```
projetoFrontBase/
├── packages/           # Microfrontends
├── cypress/           # Testes E2E
├── .dockerignore      # Configuração Docker
├── .editorconfig      # Configuração do editor
├── .eslintrc.json     # Configuração ESLint
├── .gitignore         # Arquivos ignorados pelo Git
├── .prettierrc        # Configuração Prettier
├── tsconfig.json      # Configuração TypeScript
├── tsconfig.base.json # Configuração base TypeScript
├── cypress.config.ts  # Configuração Cypress
└── package.json       # Dependências do projeto
```

## Tecnologias

- TypeScript
- React
- ESLint
- Prettier
- Cypress (para testes E2E)

## Scripts Disponíveis

- `npm run dev` - Inicia o ambiente de desenvolvimento
- `npm run build` - Build do projeto
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Corrige problemas do linter
- `npm run format` - Formata o código
- `npm run test` - Executa os testes
- `npm run test:cypress` - Executa testes Cypress
- `npm run type-check` - Verifica tipos TypeScript

## Requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

## Instalação

```bash
npm install
```

## Licença

MIT
