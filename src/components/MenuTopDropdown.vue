<template>
    <div ref="container" class="menu-top-dropdown">
        <button type="button" class="menu-top-dropdown__control" @click="toggle">
            Другие сервисы
        </button>
        <img src="../assets/select.svg" alt="/" class="menu-top-dropdown__icon">
        <ul v-if="isOpened" class="menu-top-dropdown__body">
            <li v-for="item in items" :key="item.id" class="menu-top-dropdown__item">
                <a :href="item.href" class="menu-top-dropdown__link">
                    {{ item.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuTopDropdown',
    data() {
        return {
            isOpened: false
        }
    },

    computed: {
        items() {
            return new Array(5).fill('#').map((href, i) => ({
                id: i,
                href,
                text: `Link ${i}`
            }))
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
        toggle() {
            this.isOpened = !this.isOpened
        },

        onDocumentClick({ target }) {
            const { container } = this.$refs

            if (container.contains(target) || container === target) return

            this.isOpened = false
        },
    }
}
</script>

<style lang="scss" scoped>
.menu-top-dropdown {
    position: relative;
    display: flex;
    align-items: center;

    &__control {
        cursor: pointer;
        margin-right: 6px;
        font-size: 12px;
        line-height: 20px;
        color: #708598;
        background-color: transparent;
    }

    &__body {
        position: absolute;
        z-index: 100;
        top: 100%;
        right: 0;
        padding: 10px 0;
        margin-top: 10px;
        overflow: auto;
        min-width: 100%;
        max-height: 200px;
        background: white;
        box-shadow: 0 5px 5px rgba(#000, 0.2);
        white-space: nowrap;
    }

    &__link {
        display: block;
        padding: 5px 15px;
        width: 100%;
        color: inherit;
        text-align: right;
        line-height: 1.2;
    }
}
</style>