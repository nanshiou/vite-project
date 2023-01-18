<template>
    <RouterLink class="w-8 h-8 inline-flex justify-center items-center transition hover:text-gray-500" :to="to">
        <HeroiconsSolidPencilSquare class="w-4 h-4 inline-block"/>
    </RouterLink>
</template>

<script>
export default {
    //定義emit跟props的變數
    props:{
        to: String,
    },
}
</script>