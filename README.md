# My personal portfolio

This is a React app that constitutes my personal portfolio, with my profile, example works, and any relevant links.

This was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app), but was moved to and now runs on [Vite](https://vite.dev) and [React](https://react.dev) (and [Sass](https://sass-lang.com/)), thanks to [Adhithi Ravichandran's guide for migrating to Vite](https://adhithiravi.medium.com/migrating-from-create-react-app-to-vite-a-modern-approach-76148adb8983).

## Available Scripts

In the project directory, after running `npm install` to install required dependencies, you can run the below commands.

**NOTE**: To be able to run the binaries referenced in the commands, you should affix the `npx` command so that it can invoke the binaries in the `node_modules` directory. For example, `vite dev` would become `npx vite dev`.

### `vite dev` (or `vite` or `vite serve`)

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To specify the port to listen to (by default, `5173`), add the `--port <PORT_NUMBER>` flag: `npx vite dev --port 8080`

This command is also run when running `npm run dev` or `npm start`; no extra arguments given to either command will be passed to Vite, however.

### `vitest`

Launches the test runner in the interactive watch mode.

This command is also run when running `npm test`; no extra arguments given to either command will be passed to Vite, however.

### `vite build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

To specify the directory to output the build to (by default, `build`), add the `--outDir <DIRECTORY>` flag: `npx vite build --outDir mySpecialDir/buildFolder`

This command is also run when running `npm run build`; no extra arguments given to either command will be passed to Vite, however.

**NOTE**: This project is automatically deployed to GitHub Pages upon a successful push to the `main` branch, thanks to the CI/CD pipeline in GitHub Actions, but can be deployed anywhere else, provided that you copy the contents of the build folder to where a web server will be looking.

## Updating

To easily update all packages in this project, simply run `sudo npm i -g npm-check-updates && ncu -u && npm i`
