import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get('https://dummyjson.com/products')
        .then(response => {
          commit('setProducts', response.data.products);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  modules: {},
});
