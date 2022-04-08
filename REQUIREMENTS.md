# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

# API Endpoints
### Users
* Index [token required] `'/users [GET]'`
* Show [token required] `'/users/:id [GET] '`
* Create [token required] `'/users/add [POST]'`
Json 
{
    firstName: "string",
    lastName: "string",
    passWord: "string"
}
### Products
* Index [token required] `'/products [GET]'`
* Show [token required] `'/products/:id [GET]'`
* Create [token required] `'/products/add [POST]'`
Json 
{
    name: "string",
    price: "number",
    category: "string",
}
### Orders
* Current Order by user (args: user id)[token required] `'/api/orders/:id' [GET]`
* [OPTIONAL] Completed Orders by user (args: user id)[token required] `'/orders/active/:id' [GET]`
* [Added] Index  `'/api/orders [Get]'`
* [Added] Add Product to Order [token required] `'/orders/addproduct/:id [POST]'`
Json 
{
    "productId":"number",
    "quantity":"number"
}
* [Added] Create Order [token required] `'/orders/add [POST]'`
Json 
{
    "userId":"number",
    "status":"string",
}
* [Added] Get Order By User ID [token required] `'/orders/:id [GET]'`


# Data Shapes
### Product
* id
* name
* price
* category

### User
* id
* firstName
* lastName
* password

### Orders
* id
* user_id
* status 

### [ADDED] order_products
* id
* id (for order)
* id (for product in order)
* quantity 

