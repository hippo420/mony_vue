<template>
  <v-app>
    <v-main>
      
      <div class="header_container">
        <HeaderView/>
      </div>
      <main>
        <router-view/>
      </main>  
      <div class="footer_container">
        <FooterView/>
      </div>
      
      
    </v-main>
  </v-app>
</template>

<script>
import FooterView from './views/FooterView.vue';
import HeaderView from './views/HeaderView.vue';
//import HeaderView from './views/HeaderView.vue';


export default {
    name: 'App',
    data: () => ({
    //
    }),
    components: {  HeaderView, FooterView,  }
}
</script>

<style scoped>
#app {
  display: flex;
  height: 100vh;
  margin: 0;
  font-family: 'Arial, sans-serif';
}
.header_container {
  display: flex;
  flex-direction: column;
  
  width: 100%;
   }
main {
  flex: 1;
  padding: 20px;
  min-height: 90%;
  overflow-y: auto;
}

   @media (min-width: 400px) {
  .header_container {
    flex-direction: row;
  }

  .main {
    flex: 1;
    padding: 20px;
  }
  .footer_container{

  }
}

</style>