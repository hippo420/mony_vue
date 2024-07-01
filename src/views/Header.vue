<template>
    <header>
        <h1>Mony</h1>
        <nav>
            <router-link to="/login">Login</router-link>
            <router-link to="/menu">menu</router-link>
        </nav>
    </header>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import LeftMenu from '../components/LeftMenu.vue';
export default [
    defineComponent({
        name: 'Header',
        components: {
            HelloWorld,
            LeftMenu
        },
    })
];
</script>

<style scoped>
/* 스타일 설정 */
</style>

