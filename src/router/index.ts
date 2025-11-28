import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../components/views/MainView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainView,
    },
  ],
});

export default router;
