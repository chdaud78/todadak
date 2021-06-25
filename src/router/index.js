import {createRouter, createWebHistory} from "vue-router";
import Kanban from "@/views/kanban/Kanban.vue";
import User from "@/router/user/index.js";

const routes = [
    {
        path: "/kanban",
        name: "Kanban",
        component: Kanban,
    },
    {
        path: "/todo",
        name: "Todo",
        component: () => import("../views/todo/Todo.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/user/Login.vue"),
    },
    ...User,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
