import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "../views/home";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:path(.*)*',
            component: Home
        }
    ]
})