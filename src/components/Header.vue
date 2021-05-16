<template>
    <header class="header">
        <MenuTop />
        <MainMenu />
    </header>
</template>

<script>
import MenuTop from "@/components/MenuTop.vue";
import MainMenu from "@/components/MainMenu.vue";


export default {
    components: { MenuTop, MainMenu },
}
</script>

<style scoped>
    .header {
        width: 100%;
    }
</style>