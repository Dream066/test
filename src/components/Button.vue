<template>
    <component :is="tag" :type="computedType" class="button" :class="classList" v-on="$listeners">
        <img :src="icon" alt="/" class="button__icon" />
        <slot />
    </component>
</template>

<script>
export default {
    name: 'Button',
    props: {
        tag: {
            type: String,
            default: 'button',
            validator: tag => ['a', 'button'].includes(tag)
        },
        type: {
            type: String,
            default: 'button',
            validator: type => ['button', 'submit'].includes(type)
        },
        icon: {
            type: String,
            default: ''
        },
        ui: {
            type: String,
            default: 'default',
            validator: ui => ['default', 'primary'].includes(ui)
        }
    },

    computed: {
        computedType() {
            return this.tag === 'button' ? this.type : null
        },
        classList() {
            return `button_${this.ui}`
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    border-radius: 4px;
    min-height: 40px;
    font-weight: 600;
    color: #050f19;
    font-size: 14px;
    line-height: 24px;

    &_default {
        border: 1px solid #ECEFF1;
        background: #FAFBFC;
    }

    &_primary {
        background: #fed83d;
    }

    &__icon {
        margin-right: 10px;
    }
}
</style>
