import { createRouter, createWebHistory } from 'vue-router';
import Products from '../views/Products.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
];

const router = createRouter({
    history: createWebHistory(BASE_PATH),
    routes,
  });

export default router;
