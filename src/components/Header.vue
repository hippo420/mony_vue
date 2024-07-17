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
    max-width: 250px;
    background-color: #4ba46d;
    padding: 20px;
  }
  
  </style>