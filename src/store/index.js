import { createStore } from 'vuex';
import axios from 'axios';
import { APIURL } from '../../API_URL'; // Adjust the import path as necessary

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
      axios.get(`${APIURL}products`)
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
