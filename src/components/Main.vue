<template>
    <main class="main">
    <router-view></router-view>
    <button id="sign-in" @click="getStocInfo">Sign in</button>
    <tr></tr>
    <button id="error" @click="getError">ERROR</button>
    <tr></tr>
    <button id="error" @click="getLogin">Login</button>
    </main>
</template>

<script>
import Transaction from '@/common/core/Transaction';
export default {
  name : 'mainV',
  methods :{

    getStocInfo(){
      Transaction.gfnTrx("/api/stock/find","GET",null ,this.fnCallback);
    },
    fnCallback(data){
      console.log(data)
    },
    getError(){
      Transaction.gfnTrx("/api/stock/error","GET",null ,this.fnCallback);
    },
    getLogin(){
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
.main {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
}
</style>