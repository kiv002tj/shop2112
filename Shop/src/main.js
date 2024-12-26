// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";
// import router from "./router";
// import { createPinia } from "pinia";
// createApp(App).mount("#app");
// app.use(router);
// app.use(createPinia());
// app.mount("#app");
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Создайте экземпляр приложения
const app = createApp(App);

// Использовать маршрутизатор и Pinia
app.use(router);
app.use(createPinia());

// Смонтировать приложение
app.mount("#app");
