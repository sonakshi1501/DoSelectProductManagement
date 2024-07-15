<template>
  <div class="container">
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

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {},
    };
  },
  created() {
    const productId = this.$route.params.id;
    axios.get(`https://dummyjson.com/products/${productId}`)
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
</style>
