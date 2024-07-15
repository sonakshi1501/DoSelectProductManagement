<template>
    <div class="container">
      <h1>Products</h1>
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4">
            <img :src="product.thumbnail" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text"><strong>Price:</strong> ${{ product.price }}</p>
              <router-link :to="`/products/${product.id}`" class="btn btn-primary">View Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'Products',
    computed: {
      ...mapState(['products']),
    },
    created() {
      this.$store.dispatch('fetchProducts');
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  