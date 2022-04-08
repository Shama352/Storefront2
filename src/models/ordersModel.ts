//@ts-ignore
import client from '../database';


export type order = {
    id?: number;
    userId: number;
    status: string;
}

export class orderFns {
    async addProductOrder(orderId: number, productId: number, quantity:number): Promise<order> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `INSERT INTO orders_products (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *`;
            const response = await connection.query(sqlQuery, [orderId, productId, quantity]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }

    }

    async getActiveOrder(userId: number): Promise<order[]> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM orders WHERE user_id = $1 AND status = 'active'`;
            const response = await connection.query(sqlQuery, [userId]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }
    async getOrderByUserId(userId: number): Promise<order[]> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM orders WHERE user_id = $1`;
            const response = await connection.query(sqlQuery, [userId]);
            connection.release();
            return response.rows;
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }
    async getCompletedOrders(userId:number): Promise<order[]> { 
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM orders WHERE user_id = $1 AND status = 'completed'`;
            const response = await connection.query(sqlQuery, [userId]);
            connection.release();
            return response.rows;
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }
    async index(): Promise<order[]> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM orders`;
            const response = await connection.query(sqlQuery);
            connection.release();
            return response.rows;
        }
        catch (err) {
           throw new Error(`${err}`);
        }
    }

    async create(order:order): Promise<order> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *`;
            const response = await connection.query(sqlQuery, [order.userId, order.status]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }

    async show(id: number): Promise<order> {
        try {
            //@ts-ignore
            const connection = await client.connect();
            const sqlQuery = `SELECT * FROM orders WHERE id = $1`;
            const response = await connection.query(sqlQuery, [id]);
            connection.release();
            return response.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }
}
   