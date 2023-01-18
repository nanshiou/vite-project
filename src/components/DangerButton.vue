<template>
    <button type="button" 
        class="bg-rose-600 text-white 
        hover:bg-rose-700
        focus:ring-rose-500 btn">
            <slot></slot>
        </button>
</template>

<script>
import useButton from '@/composables/useButton'
    export default {
        props: {
            is: String,
            type: String,
            to: String,
        },
        setup(props){
            return{ ...useButton(props) }
        },
    }
</script>