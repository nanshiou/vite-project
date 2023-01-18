<template>
    <ConfirmModal 
        v-model="showModal" 
        :title="confirmTitle" 
        :text="confirmText" 
        @success="handleSuccess"
        @cancel="handleCancel"
        >
    </ConfirmModal>
</template>

<script>
    import { useConfirmModal } from '@/composables/useConfirmModal'

    export default {
        setup(){           
            return { ...useConfirmModal() }
        },
    }
</script>