//@ts-ignore
import client from '../database';

export type product = {
    id?: number;
    name: string;
    price: number;
    category: string;
}

export class productFns {
    async index(): Promise<product[]> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM products`;
            const response = await connection.query(sqlQuery);
            connection.release(); sqlQuery
            return response.rows;
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

    async create(product: product): Promise<product> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *`;
            const response = await connection.query(sqlQuery, [product.name, product.price, product.category]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

    async show(id: number): Promise<product> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM products WHERE id = $1`;
            const response = await connection.query(sqlQuery, [id]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

    async getProdCat(category: string): Promise<product[]> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM products WHERE category = $1`;
            const response = await connection.query(sqlQuery, [category]);
            connection.release();
            return response.rows;
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

}