# Vue: Product Management Application

## Objective

This project is a Product Management Application built with Vue.js, Vue Router for navigation, Vuex for state management, Axios for data handling, and Bootstrap for styling. The application provides product management functionalities, including viewing product listings and product details.

- View Products: Display a list of products.
- View Product Details: Display detailed information about a selected product.

### [Products](src/views/Products.vue)
- On the main page, a list of products will be displayed.
- Each product is displayed as a card with its title, description, price, and thumbnail.

### [ProductDetail](src/views/ProductDetail.vue)
- Click on a product card to navigate to the product detail page.
- The product detail page will display detailed information about the selected product

### [App](src/App.vue)
- Use router-link components in your template to navigate between different routes.

## API Integration
The application uses the dummyjson.com API to fetch product data.

- Get Products: https://dummyjson.com/products
- Get Product Details: https://dummyjson.com/products/{id}

## Instructions

### App 
- The 'to' prop in router-link specifies the target route path. For example, to="/" navigates to the home route, and to="/products" navigates to the products route defined in your Vue Router configuration.

### Product Page
- The product card will include an image with the class name 'card-img-top'.
- The title of the product will be displayed using the class 'card-title'.
- The description and price of the product will be shown in the card using the class 'card-text'.
- Each card will feature a 'View Details' button, styled with 'btn btn-primary', which allows users to view specific details of the 
  product. Clicking this button will open the product detail page with the corresponding product ID.

### Product Detail Page
- An image represents the product with the class name 'card-img-top'.
- The title of the product, styled with 'card-title'.
- Detailed description and price information using the class 'card-text'.
- The page will make an API call to fetch detailed information about the product based on its ID. This data will be used dynamically in 
  the template to populate the product detail page.

### store/index.js
- Ensure the Vuex state object contains a products array initially set to empty. This array will hold the fetched products from the API.
- Define a mutation named 'setProducts' to update the product's state with the fetched data.
- Implement an action named 'fetchProducts' that uses Axios to fetch products from the API endpoint (https://dummyjson.com/products).
- Upon successful response, commit the 'setProducts' mutation to update the state with the fetched products.
- Handle any errors that may occur during the API call.

## Expected Live Preview

![Live Preview (Placeholder)](https://media-doselect.s3.amazonaws.com/generic/nY05xxg2z2dEAbrOjZOXAEQed/management.gif)

## Commands

### Install Packages:

```bash
npm install
```

This command will run automatically when the IDE is launched. However, if stopped, you may need to run it manually.

### Start Dev Server:

```bash
npm start
```

This command will start the dev server. You can view the **Live Preview** once the server is started in multiple ways:

- Click the `Preview in Editor` option that pops up at the bottom-right corner
- Click the Open `Preview` option in the `Run` menu


### Run Test Cases:

```bash
npm test
```

This will run the test cases in the terminal.

> These commands can be executed in the terminal or by selecting options from the `Run` menu.

## Environment

- Vue Version: 3.4.29
- Node Version: 14.21.3
- Default Port: 3000
