import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Education from "./views/Education.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      component: About
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/education",
      name: "education",
      component: Education
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    { 
      path: '*', 
      redirect: '/' 
    }
  ]
});
