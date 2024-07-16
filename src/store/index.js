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
      axios.get('http://localhost:8001/products')
        .then(response => {
          commit('setProducts', response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  modules: {},
});
