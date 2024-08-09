# My PlantStore App
This is a sample application that demonstrates an E-commerce website using the MEAN stack. The application loads products a MongoDB database and displays them. Users can select to display products in a single category as well as can filter products according to category or price. Users can click on any product to get more information about the products and can see similar products . Users can select items and add them to their shopping cart

**Features**

1. Products Categories
2. Admin Dashboard
3. User Dashboard
4. Filter By Category and By Price
5. Interactive Cart
6. Chekout
7. Payment Options with Credit cart/ Gpay

## Live Demonstration
The E-commerce demo can be viewed online here.
>[Working Demo](http://www.)

# Istructions

### Getting Started 
1. To get started you can simply clone this ecommerce-demo repository and install the dependencies.

    Clone the ecommerce-demo repository using git:

    https://github.com/MyDevGarden/Ecommerce
2. From Backend folder run ``npm install``
3. To run the application use ``npm run dev``



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## For Payment getway integration 
1. ### create a sandbox account by signing in
    (https://sandbox.braintreegateway.com/login)

2. Get your own 'Merchant Id', 'public key' and 'private key'
3. ### Create a .env file in your backend folder and paste all secret keys in it

## .env file

PORT = 'Port you want to run your server'
MONGO_URL = 'Url for your mangodb atlus databse'
JWT_SECRET = 'your secret key to generate JWT token'

BRAINTREE_PUBLIC_KEY = 'Your public key'
BRAINTREE_PRIVATE_KEY = 'your private key'
BRAINTREE_MERCHANT_ID = 'your merchant id'


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

