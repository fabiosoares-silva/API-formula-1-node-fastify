<div align="center">

  <img src="./.github/assets/arte-formula-1.png" alt="Logo" height="200">
  <h1 align="center"><strong>Minimal API Fórmula 1 - NodeJs e Fastify</strong></h1>
  <p align="center">
	  API desenvolvida com requirimentos mínimos, utilizando <b>Nodejs</b>, <b>Typescript</b> e <b>Fastify</b> .
  </p>

</div>

# Tecnologias

Esse código foi desenvolvido com os intens a seguir:

### Dependências

-   TypeScript
-   tsx npm
-   tsup npm
-   @tipes/node npm

### Arquivos

-   `.gitignore` - Ignora diretórios que não precisam ir para o repositório remoto, como por exemplo, o node_modules.
-   `.env` - Variáveis de ambiente.
-   `tsconfig.json` - Opções de configuração do TypeScript.

### Scripts

-   `npm run dist`: Compila os arquivos TypeScript para JavaScript em um diretório chamado dist.
-   `npm run start:dev`: Inicia o servidor no modo Dev. com as variáveis de de desenvolvimento carregadas do arquivo .env.
-   `npm run start:watch`: Inicia o servidor no modo Dev. com o suporte de recarregamento automático quando há alterações na aplicação.
-   `npm run start:dist`: Compila o projeto e inicia a versão compilada no diretório dist.

# Como usar?

Para clonar essa aplicação, você vai precisar do [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) instalados em seu computador. Na linha de comando, digite:

```bash

# Instala as dependências
$ npm install
# Inicia a aplicação com suporte de recarregamento automático
$ npm run start:watch
```
