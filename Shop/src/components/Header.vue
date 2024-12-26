<template>
  <header class="bg-white shadow-md mb-6 rounded-lg p-6 w-full">
    <h1 class="text-4xl font-semibold text-center text-gray-800">
      Мой Магазин
    </h1>
    <nav class="mt-4 text-center">
      <router-link to="/" class="nav-link" active-class="active-link"
        >Главная</router-link
      >
      <router-link to="/cart" class="nav-link">Корзина</router-link>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  font-size: 1.25rem;
  color: #4a4a4a;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4a90e2;
}

.active-link {
  font-weight: bold;
  border-bottom: 2px solid #4a90e2;
}
</style>
