<template>
    <!-- <button type="button" 
        class="bg-indigo-600 text-white 
        hover:bg-indigo-700
        focus:ring-indigo-500 btn">
            <slot></slot>
    </button> -->
    <component 
        :is="tag"
        :type="buttonType"
        class="bg-indigo-600 text-white 
        hover:bg-indigo-700
        focus:ring-indigo-500 btn"
    >
        <slot></slot>
    </component>
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