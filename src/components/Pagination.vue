<template>
    <div class="pagination-box">
        <VPagination
            v-model="currentPage"
            :pages="totalPage"
            hideFirstButton
            hideLastButton
        ></VPagination>
    </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination"
import { useVModel } from '@vueuse/core'
export default {
    emits: ["update:currentPage"],
    components: {
        VPagination
    },
    props:{
        currentPage:{
            type: Number,
            default: 1,
        },
        totalPage: {
            type: Number,
            default: 10,
        },
    },
    setup(props){
        const currentPage = useVModel(props, 'currentPage')
        return { currentPage }
    },
}
</script>