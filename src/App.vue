<template>
  <div id="app">
    <div class="container">
      <Header />
      <Main/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Header,
    Footer,
    Main
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.container {
  display: flex;
  flex: 1;
}
</style>