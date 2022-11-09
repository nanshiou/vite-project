<template>
        <div class="container flex ">
            <!-- 左側選單 -->
            <div 
            class="navBar flex flex-col w-screen px-4 py-4
                bg-indigo-800 min-h-fill text-white 
                sm:w-64 sm:min-h-screen">
                <div class="flex flex-row justify-between items-center">
                    <!-- logo -->
                    <div class="logo my-4 px-2">
                        <img src="@/images/logo.svg" alt="">
                    </div>
                    <!-- 主要選單 -->
                    <div class="navbarToggle sm:hidden" @click="toggleMenu">
                        <button type="button" class="w-8 h-8 text-center">
                            <HeroiconsOutlineBars3 class="w-6 h-6"/>
                        </button>
                    </div>
                </div>
                <div class="sm:flex sm:flex-col sm:justify-between grow-0 sm:grow"  :class="showMenu ? '' : 'hidden'">
                    <ul class="nav">

                        <!-- <li class="navItem">
                            <RouterLink to="/" 
                            class="flex items-center text-indigo-400 px-2 py-2 rounded my-2"
                            :class="isActive(item.to) ? 'bg-white' :'text-indigo-800'">
                                <HeroiconsOutlineHome class="w-6 h-6 mr-4"/>
                                <span>首頁</span>
                            </RouterLink>
                        </li>
                        <li class="navItem">
                            <RouterLink to="/post" 
                            class="flex items-center text-indigo-400 px-2 py-2 rounded my-2"
                            :class="isActive(item.to) ? 'bg-white' :'text-indigo-800'">
                                <HeroiconsOutlineDocumentText class="w-6 h-6 mr-4"/>
                                <span>文章</span>
                            </RouterLink>
                        </li>
                        <li class="navItem">
                            <RouterLink to="/setting" 
                            class="flex items-center text-indigo-400 px-2 py-2 rounded my-2"
                            :class="isActive(item.to) ? 'bg-white' :'text-indigo-800'">
                                <HeroiconsOutlineUser class="w-6 h-6 mr-4"/>
                                <span>個人資料</span>
                            </RouterLink>
                        </li> -->

                        <!-- icon無法正常動態載入 -->
                        <li v-for="item in menuItems" class="navItem" :key="item.to">
                            <RouterLink :to="item.to"
                                class="flex items-center text-indigo-400 px-2 py-2 rounded my-2"
                                :class="isActive(item.to) ? 'bg-white' :'text-indigo-400'">
                                <components :is="item.icon" class="w-8 h-8 mr-4"/>
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
                            <MenuItems class="absolute left-full bottom-0 mr-2 w-32 flex flex-col bg-white shadow-lg rounded overflow-hidden">
                                <MenuItem v-slot="{ active }">
                                    <a :class='{ "bg-blue-500": active }' href="/account-settings" 
                                    class="px-3 py-2 text-gray-700 text-left text-base font-normal">
                                    個人資料
                                    </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a :class='{ "bg-blue-500": active }' href="/account-settings"
                                    class="px-3 py-2 text-gray-700 text-left text-base font-normal">
                                    登出
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>

                    </div>
                </div>

            </div>
            <div class="rightSide">
                右邊
            </div>
        </div>
</template>

<script>
    import { computed, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
    import heroiconsOutlineDocumentText from '~icons/heroicons-outline/document-text'
    import HeroiconsOutlineUser from '~icons/heroicons-outline/user'

    export default{
        components: {
            HeroiconsOutlineHome,
            heroiconsOutlineDocumentText,
            HeroiconsOutlineUser
        },
        setup() {
            const rotue = useRoute()
            const router = useRouter()
            
            const showMenu = ref(false)
            const toggleMenu = () => (showMenu.value = !showMenu.value)
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

            return { showMenu, toggleMenu, menuItems, isActive }
            
        }
    }
</script>