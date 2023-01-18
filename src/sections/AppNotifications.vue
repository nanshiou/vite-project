<template>
<!-- <div class="vue-notification-wrapper">
    <div class="vue-notification-template my-notification">
    <div class="notification-title">Info</div>
    <div class="notification-content">You have been logged in</div>
    </div>
</div> -->


<notifications>
    <template #body="{ item, close }">
        <div 
        class="notification"
        :class="`notification-${ item.type || 'default' }`"
        >
            <div class="notify-content">
                <div class="icon">
                    <HeroiconsOutlineCheckCircle class="notification-icon" v-if="item.type === 'success'"/>
                    <HeroiconsOutlineExclamationCircle class="notification-icon" v-else-if="item.type === 'warn'"/>
                    <HeroiconsOutlineExclamationCircle class="notification-icon" v-else-if="item.type === 'error'"/>
                </div>
                <div class="notify-info">
                    <div class="notify-title">
                        <div class="title text-sm text-gray-600">
                            {{ item.title }}
                        </div>
                    </div>
                    <div class="notify-text text-xs text-gray-400">
                        {{ item.text }}
                    </div>                    
                </div>
                <div class="notify-btn">
                    <button 
                        type="button" 
                        class="close text-gray-400 
                        hover:text-gray-500 transition-colors duration-100" @click="close">
                        <HeroiconsOutlineXMark class="w-4 h-4"/>
                    </button>                          
                </div>
            </div>

        </div>
    </template>

</notifications>
</template>

// <script>
//     import HeroiconsOutlineCheckCircle from '~icons/heroicons-outline/check-circle'
//     import HeroiconsOutlineExclamationCircle from '~icons/heroicons-outline/exclamation-circle'
// export default {
//     components: {
//         HeroiconsOutlineCheckCircle,
//         HeroiconsOutlineExclamationCircle,
//     },
// }
// </script>