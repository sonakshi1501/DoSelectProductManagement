<template>
  <div class="container">
    <button onclick="history.back()">Back </button>
    <div class="card mt-4">
      <img :src="product.thumbnail" class="card-img-top" alt="Product Image">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text"><strong>Price:</strong> ${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { APIURL } from '../../API_URL'; // Adjust the import path as necessary

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {},
    };
  },
  created() {
    const productId = this.$route.params.id;
    axios.get(`${APIURL}products/${productId}`)
      .then(response => {
        this.product = response.data;
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
.card {
  width: 100%; /* Full width of the parent container */
  max-width: 600px; /* Maximum width for the card, adjust as needed */
  margin: auto; /* Center the card horizontally */
}

.card-img-top {
  width: 100%; /* Full width of the container */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Contain within the container without cropping */
  max-height: 300px; /* Maximum height, adjust as needed */
}
</style>
