import {useRouter} from 'next/router';
import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next';

const avo = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    //const {query: {id}} = useRouter()
    const id = req.query.id;
    const avo = await db.getById(id as string);
    //res.end(JSON.stringify({avo}))
    res.status(200).json(avo)
}

export default avo;