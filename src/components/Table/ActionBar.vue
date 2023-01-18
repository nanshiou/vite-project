<template>
    <transition
        enter-active-class="transition duration-200"
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-active-class="transition-transform duration-150"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
    >
        <div v-if="show" class="fixed left-0 right-0 bottom-0 bg-whtie p-4 shadow-lg-top sm:left-[14rem]">
            <div class="actionbar flex justify-between items-center">
                <slot></slot>
            </div>
        </div>
    </transition>

</template>

<script>


export default {
    props:{
        show: Boolean,
    }

}
</script>