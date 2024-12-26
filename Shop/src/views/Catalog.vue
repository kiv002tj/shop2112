<template>
  <div class="catalog">
    <h1 class="text-2xl mb-4">Каталог товаров</h1>
    <div class="grid grid-cols-2 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <router-link
      to="/cart"
      class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
    >
      Перейти в корзину
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";

const products = ref([
  {
    id: 1,
    name: "Toyota Camry",
    price: 10000000,
    image: "/src/assets/images/Camry.jpg",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    price: 20000000,
    image: "/src/assets/images/Corolla.jpg",
  },
  {
    id: 3,
    name: "Toyota GR 86",
    price: 3000000,
    image: "/src/assets/images/trueno.jpg",
  },
  {
    id: 4,
    name: "Toyota Avalon",
    price: 40000000,
    image: "/src/assets/images/avalon.jpg",
  },
]);
</script>

<style scoped>
.catalog {
  padding: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  overflow: hidden; /* Скрывает переполнение содержимого */
  max-width: 220px; /* Максимальная ширина карточки */
}

.product-image {
  width: 100%; /* Ширина изображения 100% от карточки */
  height: 100%; /* Высота сохраняет пропорции */
  object-fit: cover; /* Сохраняет пропорции изображения */
}

.product-name {
  font-size: 18px;
  margin: 10px 0;
}

.product-price {
  font-size: 16px;
  color: #333;
}
</style>
