import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mixins/globals";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vuelidate from "vuelidate";
import ApiService from "./services/api.service";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);

ApiService.init();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
