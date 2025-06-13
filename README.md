# Battlesnake JavaScript Starter Project

An official Battlesnake template written in JavaScript. Get started at [play.battlesnake.com](https://play.battlesnake.com).

![Battlesnake Logo](https://media.battlesnake.com/social/StarterSnakeGitHubRepos_JavaScript.png)

This project is a great starting point for anyone wanting to program their first Battlesnake in JavaScript. It can be run locally or easily deployed to a cloud provider of your choosing. See the [Battlesnake API Docs](https://docs.battlesnake.com/api) for more detail. 

[![Run on Replit](https://repl.it/badge/github/BattlesnakeOfficial/starter-snake-javascript)](https://replit.com/@Battlesnake/starter-snake-javascript)

## Description

Hissssteria is a Battlesnake AI that makes real-time decisions on how to move and survive in a multiplayer arena. It uses custom movement algorithms and flood fill logic to avoid collisions, chase food, and outlive opponents.

## Technologies
- Node.js
- Express.js
- Jest (for testing)
- Docker (for deployment)
- JSDoc (for documentation)


## Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional for deployment)
- [Battlesnake CLI](https://github.com/BattlesnakeOfficial/rules/tree/main/cli) (for local testing)


## Folder Structure

**.documentation/**
   -   CHANGELOG.md        ** Project changelog

**.github/**            **GitHub templates
   -   pull_request_template.md      ** Pull request template

**FloodFill/**    ** Flood fill logic module
   -  FloodFill.js

**jsdocs/**    
   -  fonts/   **Fonts used in docs
   -  scripts/  **   JSDoc scripts

       - prettify
       - linenumber.js
         
   -  styles/   **  CSS styles for docs
     
        -  jsdoc-default.css
        -  prettify-jsdoc.css
        -  prettify-tommorow.css
          
   - .js.html    **HTML files for documented modules
     
    
     
  **tests/**   **Unit tests using Jest
  -  floodFill.test.js
  -  head-to-head-mov.test.js
  -  manhattan-food.test.js
  -  snakes-movement-to-tail.test.js
  -  sum.test.js
  
  
   

   
          

 
**.editorconfig**  **Editor configuration

**.gitignore**  ** Git ignore rules

**.prettierignore**  **   Files ignored by Prettier

**.prettierrc.json**    **Prettier formatting rules

**Dockerfile**  **    Docker deployment file

**LICENCE**  

**README.md**

**eslint.config.js**  **  ESLint rules

**head-to-head-mov.js**  **  Game logic: handle head-to-head

**index.js**  **  App initializer

**jest.config.js**  **     Jest testing configuration

**jsdoc.config.json**  **   JSDoc configuration

**manhattan-food.js**  ** Game logic: go to food using Manhattan distance

**package-lock.json**  

**package.json**  ** Node.js project settings and scripts

**server.js**  **  Main HTTP server

**snakes-movement-to-tail.js**  ** Game logic: follow own tail

**sum.js**  





    
     
## How to Run Tests

Jest is used for unit testing. Run all tests with:
     
    npm test

      
 ##  How to Deploy on Production
 
 You can deploy using Docker:
 
    docker build -t hissssteria .
    
    docker run -p 8000:8000 hissssteria


 ## Configuration Files
  - .prettierrc.json — Prettier formatting rules
  - eslint.config.js — Linting rules
  - jest.config.js — Testing configuration
  - jsdoc.config.json — Documentation generation
    


## Variables & Launch Parameters
The app listens to:
- GET / for snake metadata
- POST /start to initialize
- POST /move to decide moves
- POST /end to terminate a game


## Extended Documentation

We use JSDoc to generate developer documentation.

To generate the docs:

    npx jsdoc .


## Contributors
 - ichatzivasileiadou
 - mkapetaniou
 - chriskirtsios
 - vacha0
 - lrizvanolli
 - ileivadopoulos


## License --MIT licence

## Run Your Battlesnake

Install dependencies using npm

```sh
npm install
```

Start your Battlesnake

```sh
npm run start
```

You should see the following output once it is running

```sh
Running Battlesnake at http://0.0.0.0:8000
```

Open [localhost:8000](http://localhost:8000) in your browser and you should see

```json
{"apiversion":"1","author":"","color":"#888888","head":"default","tail":"default"}
```

## Play a Game Locally

Install the [Battlesnake CLI](https://github.com/BattlesnakeOfficial/rules/tree/main/cli)
* You can [download compiled binaries here](https://github.com/BattlesnakeOfficial/rules/releases)
* or [install as a go package](https://github.com/BattlesnakeOfficial/rules/tree/main/cli#installation) (requires Go 1.18 or higher)

Command to run a local game

```sh
battlesnake play -W 11 -H 11 --name 'JavaScript Starter Project' --url http://localhost:8000 -g solo --browser
```


