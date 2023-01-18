<template>
    <Modal v-model="isOpen" @click="handleCancel">
        <template #icon>
            <HeroiconsOutlineExclamation class="w-12 h-12 text-red-500 mx-auto "></HeroiconsOutlineExclamation>
        </template>
        <template #title>
            <DialogTitle
                as="h3"
                class="text-xl text-center m-4 font-medium leading-6 text-red-500"
            >
                {{ title }}
            </DialogTitle>         
        </template>
        <template #content>
            <p class="text-sm text-gray-400 text-center">{{ text }}</p>
        </template>
        <template #footer>
            <div class="grid grid-cols-2 gap-4">
                <OutlineLightButton class="w-full" @click="handleCancel">取消</OutlineLightButton>
                <DangerButton class="w-full" @click="handleSuccess">確定</DangerButton>
            </div>
        </template>
    </Modal>
</template>

<script>
    import { useVModel } from '@vueuse/core'

    export default {
        emits :['update:modelValue', 'success', 'cancel'],
        props : {
            modelValue: Boolean,
            title: { type: String , default:'確定要刪除嗎？' },
            text: String,
        },
        setup(props, { emit }){
            const isOpen = useVModel(props)
            const openModal = () => {
                isOpen.value = true
            }
            const closeModal = () => {
                isOpen.value = false
            }
            const handleSuccess = () => {
                emit('success')
                closeModal()
                // console.log('成功')
            }
            const handleCancel = () => {
                emit('cancel')
                closeModal()
            }
            return { isOpen, openModal, closeModal, handleSuccess, handleCancel }
        },
    }
</script>