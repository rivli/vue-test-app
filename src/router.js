import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Home"),
      children: [
        {
          path: "/",
          component: () => import("@/pages/AllProducts"),
        },
        {
          path: "/category/:id",
          component: () => import("@/pages/Category"),
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./pages/Cart"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("./pages/Favorites"),
    },
  ],
});
