<template>
    <div ref="container" class="search">
        <input type="text" class="search__input" placeholder="Хочу найти..." v-model="value" @input="toggle">
        <img src="../assets/search.svg" alt="/" class="search__icon">
        <ul v-if="isOpened && autocomplete.length" class="search__autocomplete">
            <li v-for="item in autocomplete" :key="item.id" class="search__autocomplete-item">
                <button type="button" class="search__autocomplete-option" @click="onOptionClick(item.text)">
                    {{ item.text }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Search',

    data() {
        return {
            isOpened: false,
        }
    },

    computed: {
        ...mapState(['searchValue']),
        ...mapGetters(['autocomplete']),
        value: {
            get() {
                return this.searchValue
            },
            set(val) {
                this.setSearchValue(val)
            }
        }
    },

    watch: {
        isOpened(isOpened) {
            if (isOpened) {
                document.addEventListener('click', this.onDocumentClick)
            } else {
                document.removeEventListener('click', this.onDocumentClick)
            }
        }
    },

    methods: {
        ...mapMutations(['setSearchValue']),

        toggle() {
            this.isOpened = !!this.value
        },

        onDocumentClick({ target }) {
            const { container } = this.$refs

            if (container.contains(target) || container === target) return

            this.isOpened = false
        },

        onOptionClick(text) {
            this.value = text
            this.isOpened = false
        }
    }
}

</script>

<style lang="scss" scoped>
.search {
    position: relative;
    width: 516/1110 * 100%;

    &__icon {
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -0.5em;
        width: 1em;
        height: 1em;
        font-size: 20px;
    }

    &__input {
        padding: 0 48px 0 14px;
        border: 1px solid #708598;
        border-radius: 4px;
        width: 100%;
        height: 40px;
        color: #708598;
        font-size: 14px;
        line-height: normal;
    }

    &__autocomplete {
        position: absolute;
        z-index: 100;
        top: 100%;
        left: 0;
        right: 0;
        padding: 10px 0;
        margin-top: 10px;
        overflow: auto;
        max-height: 200px;
        background: white;
        box-shadow: 0 5px 5px rgba(#000, 0.2);

        &-option {
            display: block;
            padding: 5px 15px;
            width: 100%;
            color: inherit;
            background: none;
            text-align: left;
        }
    }
}
</style>