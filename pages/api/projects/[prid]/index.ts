import { NextApiRequest, NextApiResponse } from 'next';
import {executeQuery as db} from '../../../../lib/db';
import Project from '../../../../types/project';

export default async function getProject(req:NextApiRequest, res:NextApiResponse) {
    let data:{projects:Project}[] = await db("SELECT * FROM Projekte WHERE PRID = " + req.query.prid);
    res.send(data[0]);
}