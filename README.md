# CONFIG

## TODO

- Read env var
- read .env file
- read prod, dev
- read .yml config
- validation

# Issues with current

Pass as env var

# Usage

    - "start:dev": "nest start --watch",
    will take the .env file

    - "start:pass-env": "cross-env DATABASE_USER=FromEnvUser DATABASE_PASSWORD=FromEnvPassword \"npm run start:dev\"",
    will take the env variables from cross-env

    - "start:dev-selec-env": "cross-env NODE_ENV=development \"npm run start:dev\"",
    will take the env variables from .env.development

# installs

npm i --save @nestjs/config  
npm i cross-env  
npm install --save joi

<!-- https://discordapp.com/channels/520622812742811698/1077272273418981539/1077272273418981539 -->
