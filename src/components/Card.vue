<template>
    <div 
    class="card relative border-solid border border-gray-200 bg-white shadow-lg rounded-lg p-4"
    :class="
    stretch
    ? '-mx-6 sm:mx-0' : 'sm:rounded-sm'
    ">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        stretch: Boolean,
    }
}
</script>