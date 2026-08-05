# Creaocchio Sample Website

This project is built with [Astro](https://astro.build/).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
├── deploy.txt
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project using a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:4321`      |
| `pnpm build`        | Builds your production site to `./dist/`         |
| `pnpm host-deploy`  | Builds and deploys the site to the host server   |
| `pnpm preview`      | Previews your build locally                      |
| `pnpm astro ...`    | Runs CLI commands like `astro add`, `astro check`|

## 📦 Deployment

The `pnpm host-deploy` command automates the deployment process:
1. It runs `pnpm build` to generate the production files in the `dist/` directory.
2. It uses **WinSCP** to synchronize the local `dist/` folder with the remote server at Hostpoint.

**Note:** Ensure WinSCP is installed and your SSH key is configured as specified in `deploy.txt`.

## 👀 Learn More

Feel free to check the [Astro documentation](https://docs.astro.build) or the project-specific configuration files.
