/* src/router/index.js */
import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  // router instance 생성
  routes: [
    {
      path: "/news", // url 주소
      component: NewsView, // url 주소로 갔을 때 표시될 Component (Page로 사용되는 Component)
    },
    {
      path: "/ask", 
      component: AskView,
    },
    {
      path: "/jobs", 
      component: JobsView, 
    }
  ]
});
