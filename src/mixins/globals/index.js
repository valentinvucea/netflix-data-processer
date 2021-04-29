import Vue from "vue";

import $getErrorMessage from "./error.mixins";
import $notify from "./notification.mixins";

Vue.mixin($getErrorMessage);
Vue.mixin($notify);