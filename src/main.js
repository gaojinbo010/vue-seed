import Vue from 'vue'
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import Vuex from 'vuex';
Vue.use(Vuex);
import store from "./store";

import NProgress from 'nprogress';
import "nprogress/nprogress.css";

// quill editor
import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor);

import App from "./App.vue";

// reset CSS
import "normalize.css/normalize.css";
import "font-awesome/css/font-awesome.min.css";


const router = new VueRouter({
  routes
});

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();

  next();
  // if (to.path == "/login") {
  //   sessionStorage.removeItem("user");
  // }
  // let user = JSON.parse(sessionStorage.getItem("user"));
  // if (!user && to.path != "/login") {
  //   next({ path: "/login" });
  // } else {
  //   next();
  // }
});

router.afterEach( () => {
  NProgress.done();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
