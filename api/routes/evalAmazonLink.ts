import puppeteer from 'puppeteer';

interface AmazonListing {
    itemName: string
}

const evalAmazonLink = async (link: string): Promise<AmazonListing> => {
    await console.log(link)
    const listing: AmazonListing = {itemName: "itemName"}
    return new Promise<AmazonListing>((resolve, reject) => {
        resolve(listing)
    })
}

export default evalAmazonLink;