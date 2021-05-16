<template>
    <div class="menu-top">
        <div class="container menu-top__container">
            <Geolocation />
            <ul class="menu-top__list">
                <li class="menu-top__list-item">
                    <a href="#" class="menu-top__list-link">Тендеры</a>
                </li>
                <li class="menu-top__list-item">
                    <a href="#" class="menu-top__list-link">База подрядчиков</a>
                </li>
                <li class="menu-top__list-item">
                    <MenuTopDropdown/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Geolocation from "@/components/Geolocation.vue";
import MenuTopDropdown from "@/components/MenuTopDropdown.vue"

export default {
    components: { Geolocation, MenuTopDropdown },
}
</script>

<style lang="scss" scoped>
.menu-top {
    background: #FAFBFC;
    padding: 6px 0;
    display: flex;
    font-size: 12px;
    line-height: 20px;
    color: #708598;

    &__container {
        display: flex;
        justify-content: space-between;
    }

    &__list {
        display: flex;
        color: #708598;
        font-size: 12px;
        line-height: 20px;

        &-item {
            &:not(:last-child) {
                margin-right: 24px;
            }
        }
    }
}
</style>
