<template>
  <div class="border p-4">
    <img :src="product.image" alt="Product Image" class="w-full mb-2" />
    <h2 class="font-bold">{{ product.name }}</h2>
    <p>Цена: {{ product.price }} ₽</p>
    <button
      @click="addToCart"
      class="bg-green-500 text-white py-2 px-4 rounded"
    >
      В корзину
    </button>
    <router-link
      :to="{ name: 'Product', params: { id: product.id } }"
      class="text-blue-500"
      >Подробнее</router-link
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useCartStore } from "../stores/cart";

const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();

function addToCart() {
  cartStore.addToCart(props.product);
}
</script>

<style scoped>
.product-card {
  transition: transform 0.2s;
}
.product-card:hover {
  transform: scale(1.05);
}
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
