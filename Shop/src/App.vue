<template>
  <div id="app" class="min-h-screen bg-gray-200 p-6">
    <header class="bg-white shadow-md mb-6 rounded-lg p-6 w-full">
      <h1 class="text-4xl font-semibold text-center text-gray-800">
        Мой Магазин
      </h1>
      <nav class="mt-4 text-center">
        <router-link to="/" class="nav-link" active-class="active-link">
          Главная
        </router-link>
        <router-link to="/cart" class="nav-link" active-class="active-link">
          Корзина
        </router-link>
      </nav>
    </header>

    <main class="bg-white shadow-md rounded-lg p-6 w-full">
      <router-view />
    </main>

    <footer class="mt-6 text-center w-full">
      <p class="text-gray-600">&copy; 2023 Мой Магазин. Все права защищены.</p>
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  font-size: 1.25rem; /* Размер шрифта */
  color: #4a4a4a; /* Цвет */
  margin: 0 15px; /* Отступы */
  text-decoration: none; /* Убираем подчеркивание */
  transition: color 0.3s ease; /* Плавный переход цвета */
}

.nav-link:hover {
  color: #4a90e2; /* Цвет при наведении */
}

.active-link {
  font-weight: bold; /* Жирный шрифт для активной ссылки */
  border-bottom: 2px solid #4a90e2; /* Подчеркивание активной ссылки */
}

footer {
  font-size: 0.9rem; /* Размер шрифта нижнего колонтитула */
}

.product {
  padding: 20px;
}
</style>
