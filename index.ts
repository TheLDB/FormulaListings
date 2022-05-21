import puppeteer from 'puppeteer';

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
