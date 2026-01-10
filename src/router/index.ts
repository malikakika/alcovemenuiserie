import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/menuiserie", component: () => import("@/views/Menuiserie.vue") },
  { path: "/charpente", component: () => import("@/views/Charpente.vue") },
  { path: "/extension", component: () => import("@/views/Extension.vue") },
  { path: "/escalier", component: () => import("@/views/Escalier.vue") },
  { path: "/cuisine", component: () => import("@/views/Cuisine.vue") },
  { path: "/atelier", component: () => import("@/views/Atelier.vue") },

  {
    path: "/realisations",
    component: () => import("@/views/NosRealisations.vue"),
  },
  { path: "/a-propos", component: () => import("@/views/About.vue") },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
