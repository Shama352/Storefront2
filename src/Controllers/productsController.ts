import { product,productFns } from '../models/productsModel';
import express, { Request, Response } from 'express'


const productStore = new productFns();

const index = async (req: Request, res: Response) => {
    try {
        const products = await productStore.index();
        res.json(products);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}
const create = async (req: Request, res: Response) => {
    try {
        const p1: product = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        };
        const product = await productStore.create(p1);
        res.json(product);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}
const show = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const product = await productStore.show(id);
        res.json(product);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}
const getProdCat = async (req: Request, res: Response) => {
    try {
        const category = req.params.category;
        const products = await productStore.getProdCat(category);
        res.json(products);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}

const products_endpoints = (app: express.Application) => {
    app.get('/products', index)
    app.post('/products/add', create)
    app.get('/products/:id', show)
    app.get('/products/category/:category', getProdCat)
}
export default products_endpoints;