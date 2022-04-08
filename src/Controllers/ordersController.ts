import { orderFns,order } from '../models/ordersModel'
import express, { Request, Response } from 'express'
import getToken from '../middlewares/validation';

const orderStore = new orderFns();
const getActiveOrder = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const order = await orderStore.getActiveOrder(id);
        res.json(order);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}

const getCompletedOrder = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const orders = await orderStore.getCompletedOrders(id);
        res.json(orders);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}

const getOrderByUserId = async (req: Request, res: Response) => { 
    try {
        const id = Number(req.params.id);
        const order = await orderStore.getOrderByUserId(id);
        res.json(order);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}

const index = async (req: Request, res: Response) => {
    try {
        const orders = await orderStore.index();
        res.json(orders);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}
const create = async (req: Request, res: Response) => {
    try {
        const o1: order = {
            userId: req.body.userId,
            status: req.body.status,
        };
        const order = await orderStore.create(o1);
        res.json(order);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}
const show = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const order = await orderStore.show(id);
        res.json(order);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}
const addProductOrder = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const order = await orderStore.addProductOrder(id,req.body.productId,req.body.quantity);
        res.json(order);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}

const orders_endpoints = (app: express.Application) => {
    app.get('/orders', index)
    app.post('/orders/add',getToken, create)
    app.get('/orders/:id', show)
    app.get('/orders/user/:id', getOrderByUserId)
    app.get('/orders/active/:id',getToken, getActiveOrder)
    app.get('/orders/completed/:id',getToken, getCompletedOrder)
    app.post('/orders/addproduct/:id',getToken, addProductOrder)
}
export default orders_endpoints;