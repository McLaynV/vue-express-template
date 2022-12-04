# Vue Express Template

A full-stack app template based on [biggestcookie](https://github.com/biggestcookie/vue-express-template)
/[vue-express-template](https://github.com/biggestcookie/vue-express-template).

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
