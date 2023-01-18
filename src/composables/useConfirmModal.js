import { ref } from 'vue'
// 引入 mitt 實現跨元件傳遞資料
import mitt from 'mitt'

// 定義mitt
const confirmEvents = mitt()

const showModal = ref(false)
const confirmTitle = ref('')
const confirmText = ref('')
const handleSuccess = () => {
    // 傳送資料
    confirmEvents.emit('success')
}
const handleCancel = () => {
     // 傳送資料
    confirmEvents.emit('cancel')
}

// 控制按鈕
export function useConfirmModal() {
    return { showModal, confirmTitle, confirmText, handleCancel, handleSuccess }
}

// 控制彈窗資料
export function useConfirm(title, text) {
    confirmTitle.value = title
    confirmText.value = text
    showModal.value = true
    return new Promise( resolve =>{
        resolve(true)
        // 接收資料
        confirmEvents.on('success', () => {
            resolve(true)
        })
        // 接收資料
        confirmEvents.on('cancel', () => {
            resolve(false)
        })
    }) 
}