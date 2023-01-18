<template>
    <button type="button" 
        class="bg-white text-gray-500
        border-gray-500
        hover:bg-gray-100 
        focus:ring-gray-200 btn">
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