<template>
    <main class="main">
    <router-view></router-view>
    </main>
</template>

<script>
export default {
name: 'Main'
}
</script>

<style scoped>
.main {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
}
</style>