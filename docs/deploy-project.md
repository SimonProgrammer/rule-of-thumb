# Deploy project

## Rule of thumb app

### Local

To deploy the project locally it is necessary to have node.js version v16.13.1 installed and execute the command

`nvm use && npm run dev`

## Production

To deploy the project in the production environment, it is only necessary to push to the master branch so that vercel deploys the app. If you want to test build the project for production, you can run the command:

`nvm use && npm run build`

## Documentation app

### Local

To deploy the documentation project locally it is necessary to have node.js version v16.13.1 installed and execute the command

`nvm use && npm run docs:dev`

## Production

To deploy the documentation project in the production environment, it is only necessary to push to the master branch so that vercel deploys the app. If you want to test build the project for production, you can run the command:

`nvm use && npm run docs:build`