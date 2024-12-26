// import { createRouter, createWebHistory } from "vue-router";
// import Catalog from "../views/Catalog.vue";
// import Cart from "../views/Cart.vue";
// import Product from "../views/Product.vue";

// const routes = [
//   {
//     path: "/",
//     name: "Catalog",
//     component: Catalog,
//   },
//   {
//     path: "/cart",
//     name: "Cart",
//     component: Cart,
//   },
//   {
//     path: "/product/:id",
//     name: "Product",
//     component: Product,
//     props: true,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
import { createRouter, createWebHistory } from "vue-router";
import Catalog from "../views/Catalog.vue";
import Cart from "../views/Cart.vue";
import Product from "../views/Product.vue";

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
