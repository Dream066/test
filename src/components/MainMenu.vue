<template>
    <div class="main-menu">
        <div class="container main-menu__container">
            <img src="../assets/logo.svg" alt="" class="main-menu__logo">
            <Button tag="a" href="#" :icon="require('../assets/menu.svg')" ui="primary" class="main-menu__button">
                Каталог
            </Button>
            <SearchArea class="main-menu__search" />
            <Button tag="a" href="#" :icon="require('../assets/list.svg')" class="main-menu__button">
                Список
            </Button>
            <PersonalArea class="main-menu__personal-area" />
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button"
import SearchArea from "@/components/SearchArea"
import PersonalArea from "@/components/PersonalArea"

export default {
    components: {Button, SearchArea, PersonalArea},
}
</script>

<style lang="scss" scoped>
.main-menu {
    border-top: 1px solid #ECEFF1;
    border-bottom: 1px solid #ECEFF1;

    &__container {
        display: flex;
        align-items: center;
        padding-top: 14px;
        padding-bottom: 14px;
    }

    &__logo,
    &__button,
    &__search {
        margin-right: 24px;
    }

    &__personal-area {
        flex: 0 0 auto;
    }
}
</style>