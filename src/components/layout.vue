<template>
        <div class=" flex flex-col md:flex-row">
            <!-- 左側選單 -->
            <div 
            class="navBar flex flex-col w-screen px-4 py-4
                bg-indigo-800 min-h-fill text-white 
                md:w-64 md:min-h-screen">
                <div class="flex flex-row justify-between items-center">
                    <!-- logo -->
                    <div class="logo my-4 px-2">
                        <img src="@/images/logo.svg" alt="">
                    </div>
                    <!-- 主要選單 -->
                    <div class="navbarToggle md:hidden" @click="toggleMenu">
                        <button type="button" class="w-8 h-8 text-center">
                            <HeroiconsOutlineBars3 class="w-6 h-6"/>
                        </button>
                    </div>
                </div>
                <div class="md:flex md:flex-col md:justify-between grow-0 md:grow" :class="showMenu ? '' : 'hidden'">
                    <ul class="nav">
                        <li v-for="item in menuItems" class="navItem" :key="item.to">
                            <RouterLink :to="item.to"
                                class="flex items-center text-indigo-400 px-2 py-2 rounded my-2 hover:bg-white hover:text-indigo-400"
                                :class="isActive(item.to) ? 'bg-white' :'text-indigo-400'">
                                <component :is="item.icon" class="w-6 h-6 mr-4"/>
                                <span>{{ item.text }}</span>
                            </RouterLink>
                        </li>

                    </ul>
                    <div class="infoBox flex flex-row justify-between items-center py-4 border-t border-solid border-indigo-600">
                        <div class="info flex flex-row items-center">
                            <div class="avatar mr-2">
                                <img class="w-8 h-8 rounded-full" src="@/images/avatar.jpg" alt="">
                            </div>
                            <span class="text-sm font-normal">Lucus</span>
                        </div>
                        <Menu as="div" class="relative">
                            <MenuButton class="w-8 h-8 flex items-center justify-center 
                            hover:bg-indigo-400 rounded translate-colors duration-100">
                                <HeroiconsOutlineEllipsisVertical class="w-6 h-6"/>
                            </MenuButton>
                            <TransitionZoom>
                                <MenuItems 
                                class="absolute left-full bottom-0 
                                mr-2 w-32 flex flex-col bg-white shadow-lg rounded overflow-hidden origin-bottom-left">
                                    <MenuItem 
                                        v-slot="{ active }" 
                                        v-for="item in userMenuItems" 
                                        :key="item.to"
                                    >
                                        <RouterLink :class='{ "bg-gray-100": active }' to="/setting" 
                                        class="px-3 py-2 text-gray-700 text-left text-base font-normal">
                                        {{ item.text }}
                                        </RouterLink>
                                    </MenuItem>
                                </MenuItems>
                            </TransitionZoom>
                        </Menu>

                    </div>
                </div>

            </div>
            <div class="rightSide w-full">
                <div class="m-6">
                    <slot></slot>
                    <!-- <PrimaryButton>開啟視窗</PrimaryButton> -->

                    <!-- <Modal v-model="showModal" :modal-value="showModal" @update:modal-value="prevent">

                    </Modal> -->
                    <!-- <Modal>

                    </Modal> -->
                </div>
                <!-- <div class="input-box m-4 space-y-4">
                    <div class="block">
                        <input type="text" class="form-input" />
                    </div>

                    <div class="block">
                        <textarea type="text" class="form-textarea" ></textarea>
                    </div> 
                    <div class="block">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-checkbox" />
                            <span class="ml-2">單選框</span>
                        </label>
                    </div> 
                    <div class="block">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-radio" />
                            <span class="ml-2">多選框</span>
                        </label>
                    </div> 
                </div> -->

            </div>
        </div>
</template>

<script>
    import { computed, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
    import heroiconsOutlineDocumentText from '~icons/heroicons-outline/document-text'
    import HeroiconsOutlineUser from '~icons/heroicons-outline/user'
    // import Modal from './modal.vue';

    export default{
        components: {
            HeroiconsOutlineHome,
            heroiconsOutlineDocumentText,
            HeroiconsOutlineUser,
            // Modal
        },
        setup() {
            const rotue = useRoute()
            const router = useRouter()
            
            const showMenu = ref(false)
            const toggleMenu = () => (showMenu.value = !showMenu.value)

            // 主要選單
            const menuItems = [
                { to: '/', text: '首頁', icon: 'heroicons-outline-home' },
                { to: '/post', text: '文章', icon: 'heroicons-outline-document-text' },
                { to: '/setting', text: '個人資料', icon: 'heroicons-outline-user' },
            ]

            // const path = '/setting'
            const activeItem = computed( () =>
            [...menuItems]
                .reverse()
                .find(item => rotue.path.startsWith(item.to))
            )
            const isActive = to => to === activeItem.value.to

            // 個人資料選單
            const userMenuItems = [
                { 
                    to: '/setting', 
                    text: '個人資料' ,
                },
                { 
                    text: '登出', 
                    to: '/login', 
                    // onClick : ()=> {
                    //     router.push('/login') 
                    // },
                },
            ]

            return { showMenu, toggleMenu, menuItems, isActive, userMenuItems }
            
        }
    }
</script>