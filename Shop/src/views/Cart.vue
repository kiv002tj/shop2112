<template>
  <div>
    <h1 class="text-2xl mb-4">Корзина</h1>
    <ul>
      <li
        v-for="(item, index) in cartItems"
        :key="item.id"
        class="flex justify-between items-center mb-2"
      >
        <span>
          {{ item.name }} - {{ item.totalPrice }}₽ ({{ item.quantity }} шт.)
        </span>
        <button
          @click="removeFromCart(item)"
          class="text-red-500 hover:text-red-700"
        >
          Удалить
        </button>
      </li>
    </ul>
    <div v-if="cartItems.length === 0">Корзина пуста</div>
    <router-link
      to="/"
      class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
    >
      Вернуться в каталог
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.cartItems);

function removeFromCart(item) {
  cartStore.removeFromCart(item);
}
</script>

<style scoped>
.cart {
  padding: 20px;
}
</style>
