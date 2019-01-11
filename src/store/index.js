import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// modules
import dev from "./modules/dev/dev";
import user from "./modules/user/user";


Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        dev,
        user
    },
    getters
});

export default store;
