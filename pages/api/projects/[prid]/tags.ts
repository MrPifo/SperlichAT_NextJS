import { NextApiRequest, NextApiResponse } from 'next';
import {executeQuery as db} from '../../../../lib/db';

export default async function getTags(req:NextApiRequest, res:NextApiResponse) {
    let data:{Name:string}[]|{Error:any} = await db<{Name:string}[]>("SELECT Name FROM ProjekteTags JOIN Tags ON TID = TAG_FK WHERE PR_FK = " + req.query.prid);
    let response:string[] = data.map(e => {
        return e.Name;
    });
    res.send(response);
}