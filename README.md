Archiving since this is no longer needed.

# FormulaListings

## What is it?
- FormulaListings is a small project I wrote to monitor specific Amazon & Walmart links and check if baby formula is in stock, due to the shortage of it.

## Whats the tech stack?
There are two folders within this project, the backend API to collect information about the listings, and the frontend page to display that information.

- [Backend](https://github.com/TheLDB/FormulaListings/tree/main/api)
    - Language - [Typescript](https://www.typescriptlang.org/)
    - Package Manager - [PNPM](https://pnpm.io)
    - Dependencies
        - [ExpressJS](https://expressjs.com/) (using [@types/express](https://www.npmjs.com/package/@types/express))
        - [Puppeteer](https://github.com/puppeteer/puppeteer) (using [@types/puppeteer](https://www.npmjs.com/package/@types/puppeteer))
- [Web](https://github.com/TheLDB/FormulaListings/tree/main/web)
    - Language - [Typescript](https://www.typescriptlang.org/)
    - Framework - [NextJS](https://www.nextjs.org/)
    - Package Manager - [PNPM](https://pnpm.io/)

## How to run locally
First, open up two terminal instances and cd into both directories ([backend](https://github.com/TheLDB/FormulaListings/tree/main/api) and [web](https://github.com/TheLDB/FormulaListings/tree/main/web))

### Run the API
If you have [ts-node](https://www.npmjs.com/package/ts-node) installed already, skip this step

- Install ts-node
```bash
$ npm install -g typescript ts-node @types/node
```
- Now run the API
```bash
$ pnpm install
$ ts-node index.ts 

FormulaListings app is live on port 8000
```

### Run the web app
- Run the web server 
```bash
$ pnpm install
$ pnpm run dev
```

