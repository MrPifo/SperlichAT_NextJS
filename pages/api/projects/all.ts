import { NextApiRequest, NextApiResponse } from 'next';
import {executeQuery as db} from '../../../lib/db';
import Project from '../../../types/project';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    let data:Project = await db("SELECT * FROM Projekte");
    
    res.send(data);
}