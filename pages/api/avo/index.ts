import {IncomingMessage, ServerResponse} from 'http';
import DB from '@database';

const allAvos = async (req:IncomingMessage, res: ServerResponse) => {
    const db = new DB();
    const allAvos = await db.getAll();
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.end(JSON.stringify({length: allAvos.length, data: allAvos}));
    //res.end(JSON.stringify({hello: "world"}))
}

export default allAvos;