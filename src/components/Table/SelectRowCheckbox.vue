<template>
    <input 
        type="checkbox" 
        class="form-checkbox"
        :checked="state"
        @change="updateState"
    >
</template>

<script>
// import { ref } from 'vue'

export default {
    emits: ['update:state'],
    props:{
        state: Boolean,
        index: Number,
    },
    setup(props, { emit }) {
        const updateState = event => {
            emit('update:state', event.target.checked, props.index )
        }
        return { updateState }
    },
}
</script>