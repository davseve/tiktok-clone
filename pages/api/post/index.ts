import type { NextApiRequest, NextApiResponse } from "next";
import { allPostsQuery } from "@/utils/queries";
import { client } from "@/utils/client";

export default async function handler( req: NextApiRequest, res: NextApiResponse, ) {
    if( 'GET' === req.method ) {
        const query = allPostsQuery();

        const data = await client.fetch( query )

        res.status(200).json(data);
    }
}
