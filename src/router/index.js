import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/test.vue";
import TaskPage from "../views/index.vue";
import CreatePage from "../views/create.vue";
import EditPage from "../views/id.vue";
import loginPage from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "TestView",
    component: TestView,
  },
  {
    path: "/login",
    name: "loginPage",
    component: loginPage,
  },
  {
    path: "/tasks",
    name: "TaskPage",
    component: TaskPage,
  },
  {
    path: "/tasks/create",
    name: "CreatePage",
    component: CreatePage,
  },
  {
    path: "/tasks/:taskId",
    name: "EditPage",
    component: EditPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (store.getters["auth/authenticated"] && from.name) {
    to.params.startTime = new Date();
  }
  if (
    to.name === "loginPage"
  ) {
    if (store.getters["auth/authenticated"]) {
      return next({
        name: "TaskPage",
      });
    }
    next();
  } else if (!store.getters["auth/authenticated"]) {
    return next({
      name: "loginPage",
    });
  } else if (to.name === null) {
    console.log("5");
    return next({
      name: "TaskPage",
    });
  }
  next();
});

export default router;
