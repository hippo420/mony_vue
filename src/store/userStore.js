
import { createStore } from 'vuex';

const userStore = createStore({


    state(){
        return {
            userData :{
                userid: '',
                username: '',
                nickname: '',
                userrole: '',
                token:'',
            }
        }
    },
    mutations: {
        login(state,data){
            state.userData.userid = data.userid;
            state.userData.username = data.username;
            state.userData.nickname = data.nickname;
            state.userData.userrole = data.userrole;
            state.userData.token = data.userrole;
        },
        loginCheck(state){
            if(!state.token){
                this.$router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        loginOut(state){
            if(state.token){
                state=null;
                alert("로그아웃 되었습니다.");
                this.$router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        },
    },
    getters:{
        getUserId(){
            return this.$userData.state.userid;
        }
    }
})

export default userStore;