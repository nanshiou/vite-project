<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="handleCancel" class="relative z-10">
        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
            <div
            class="flex min-h-full items-center justify-center p-4 text-center"
            >
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
                <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                <div class="modal-content mb-8 mt-4">
                    <div class="modal-header">
                        <slot name="icon"></slot>       
                        <slot name="title">
                            <DialogTitle
                                as="h3"
                                class="text-xl font-medium leading-5 text-gray-900"
                            >
                                {{ title }}
                            </DialogTitle>       
                        </slot>          
                    </div>
                    <div class="modal-body">
                        <slot name="content"></slot>
                    </div>
                </div>


                <div class="mt-6 modal-footer">
                    <slot name="footer">
                        <PrimaryButton @click="handleCancel" class="w-full">確定</PrimaryButton>
                    </slot>
                </div>
                </DialogPanel>
            </TransitionChild>
            </div>
        </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
    import { useVModel } from '@vueuse/core'

    export default {
        emits :['update:modelValue', 'success', 'cancel'],
        props : {
            modelValue: Boolean,
            title: String,
            text: String
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
            }
            const handleCancel = () => {
                emit('cancel')
                closeModal()
            }
            return { isOpen, openModal, closeModal, handleSuccess, handleCancel }
        },
    }

</script>
