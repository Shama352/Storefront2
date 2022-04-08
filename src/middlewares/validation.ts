import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const {
    TOKEN_SECRET
} = process.env;

async function getToken(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization
        //@ts-ignore
        const token = authorizationHeader.split(' ')[1]
        //@ts-ignore
        jwt.verify(token, TOKEN_SECRET)
        next()
    } catch (err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
}
export default getToken