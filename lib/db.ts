import mysql from 'serverless-mysql';

const db:mysql.ServerlessMysql = mysql({
    config: {
      host: process.env.MYSQL_HOST,
      port: 3306,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    }
});

export async function executeQuery<T>(query:string, values?:string) {
    try {
      const results = await db.query<T>(query, values);
      await db.end();
      return results;
    } catch (Error:any) {
      return { Error };
    }
}
