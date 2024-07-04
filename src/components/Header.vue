<template>
    <div class ="container">
    <LeftMenu/>
    </div>

  </template> 
  
  <script>
import { defineComponent } from 'vue';
import LeftMenu from '../components/LeftMenu.vue';
  export default [
    defineComponent({
        name: 'HeaderV',
        components: {
            LeftMenu,
        },
    }),
];
  </script>
  
  <style scoped>
  .container {
    width: 200px;
    background-color: #4ba46d;
    padding: 20px;
  }
  
  </style>