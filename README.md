# Vue Express Template

A full-stack app template based on [biggestcookie](https://github.com/biggestcookie/vue-express-template)
/[vue-express-template](https://github.com/biggestcookie/vue-express-template).

Using:

- [TypeScript](https://www.typescriptlang.org/) strongly typed programming language that builds on JavaScript
- [Vue.js](https://vuejs.org/) framework for building web user interfaces
- [Vite](https://vitejs.dev/) frontend tools
- [Pinia](https://pinia.vuejs.org/) Vue stores
- [Express.js](https://expressjs.com/) web framework (backend)
- [Sequelize](https://sequelize.org/v6/) ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more
- [Bulma](https://bulma.io/) CSS framework

...and some more preferred choices, such as:

- [VueUse](https://vueuse.org/) Vue composition utilities
- [Sass](https://sass-lang.com/) CSS extension language
- [Vue setup syntax](https://vuejs.org/api/sfc-script-setup.html)
  to declare props and emitted events using pure TypeScript

...and testing frameworks:

- [Vitest](https://vitest.dev/) for backendish stuff
- [Cypress](https://www.cypress.io/) for GUI components

This template repo exists as a monorepo template,
allowing you to clone and deploy a single repository for your entire app.
Additionally, it also contains linting configuration,
and references to shared TypeScript interfaces used across both apps.

## Setup

1. Clone the project.
2. Run `npm install` in the root folder and subproject folders.
   - You can rename `postinstall-unused` -> `postinstall` in the `package.json`
     to run the subproject `npm install` automatically after the root `npm install` is called.
   - In Intellij Idea, we have `.run/install (parallel).run.xml` that executes them all at once.
     Therefore, the `postinstall` is unused
     so that it doesn't trigger running the subproject `npm install` for a second time.
   - npm --prefix ./client run dev
3. Run the dev servers for each app (in the root folder in two separate terminals):
   - Either manually using
     - `npm run dev:client`
     - `npm run dev:server`
   - Or in Intellij Idea using `.run/dev.run.xml`
4. Build the project:
   - Run `npm run build` in the root folder.
   - When deploying each app, point your deployment to each respective app folder.
