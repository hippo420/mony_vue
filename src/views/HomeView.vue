<template>
<nav>
  <router-link to="/test">Test</router-link>
</nav>

<main>
  <HelloWorld />
  <RouterView />
</main>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
