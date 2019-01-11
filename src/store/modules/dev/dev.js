import request from '@/utils/request';
import { 
    SET_USERS,
    SET_CURRENT_USER
 } from './mutations';


const dev = {
    state: {
        users: [],
        current:{}
    },

    mutations: {
        
        [SET_USERS] (state, users) {
            
            state.users = users;
        },
        [SET_CURRENT_USER] (state,user){

            state.current = user;
        }
    },

    actions: {
        getUsers({ commit }) {
            return new Promise((resolve, reject) => {
                request
                    .get("data/data.json")
                    .then(({ data }) => {
                        // console.log(data.list);
                        // state
                        commit(SET_USERS, data.list);
                        resolve(data.list);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        setCurrentUser({ commit},user){

            commit(SET_CURRENT_USER,user);
        },
        // addNewUser({ commit, state},newUser){

            
        // }
    }
};

export default dev
