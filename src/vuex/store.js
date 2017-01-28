import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

let users = [{ name: 'Amy', age: 5, userName: 'AmyPrime', registered: true },
{ name: 'Oscar', age: 5, userName: 'OscarPrime', registered: false },
{ name: 'Dexter', age: 7, userName: 'DexterPrime', registered: false }]


export default new Vuex.Store({
    state: {
        users: users,
        newUser: ''
    },
    mutations: {
        ADD_USER(state, payload) {
            state.users.push(payload);
        },
        REGISTER_USER(state, user) {
            // const ux = state.users.find(u => {
            //     return u.userName = user.userName;
            // })
            user.registered = true;
            let idx = state.users.map(u => u.userName).indexOf(user.userName);
            console.log(idx)
            state.users.splice(idx, 1, user)
            console.log(user)
            // state.users.push(user);
        },
        UNREGISTER_USER(state, user) {
            // const ux = state.users.find(u => {
            //     return u.userName = user.userName;
            // })
            user.registered = false;
            let idx = state.users.map(u => u.userName).indexOf(user.userName);
            console.log(idx)
            state.users.splice(idx, 1, user)
            console.log(user)
            // state.users.push(user);
        },
    },
    actions: {
        addUser({commit}) {
            commit('ADD_USER', user);
        },
    },
    getters: {
        registeredUsers(state) {
            return state.users.filter(user => {
                return user.registered;
            })
        },
        unRegisteredUsers(state) {
            return state.users.filter(user => {
                return !user.registered;
            })
        }
    }
})