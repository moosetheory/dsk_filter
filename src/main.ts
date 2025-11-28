import { createApp } from "vue";
import App from "./App.vue";
import { PrimeVue } from "@primevue/core";
import Aura from "@primeuix/themes/aura";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);
app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(createPinia())
  .use(router);

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
