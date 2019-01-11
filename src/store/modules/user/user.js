import { getToken, removeToken } from '@/utils/auth'
import { SET_TOKEN } from "./mutations";

const user = {
    state: {
        token: getToken()
    },

    mutations: {
        [SET_TOKEN](state, token) {
            state.token = token;
        }
    },

    actions: {
        // // 登录
        // Login({ commit }, userInfo) {
        //     const username = userInfo.username.trim();
        //     return new Promise((resolve, reject) => {
        //         login(username, userInfo.password)
        //             .then(response => {
        //                 const data = response.data;
        //                 setToken(data.token);
        //                 commit("SET_TOKEN", data.token);
        //                 resolve();
        //             })
        //             .catch(error => {
        //                 reject(error);
        //             });
        //     });
        // },
        // // 退出
        // LogOut({ commit, state }) {
        //     return new Promise((resolve, reject) => {
        //         logout(state.token)
        //             .then(() => {
        //                 commit("SET_TOKEN", "");
        //                 commit("SET_ROLES", []);
        //                 removeToken();
        //                 resolve();
        //             })
        //             .catch(error => {
        //                 reject(error);
        //             });
        //     });
        // },
        // 前端 退出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit(SET_TOKEN, "");
                removeToken();
                resolve();
            });
        }
    }
};

export default user
