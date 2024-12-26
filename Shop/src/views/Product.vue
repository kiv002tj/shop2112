<template>
  <div class="product">
    <h1 class="text-2xl mb-4">{{ product.name }}</h1>
    <img :src="product.image" alt="Product Image" class="w-full mb-4" />
    <p>Цена: {{ product.price }} ₽</p>
    <p class="description">{{ product.description }}</p>
    <!-- Описание продукта -->
    <button
      @click="addToCart"
      class="bg-green-500 text-white py-2 px-4 rounded"
    >
      В корзину
    </button>
    <router-link to="/" class="text-blue-500">Вернуться к каталогу</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../stores/cart";

const route = useRoute();
const cartStore = useCartStore();

const products = ref([
  {
    id: 1,
    name: "Toyota Camry",
    price: 100,
    image: "/src/assets/images/Camry.jpg",
    description:
      "Toyota Camry – это среднеразмерный седан, который стал одним из самых популярных автомобилей в мире благодаря своему комфорту, надежности и высокому уровню безопасности. Оснащён передовыми технологиями и инновационными системами, он предлагает плавную поездку и отличную экономичность.",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    price: 20000000,
    image: "/src/assets/images/Corolla.jpg",
    description:
      "Toyota Corolla представляет собой один из наиболее раскрученных моделей в истории автомобилестроения. Этот компактный седан обеспечивает надежность, экономичность и комфорт, делая его отличным выбором для повседневных поездок. Он также имеет высокие оценки за свою безопасность и долговечность.",
  },
  {
    id: 3,
    name: "Toyota Trueno",
    price: 3000000,
    image: "/src/assets/images/trueno.jpg",
    description:
      "Toyota Trueno – это культовый спортивный автомобиль, который стал легендой благодаря своей манёвренности и производительности. Он стал популярным среди любителей автоспорта и дрифта, предлагая захватывающее вождение и уникальный дизайн.",
  },
  {
    id: 4,
    name: "Toyota Avalon",
    price: 40000000,
    image: "/src/assets/images/avalon.jpg",
    description:
      "Toyota Avalon – это представительский седан, предлагающий просторный интерьер, комфортабельные сиденья и высокотехнологичные функции. Он ориентирован на тех, кто ищет сочетание стиля и роскоши, и обладает высокими показателями экономичности и безопасности.",
  },
]);

const product = ref({});

onMounted(() => {
  const id = Number(route.params.id);
  product.value = products.value.find((p) => p.id === id);
});

function addToCart() {
  cartStore.addToCart(product.value);
}
</script>

<style scoped>
.product {
  padding: 20px;
}

.description {
  margin-top: 10px; /* Отступ сверху для описания */
  font-size: 16px; /* Размер текста описания */
}
</style>
