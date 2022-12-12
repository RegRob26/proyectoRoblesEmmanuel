import mysql from 'promise-mysql';
import key from './keys';

const pool = mysql.createPool(key.database);

pool.getConnection().then(connection =>
    {
        pool.releaseConnection(connection);
        console.log("database connected");
    }
    );

export default pool;