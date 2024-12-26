<template>
  <div class="full-width-container">
    <header class="header">
      <h1>Мой Магазин</h1>
    </header>

    <main class="main-content">
      <div class="catalog">
        <h2>Каталог товаров</h2>
        <div class="grid">
          <div class="product-card">
            <img src="product1.jpg" alt="Продукт 1" />
            <h3>Продукт 1</h3>
            <p>Цена: 100 ₽</p>
            <button @click="addToCart">В корзину</button>
          </div>
          <!-- Другие карточки товаров -->
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>© 2023 Мой Магазин. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      console.log("Продукт добавлен в корзину");
    },
  },
};
</script>

<style scoped>
.full-width-container {
  width: 100%; /* Занимает всю ширину */
  margin: 0; /* Убираем внешние отступы */
  padding: 0; /* Убираем внутренние отступы */
  background-color: white; /* Белый фон */
}

.header,
.main-content,
.footer {
  width: 100%; /* Занимает всю ширину родителя */
  padding: 20px; /* Внутренние отступы */
  box-sizing: border-box; /* Учитываем отступы в окончательной ширине элемента */
}

.catalog {
  width: 100%; /* Занимает всю ширину для каталога товаров */
}

.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* Автоматическая сетка карточек */
  gap: 16px; /* Пробел между карточками */
}

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.footer {
  text-align: center;
  background-color: #f8f8f8; /* Например, светло-серый фон для футера */
}
</style>
