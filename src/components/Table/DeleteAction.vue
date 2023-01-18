<template>
    <button 
        class="w-8 h-8 inline-flex justify-center items-center transition 
            hover:text-gray-500" 
        @click="handleDelete">
        <HeroiconsSolidTrash class="w-4 h-4 inline-block"/>
    </button>
</template>

<script>
import { useConfirm } from '@/composables/useConfirmModal' 
export default {
    //定義emit跟props的變數
    emits :['delete'],
    props: {
        record: Object,
        type: String,
        confirmText: {
            type: String,
            default: '~確定要刪除嗎？*'
        }
    },
    // async/await可以接收 promise 回傳的值，並且後面的程式都會等到 promise 回傳後才會繼續執行
    setup(props, { emit }) {
        const handleDelete = async() => {
            if (await useConfirm(props.confirmText)){
                emit('delete', props.record)
            }
        }
        return { handleDelete }
    },
}
</script>