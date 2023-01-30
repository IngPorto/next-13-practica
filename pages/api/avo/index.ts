import {IncomingMessage, ServerResponse} from 'http';

const allAvos =async (req:IncomingMessage, res: ServerResponse) => {
    res.end(JSON.stringify({hello: "world"}))
}

export default allAvos;