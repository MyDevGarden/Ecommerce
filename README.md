# My PlantStore App
This is a sample application that demonstrates an E-commerce website using the MEAN stack. The application loads products a MongoDB database and displays them. Users can select to display products in a single category as well as can filter products according to category or price. Users can click on any product to get more information about the products and can see similar products . Users can select items and add them to their shopping cart

---
## Features

1. Products Categories
2. Admin Dashboard
3. User Dashboard
4. Filter By Category and By Price
5. Interactive Cart
6. Chekout
7. Payment Options with Credit cart/ Gpay
---

## Tech Stack
### Frontend:

reactjs | react-router |  CSS | Bootstrap 

### Backend:

nodejs | expressjs | mongodb | jwt 

### Payment Gateway:

Braintree

### Deployed On:

Render
---

### Live Demonstration
The E-commerce demo can be viewed online here.
>[Working Demo](https://ecommerce-plantstore.onrender.com)
---

## Istructions

### Getting Started 
1. To get started you can simply clone this ecommerce-demo repository and install the dependencies.

    Clone the ecommerce-demo repository using git:

    https://github.com/MyDevGarden/Ecommerce

2. From Backend folder run ``npm install``
3. To run the application use ``npm run dev`` or ``npm start``

___

### For Payment getway integration 
1. #### create a sandbox account by signing in
    (https://sandbox.braintreegateway.com/login)

2. #### Get your own 'Merchant Id', 'public key' and 'private key'
3. #### Create a .env file in your backend folder and paste all secret keys in it

### .env file for backend

PORT = 'Port you want to run your server'

MONGO_URL = 'Url for your mangodb atlus databse'

JWT_SECRET = 'your secret key to generate JWT token'


BRAINTREE_PUBLIC_KEY = 'Your public key'

BRAINTREE_PRIVATE_KEY = 'your private key'

BRAINTREE_MERCHANT_ID = 'your merchant id'

### .env file for frontend

REACT_APP_API = 'url to your frontend port'

___
### Special instuctions for testing payments
#### Test Card Nos for credit card payments
5555555555554444	Mastercard

2223000048400011	Mastercard

4111111111111111	Visa

4005519200000004	Visa

4009348888881881	Visa

#### (use any future date for expiry)

