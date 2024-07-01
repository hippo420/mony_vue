<template>
  <div class="container">
    
    
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
