import express  from 'express'
import products_endpoints from './Controllers/productsController'
import orders_endpoints from './Controllers/ordersController'
import users_endpoints from './Controllers/usersController'
import bodyParser from 'body-parser'





const app: express.Application = express()
const address: string = "0.0.0.0:3000"


app.use(bodyParser.json())
products_endpoints(app)
orders_endpoints(app)
users_endpoints(app)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app;