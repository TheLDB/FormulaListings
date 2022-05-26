import { Response } from "express";

interface TypedRequestBody<T> extends Express.Request {
    body: T
}
const evalEndpoint = async (req: TypedRequestBody<{ links: [String] }>, res: Response) => {
    const test = req.body.links

    console.log(test.length);

    res.status(200).json({
        "Foo": "Bar",
         "Time": new Date().toISOString()
    });
}

export default evalEndpoint;