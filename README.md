# Claritas-2024
## Requirements
- [Node.js](https://nodejs.org) - built and tested on Node 20
- [pnpm](https://pnpm.io) - the project's package manager

## Building from source
```shell
pnpm install
pnpm run build
```

## Running with Docker
```shell
docker build -t claritas-2024 .
docker run -p 80:80 -d claritas-2024
```

## CI/CD
This repository uses GitHub Actions to lint the code, audit dependencies and deploy to Netlify. The `main` branch deploys to https://sendcode-claritas-2024-dev.netlify.app and the `stable` branch deploys to https://sendcode-claritas-2024.netlify.app and https://claritaswm.co.uk.
