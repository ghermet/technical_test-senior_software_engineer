## Installation

Run the following command to install the dependencies:

```bash
yarn install
```

## Commands

Here are some useful commands defined in the `package.json` file:

1. `yarn dev`: Starts the development server using Webpack and serves the application in development mode.

2. `yarn start`: Starts the production server using the `serve` package and serves the application from the `dist` folder.

3. `yarn build`: Builds the production-ready version of the application using Webpack.

4. `yarn storybook`: Starts the Ladle server for viewing the components.

5. `yarn test`: Runs the Jest test suite for the application.

6. `yarn tw-watch`: Runs the tailwindcss watch command.

## Development

This project use tailwindcss for styling. You can find the documentation [here](https://tailwindcss.com/docs).
You must always run the tailwindcss watch command alongside the Webpack dev server to see styling updates in real time.

```bash
 yarn tw-watch // or yarn tw-generate --watch
```