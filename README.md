# My PlantStore App
This is a sample application that demonstrates an E-commerce website using the MEAN stack. The application loads products a MongoDB database and displays them. Users can select to display products in a single category as well as can filter products according to category or price. Users can click on any product to get more information about the products and can see similar products . Users can select items and add them to their shopping cart

**Features**

1. Product Categories
2. Login Authentication
3. Admin Dashboard
4. User Dashboard
5. Intercative shopping cart
6. Checkout options with credit card and gpay
7. Order Processing

**Tools Used**
1. ReactJS
2. ExpressJS
3. NodeJS
4. MongoDB
5. Bootstrap css


## Live Demonstration
The E-commerce demo can be viewed online here.
>[working Demo](http://)
# Getting Started 

### Instructions
1. To get started you can simply clone this ecommerce-demo repository and install the dependencies.

Clone the ecommerce-demo repository using git:

git clone https://github.com/MyDevGarden/Ecommerce

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



2. In the project directory, from backend folder you can run: ``npm run dev``

## For Payment getway integration 
### create a sandbox account by signing in
(https://sandbox.braintreegateway.com/login)

Get the 'Merchant Id', 'public key' and 'private key'
### Create a .env file in your backend folder and paste all secret keys in it

.env file
PORT = 'Port you want to run your server'
MONGO_URL = 'Url for your mangodb atlus databse'
JWT_SECRET = 'your secret key to generate JWT token'

BRAINTREE_PUBLIC_KEY = 'Your public key'
BRAINTREE_PRIVATE_KEY = 'your private key'
BRAINTREE_MERCHANT_ID = 'your merchant id'

### Create a .env file in your frontend folder and paste all secret keys in it

.env file
REACT_APP_API = http://localhost:your server port no



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
