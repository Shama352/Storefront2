import {user,usersFns} from "../models/usersModel";
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import getToken from "../middlewares/validation";

const userStore = new usersFns();


const index = async (req: Request, res: Response) => {
    try {
        const users = await userStore.index();
        res.json(users);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}

const show = async (req: Request, res: Response) => {
    try {
        const user = await userStore.show(Number(req.params.id));
        res.json(user);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const u1: user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            passWord: req.body.passWord,
        };
        const newuser = await userStore.create(u1);
        //@ts-ignore
        var token = jwt.sign({u1:newuser}, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
}


const users_endpoints = (app: express.Application) => {
    app.get('/users',getToken, index)
    app.post('/users/add', create)
    app.get('/users/:id',getToken ,show)
}
export default users_endpoints;
