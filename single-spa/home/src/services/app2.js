import {createApp} from "vue";
import SingleSpaVue from "single-spa-vue";
const vueLifecycles = SingleSpaVue({
    createApp,
    appOptions: {
        el: '#micro-app',
        render: () => <div>this is app2</div>
    }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;