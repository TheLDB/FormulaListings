import puppeteer from 'puppeteer';

interface AmazonListing {
    itemName: string
};

interface WalmartListing {
    itemName: string,

}
const evalAmazonLink = (link: string): AmazonListing => {
    // * Open link in pupeteer and parse amazon shipping info, then return
    return {
        itemName: "hi"
    }
}

const evalWalmartLink = (link: string): WalmartListing => {
    return {
        itemName: "hi"
    }
}