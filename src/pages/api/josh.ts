import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()
 
type ResponseData = {
    message: string
}
 
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const query = req.query;
    const { subject } = query;

    // make request to josh's crappy go server
    axios.get(`${process.env.JOSH_API}/short_fact/${subject || "gecko"}`).then((response) => {
        res.status(200).json({ message: response.data });
    }).catch((err) => {
        res.status(500).json({ message: `Error querying Josh's API (skill issue): ${err}` });
    });
}