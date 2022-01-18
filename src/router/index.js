import VueRouter from "vue-router";
import Home from "@/views/Home";
import Pin from "@/views/Pin";
const routes = [
  { path: '/', component: Home },
  { path: '/pin/:id', name:"pin", component: Pin }
]
export default new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});