import Home from './views/Home.vue';
let routes = [
  {
    path: "",
    name: "",
    component: Home
  },
  {
    path: "/home",
    name: "",
    component: Home
  },
  {
    path: "/dev",
    name:"",
    component:resolve => require(['@/views/dev/dev.vue'],resolve)
  }
  // {
  //     path: '*',
  //     hidden: true,
  //     redirect: { path: '/404' }
  // }
];

export default routes;