import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const existingProduct = this.items.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Увеличиваем количество, если продукт уже в корзине
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(product) {
      const index = this.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        // Удаляем продукт из корзины
        this.items.splice(index, 1);
      }
    },
    clearCart() {
      this.items = []; // Очистить корзину
    },
  },
  getters: {
    cartItems: (state) => {
      return state.items.map((item) => ({
        ...item,
        totalPrice: item.price * item.quantity,
      }));
    },
  },
});
