<template>
    <div class="table-responsive overflow-x-auto border border-gray-200">
        <table class="w-full text-gray-400 text-xs truncate">
            <thead class="bg-gray-100">
                <tr>
                    <th class="text-left p-2">
                        <!-- <SelectAllCheckbox
                            v-model:state="selectAllStatue"
                        >
                        </SelectAllCheckbox> -->
                        <SelectAllCheckbox
                            :state="selectAllStatue"
                            @update:state="updateSelectAllState"
                        >
                        </SelectAllCheckbox>
                    </th>
                    <th  
                        v-for="column in columns" 
                        :key="column.key" 
                        class="text-left p-2">
                        {{ column.label }}
                    </th>
                    <th></th>
                </tr>                            
            </thead>
            <tbody>
                <tr
                    v-for="(record, index) in data"
                    :key="record.id"
                    :class="{ 'bg-violet-50' : rowSelectStatus[index] }"
                >
                    <td class="text-left p-2">
                        <!-- <SelectRowCheckbox 
                            v-model:state="rowSelectStatus[i]"
                        >
                        </SelectRowCheckbox> -->
                        <SelectRowCheckbox 
                            :state="rowSelectStatus[index]"
                            :index="index"
                            @update:state="updateRowSelectState"
                        >
                        </SelectRowCheckbox>
                    </td>
                    <!-- <td>
                        <div>State: <strong>{{ rowSelectStatus[i] }}</strong></div>
                    </td> -->
                    <!-- <td class="text-left px-2 py-4">
                        <RouterLink :to="`/posts/${record.id}`" class="post-link">
                            {{ record.title }}
                        </RouterLink>
                    </td>
                    <td class="text-left px-2 py-4">
                        {{ record.description }}
                    </td>
                    <td class="text-left px-2 py-4">
                        <HeroiconsSolidEye class="w-4 h-4 inline-block mr-2"/>
                        <span>{{ record.visits }}</span>次
                    </td>
                    <td class="text-left px-2 py-4">
                        {{ record.created_at }}
                    </td>
                    <td class="text-left px-2 py-4">
                        <span 
                            class="badge badge-primary" 
                            v-for="item in record.tag" :key="item">
                                {{ item }}
                        </span>
                    </td> -->

                    <!-- 教學v-for迴圈用法 -->
                    <td
                        v-for="column in columns" 
                        :key="column.key" 
                        class="text-left px-2 py-4"
                    >
                        <!-- props需要什麼值就傳出什麼值 -->
                        <slot 
                            :name="`column-${column.key}`"
                            :column="column"
                            :record="record"
                            :value="record[column.key]"
                        >
                            {{ record[column.key] }}
                        </slot>
                    </td>
                    <td class="text-left px-2 py-4">
                        <slot 
                            name="actions"
                            :record="record"
                            :confirmDeleteText="confirmDeleteText">
                        </slot>
                    </td>
                </tr>
                <tr v-if="!data.length">
                    <td :colspan="columnCount" 
                        class="py-12 text-center text-gray-400">
                        {{ emptyText }}
                    </td>
                </tr>
                <!-- <tr>
                    <td class="text-left px-2 py-4">
                        <RouterLink to='/post' class="text-indigo-400 transition hover:text-indigo-500">文章標題</RouterLink>
                    </td>
                    <td class="text-left px-2 py-4">文章內容文章內容文章內容文章</td>
                    <td class="text-left px-2 py-4">
                        <HeroiconsSolidEye class="w-4 h-4 inline-block mr-2"/>
                        <span>123</span>次
                    </td>
                    <td class="text-left px-2 py-4">2022/11/11</td>
                    <td class="text-left px-2 py-4">
                        <span class="badge badge-primary">標籤1</span>
                        <span class="badge badge-primary">標籤1</span>
                    </td>
                    <td class="text-left px-2 py-4 ">
                        <button class="w-6 transition hover:text-gray-500">
                            <HeroiconsSolidPencilSquare class="w-4 h-4 inline-block"/>
                        </button>
                        <button class="w-6 transition hover:text-gray-500">
                            <HeroiconsSolidTrash class="w-4 h-4 inline-block"/>
                        </button>
                    </td>
                </tr>                                                    -->
            </tbody>
        </table>       
    </div>
    <Pagination 
        :currentPage="currentPage"
        :totalPage="totalPage"
    >
    </Pagination> 

    <ActionBar :show="showActionBar">
        <div class="leftside">
            <p class="text-gray-500 text-sm sm:text-base">已選取 {{ selectedIds.length }} 筆資料</p>
        </div>
        <div class="rightside btn-group space-x-2">
            <PrimaryButton class="btn-sm sm:btn-base" @click="updateSelectAllState('all')">
                全選
            </PrimaryButton>
            <DangerButton class="btn-sm sm:btn-base" @click="deleteRows()">
                刪除
            </DangerButton>
            <OutlineLightButton class="btn-sm sm:btn-base"  @click="updateSelectAllState('none')">
                取消
            </OutlineLightButton> 
        </div> 
    </ActionBar>
</template>




<script>
import { ref, computed, watch, nextTick } from 'vue'
// Model
import { useConfirm } from '@/composables/useConfirmModal'

export default {
        emits:['delete-selected'],
        props: {
            columns: {
                type: Array,
                required: true,
            },
            data: {
                type: Array,
                required: true,
            },
            emptyText: {
                type: String,
                default: '當前沒有任何資料*',
            },
            confirmDeleteText: {
                type: String,
                default: '*確定要刪除嗎？*',
            },
        },

        // props為響應式的，當父組件傳入新的數據，它會被更新
        setup(props, {emit}){
            // td數量
            const columnCount = computed(() => {
                return props.columns.length + 2
            })

            // 全部行的選取狀態
            const selectAllStatue = ref('none')

            // 行的選取狀態 [false, true, false]
            const rowSelectStatus = ref(props.data.map(_=>false))

            // 以選擇的行 id[2,3]
            const selectedIds = computed(() => {
                return props.data
                    .filter((_, index) => rowSelectStatus.value[index])
                    .map(record => record.id)
            })

            // 更新 [全部行的狀態]
            const updateSelectAllState = state => {
                selectAllStatue.value = state
                rowSelectStatus.value = rowSelectStatus.value
                .map(()=> selectAllStatue.value === 'all')
            }

            // 更新 [單行的選取狀態]
            const updateRowSelectState = (state, index) => {
                rowSelectStatus.value[index] = state

                // 當全部勾選時
                if( selectedIds.value.length === props.data.length){
                    selectAllStatue.value ='all'
                }
                // 當部分勾選時
                else if( 
                    selectedIds.value.length > 0  && 
                    selectedIds.value.length < props.data.length){
                    selectAllStatue.value ='some'
                }
                // 當完全不選時
                else{
                    selectAllStatue.value ='none'
                }               
            }

            // showActionBar的開關控制
            const showActionBar = ref(false)
            
            // 選擇時控制ActionBar彈出及關閉
            watch(selectAllStatue, selectAllStatue =>{
                showActionBar.value = ['all', 'some'].includes(selectAllStatue)
            })

            // 刪除單行
            const deleteRows = async() => {
                if (await useConfirm(props.confirmDeleteText)){
                    emit ('delete-selected', selectedIds.value)
                    await nextTick()
                    rowSelectStatus.value = props.data.map(_=> false)
                    selectAllStatue.value = "none"
                }
            }

            // pagination
            const currentPage = ref(1)
            const totalPage = ref(5)

            return { 
                columnCount, 

                // pagination
                currentPage, 
                totalPage, 

                // checkbox
                rowSelectStatus, 
                selectAllStatue,
                selectedIds,
                deleteRows,

                updateSelectAllState,
                updateRowSelectState,

                // ActionBar
                showActionBar,
            }
        }
    }
</script>