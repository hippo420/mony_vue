<template>
  <div class="container">
    <main>
      
      <HeaderView />
      <MainView/>
      <FooterView/>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HeaderView from './HeaderView.vue';
import MainView from './MainView.vue';
import FooterView from './FooterView.vue';
export default [
  defineComponent({
    name: 'HomeView',
    components: {
      HeaderView,
      MainView,
      FooterView,
    },
  }),
];
</script>
