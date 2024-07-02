<template>
    <div class="container">
        <h1>Mony</h1>
        <ProfileCard/>
        <nav>
            <router-link to="/login">Login</router-link>
            <router-link to="/menu">menu</router-link>
        </nav>
    </div>
    <HelloWorld/>
    <LeftMenu/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import LeftMenu from '../components/LeftMenu.vue';
import ProfileCard from '../components/Card/ProfileCard.vue';
import { defineComponent } from 'vue';
export default [
    defineComponent({
        name: 'HeaderView',
        components: {
            HelloWorld,
            LeftMenu,
            ProfileCard,
        },
    }),
];
</script>

<style scoped>
.container {
    background-color: aquamarine;
   }
</style>

