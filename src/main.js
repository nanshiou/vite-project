import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Notifications from '@kyvg/vue3-notification'
// import VPagination from "@hennge/vue3-pagination";
import routes from '~pages'
import App from './App.vue'
import './styles/style.scss'
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App)
    .use(router)
    .use(Notifications)
    .mount('#app')
