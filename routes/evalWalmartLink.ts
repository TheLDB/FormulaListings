interface WalmartListing {
    itemName: string
}

const evalWalmartLink = async (link: string): Promise<WalmartListing> => {
    await console.log(link);
    const listing: WalmartListing = {itemName: "itemName"};
    return new Promise<WalmartListing>((resolve, reject) => {
        resolve(listing)
    })
}

export default evalWalmartLink;
