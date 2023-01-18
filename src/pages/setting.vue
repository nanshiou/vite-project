<template>
    <Layout>
        <div class="m-4 space-x-4">
            <DangerButton @click="delPost" class="btn-base">刪除</DangerButton>

            setting
        </div>
    </Layout>
</template>

<script>
    import { useConfirm } from '@/composables/useConfirmModal'
    export default {
        setup(){
            const delPost = () => {
                useConfirm('確定要刪除文章嗎？', '我就爛by茼蒿').then(result => {
                    
                    if(result){
                        console.log('刪除成功')
                    }
                })
            }
            return { delPost }
        },
    }
</script>