<template>
    <Layout>
        <div class="m-4 space-x-4">
            <!-- <DangerButton @click="delPost">刪除</DangerButton> -->

            <PrimaryButton @click="showNotify">顯示通知</PrimaryButton>
        </div>
    </Layout>
</template>

<script>
    // 彈窗 
    // import { useConfirm } from '@/composables/useConfirmModal'

    // export default {
    //     setup(){
    //         const delPost = () => {
    //             useConfirm('確定要刪除文章嗎？', '我就爛by茼蒿').then(result => {
                    
    //                 if(result){
    //                     console.log('刪除成功')
    //                 }
    //             })
    //         }
    //         return { delPost }
    //     },
    // }

    // import { notify } from "@kyvg/vue3-notification";
    import { notify, errorNotify } from "@/composables/useNotification";
    export default{
        // using options
        // setup是一個生命周期的鉤子
        setup(){

            // const showNotify = () => {
            //     notify({
            //         type: 'success',
            //         // type: 'warning',
            //         // type: 'danger',
            //         title: "更新成功！",
            //         text: "已經更新成功了",
            //         duration: 300000,
            //     });
                
            // }
            const showNotify = () => {
                errorNotify('更新成功')
            }
            // 需要 `return` 出去才可以被模板使用
            return { showNotify }
        }
    }
</script>