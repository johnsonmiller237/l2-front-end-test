import { createRouter, createWebHashHistory } from "vue-router";
import AddBasket from "../components/addBasket.vue";
import BasketDetails from "../components/checkBasket.vue";
import EditBasket from "../components/editBasket.vue";
import Home from "../components/home.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/add-Basket', component: AddBasket },
    { path: '/editBasket/:id', component: EditBasket },
    { path: '/Basket-details/:id', component: BasketDetails }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;