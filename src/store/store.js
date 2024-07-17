
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
                userrole: '',
                token:'',
            },loginStatus:false
        }
    },
    getters:{
        getUserId:state => {
            return state.userData.userid;
        },
        loginCheck:state => {
            return state.loginStatus
        }
    },
    mutations: {
        login(state,data){
            state.userData.userid = data.userid;
            state.userData.username = data.username;
            state.userData.nickname = data.nickname;
            state.userData.userrole = data.userrole;
            state.userData.token = data.userrole;
            state.loginStatus=true;
        },
        logout(state){
            if(state.userData.token){
                state=null;
                alert("로그아웃 되었습니다.");
                state.loginStatus=false;
                this.$router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        
    },
    
})

export default store;