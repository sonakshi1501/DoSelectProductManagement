<template>
  <div class="card-container">
    <div v-for="product in products" :key="product.id" class="card">
      <img :src="product.thumbnail" class="card-img-top" alt="Product Image" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text"><strong>Price: </strong>${{ product.price }}</p>
        <router-link :to="`/products/${product.id}`" class="btn btn-primary"
          >View Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Products",
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
}

.card {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.25em;
  margin-bottom: 8px;
}

.card-text {
  font-size: 0.875em;
  margin-bottom: 8px;
}
</style>
