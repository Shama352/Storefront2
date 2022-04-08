import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
//@ts-ignore
import client from '../database';

dotenv.config();
const {
    PEPPER,
    SALT_ROUNDS,
} = process.env;

export type user = {
    id?: number;
    firstName: string;
    lastName: string;
    passWord: string;
}

export class usersFns {
    async index(): Promise<user[]> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM users`;
            const response = await connection.query(sqlQuery);
            connection.release();
            return response.rows;
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

    async create(user: user): Promise<user> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `INSERT INTO users (firstName, lastName, passWord) VALUES ($1, $2, $3) RETURNING *`;
            const hashedPass = await bcrypt.hashSync(user.passWord + PEPPER, Number(SALT_ROUNDS));
            const response = await connection.query(sqlQuery, [user.firstName, user.lastName, hashedPass]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

    async show(id: number): Promise<user> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM users WHERE id = $1`;
            const response = await connection.query(sqlQuery, [id]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

}