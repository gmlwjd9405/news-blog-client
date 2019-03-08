/* src/router/index.js */
import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  // router instance 생성
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news", // url 주소
      name: "news",
      component: NewsView // url 주소로 갔을 때 표시될 Component (Page로 사용되는 Component)
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
    {
      path: "/item/:id",
      component: ItemView
    },
    {
      path: "/user/:id",
      component: UserView
    }
  ]
});
