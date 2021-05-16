<template>
    <a class="geolocation">
        <img src="../assets/geo.svg" alt="" class="geolocation__icon">
        <div class="geolocation__text">Волгоградская область</div>
    </a>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.geolocation {
    display: flex;
    align-items: center;

    &__icon {
        margin-right: 8px;
    }
}
</style>