<template>
  <div class="container">
    <nav>
      <h1>시벌</h1>
      <router-link to="/login">Login</router-link>
      <router-link to="/menu">menu</router-link>
      
    </nav>
    
    <main>
      <LeftMenu />
      <HelloWorld />
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import LeftMenu from '../components/LeftMenu.vue';
export default [
  defineComponent({
    name: 'HomeView',
    components: {
      HelloWorld,
      LeftMenu
    },
  })
];
</script>
