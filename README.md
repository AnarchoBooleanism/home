# My personal portfolio

This is a React app that constitutes my personal portfolio, with my profile, example works, and any relevant links.

This was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app), but was moved to and now runs on [Vite](https://vite.dev) and [React](https://react.dev) thanks to [Adhithi Ravichandran's guide for migrating to Vite](https://adhithiravi.medium.com/migrating-from-create-react-app-to-vite-a-modern-approach-76148adb8983).

## Available Scripts

In the project directory, after running `npm install` to install required dependencies, you can run:

### `npm run dev` (or `npm start`)

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

**NOTE**: This project is automatically deployed to GitHub Pages upon a successful push to the `main` branch, thanks to the CI/CD pipeline in GitHub Actions, but can be deployed anywhere else, provided that you copy the contents of the build folder to where a web server will be looking.

## Updating

To easily update all packages in this project, simply run `sudo npm i -g npm-check-updates && ncu -u && npm i`
