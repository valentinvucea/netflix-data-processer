import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { getErrorMessage } from "../helpers/handle.errors";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    },
    
    setAuthorizationHeader() {
        Vue.axios.defaults.headers.common["x-access-token"] = `${AuthService.getAuthToken()}`;
    },

    setMultipartHeader() {
        Vue.axios.defaults.headers["Content-Type"] = 'multipart/form-data';
    },

    resetHeaderContentType() {
        Vue.axios.defaults.headers["Content-Type"] = 'application/json; charset=utf-8';
    },    

    resetHeader() {
        Vue.axios.defaults.headers.common["x-access-token"] = '';
    },

    query(resource, params) {
        return Vue.axios
            .get(resource, params)
            .catch(error => {
                throw new Error(`ApiService error: ${getErrorMessage(error)}`);
            })
        ;
    },
    
    get(resource, id = "") {
        return Vue.axios
            .get(`${resource}/${id}`)
            .catch(error => {
                throw new Error(`ApiService error: ${getErrorMessage(error)}`);
            })            
        ;
    },
    
    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },
    
    update(resource, id, params) {
        return Vue.axios.put(`${resource}/${id}`, params);
    },
    
    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },
    
    delete(resource, id) {
        return Vue.axios
            .delete(`${resource}/${id}`)
            .catch(error => {
                throw new Error(`ApiService error: ${getErrorMessage(error)}`);
            })
        ;
    }    
};

export default ApiService;