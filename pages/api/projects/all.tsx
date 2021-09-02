import {executeQuery as db} from '../../../lib/db';

export default async function handler(req:any, res:any) {
    let data:any = await db("SELECT * FROM Projekte");
    
    res.status(200).json(data);
}