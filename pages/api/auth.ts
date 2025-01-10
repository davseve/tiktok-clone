import type { NextApiRequest, NextApiResponse } from "next";
import { allPostsQuery } from "@/utils/queries";
import { client } from "@/utils/client";

export default async function handler( req: NextApiRequest, res: NextApiResponse, ) {
    if( 'POST' === req.method ) {
        const user = req.body;

        console.log( { user } );
        client.createIfNotExists( user )
            .then(() => res.status(200).json( 'Login success' ))
    }
}
