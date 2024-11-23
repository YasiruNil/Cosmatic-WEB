import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = 4000;
const MYSQL_HOST = process.env.HOST || 'localhost';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQP_PASSWORD || '1234';
const MYSQL_DATABASE = process.env.DATABASE || 'cosmaticDB';


const MYSQL = {
    host: MYSQL_HOST,
    database:MYSQL_DATABASE,
    user:MYSQL_USER,
    password: MYSQL_PASSWORD
}


const config = {
    server: SERVER_PORT,
    mysql: MYSQL
}

export default config;