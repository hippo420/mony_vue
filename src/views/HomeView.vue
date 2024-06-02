<template>
<nav>
  <router-link to="/login">Login</router-link>
</nav>

<main>
  <RouterView />
  <HelloWorld />
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
