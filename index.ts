import puppeteer from 'puppeteer';
import express from 'express';

// * Set up Express App
const app = express();

let port: number = 8000;

app.listen(port, () => {
    console.log(`FormulaListings app is live on port ${port}`);
});

interface AmazonListing {
    itemName: string
}

interface WalmartListing {
    itemName: string
}

const evalAmazonLink = async (link: string): Promise<AmazonListing> => {
    await console.log(link)
    const listing: AmazonListing = {itemName: "itemName"}
    return new Promise<AmazonListing>((resolve, reject) => {
        resolve(listing)
    })
}

const evalWalmartLink = async (link: string): Promise<WalmartListing> => {
    await console.log(link);
    const listing: WalmartListing = {itemName: "itemName"};
    return new Promise<WalmartListing>((resolve, reject) => {
        resolve(listing)
    })
}
