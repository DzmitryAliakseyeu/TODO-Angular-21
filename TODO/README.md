# TODO App

A minimal task management application built with **Angular 21** and **Angular Signals**.  
Add tasks, mark them as complete, and remove them — all without a backend.
Continuous deployment is handled by **Netlify**.  
Deployed and hosted on **[Netlify](https://todo-angular-21.netlify.app)**.

## Features

- Add new tasks via a reactive form input
- Mark tasks as complete (visually separated with strikethrough)
- Remove individual tasks
- Signal-based state management — no NgRx or external store
- Modern SCSS styling with design tokens (variables for colors, radii, spacing)
- Accessible buttons with `aria-label` and SVG icons
- Responsive layout (stacked on mobile)

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (standalone components) |
| State | Angular Signals (`signal`, `update`) |
| Forms | Reactive Forms (`FormGroup`, `FormControl`) |
| Styles | SCSS with design tokens |
| Tests | Vitest |
| Build | Angular CLI / `@angular/build` |

## Project structure

```
src/app/
├── pages/          # Routed page components
├── services/
│   └── formManager/  # FormManager service + Task model
├── shared/
│   └── form/         # Reusable form component
├── app.routes.ts
└── app.config.ts
```

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## CI/CD

Continuous deployment is handled by **Netlify**:

- Every push to the `develop` branch triggers an automatic build and deploy
- Build command: `npm run build`
- Published directory: `dist/TODO/browser`
- SPA routing is handled via a `_redirects` file (`/* → /index.html 200`)
- Configuration lives in [`netlify.toml`](../netlify.toml) at the repository root

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
