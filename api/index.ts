import puppeteer from 'puppeteer';
import express from 'express';

// * Set up Express App
const app = express();

let port: number = 8000;

app.listen(port, () => {
    console.log(`FormulaListings app is live on port ${port}`);
});

app.post("/eval", require("./routes/eval"));