
import { createStore } from 'vuex';

const store = createStore({
    // state() {
    //     return {
    //         userid: '',
    //         username: '',
    //         nickname: '',
    //         userrole: ''
    //     };
    // },
    // mutations: {
    //     setUserId(state, data) {
    //         state.userid = data;
    //     },
    //     setUserName(state, data) {
    //         state.username = data;
    //     },
    //     setUserNickName(state, data) {
    //         state.nickname = data;
    //     },
    //     setUserRole(state, data) {
    //         state.userrole = data;
    //     }
    // },
    // actions: {},
    // getters: {}

    state(){
        return {
            userData :{
                userid: '',
                username: '',
                nickname: '',
                userrole: ''
            }
        }
    },
    mutations: {
        setUserData(state,data) {
            state.userData.userid = data.userid;
            state.userData.username = data.username;
            state.userData.nickname = data.nickname;
            state.userData.userrole = data.userrole;
        }
    }
})

export default store;