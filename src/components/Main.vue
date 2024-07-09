<template>
    <main class="main">
    <router-view></router-view>
    <button class="login__signup login__signup--signup" id="sign-in" @click="getStocInfo">Sign in</button>
    </main>
</template>

<script>
import Transaction from '@/common/core/Transaction';
export default {
  name : 'mainV',
  methods :{

    getStocInfo(){
      Transaction.gfnTrx("/stock/find","GET",null ,this.fnCallback);
  },
  fnCallback(data){
    console.log(data)
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