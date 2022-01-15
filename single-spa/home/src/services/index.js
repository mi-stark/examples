import {registerApplication, start} from "single-spa";

[
    {
        name: 'app1',
        app: ()=> import('./app1'),
        activeWhen: '/#/app1'
    },
    {
        name: 'app2',
        app: ()=> import('./app2'),
        activeWhen: '/#/app2'
    }
].forEach(config => registerApplication(config));

start();