import { createRouter, createWebHistory } from "vue-router";
import EducationInfo from "../components/Forn/EducationInfo.vue";
import GeneralInfo from "../components/Forn/GeneralInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "generalInfo",
      component: GeneralInfo,
    },
    {
      path: "/educationInfo",
      name: "educationInfo",
      component: EducationInfo,
    },
  ],
});

export default router;
