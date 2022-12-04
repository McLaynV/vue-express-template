# Vue Express Template

A full-stack app template based on [biggestcookie](https://github.com/biggestcookie/vue-express-template)/[vue-express-template](https://github.com/biggestcookie/vue-express-template).

Using:

- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/v6/)

...and some more preferred choices, such as:

- [VueUse](https://vueuse.org/)
- [Sass](https://sass-lang.com/)
- [Vue setup syntax](https://vuejs.org/api/sfc-script-setup.html)

This template repo exists as a monorepo template, allowing you to clone and deploy a single repository for your entire app. Additionally, it also contains linting configuration, and references to shared TypeScript interfaces used across both apps.

## Setup

1. Clone the project.
2. Run `npm install` in the root folder, which will install dependencies in the root and subproject folders.
3. Run the dev servers for each app:
   - If you are using Visual Studio Code, press `Ctrl/Cmd + Shift + B` to run the default dev task, which will run dev servers for each app simultaneously.
   - If you are not using Visual Studio Code or wish to run these tasks manually, run `npm run dev:client` and `npm run dev:server` in the root folder in two separate terminals.
4. Build the project:
   - Run `npm run build` in the root folder.
   - When deploying each app, point your deployment to each respective app folder.
