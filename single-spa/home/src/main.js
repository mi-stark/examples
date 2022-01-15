import { createApp } from 'vue';
import router from "./router";
const app = createApp({render: ()=> <RouterView/>})
app.use(router);
app.mount("#app");
import('./services')