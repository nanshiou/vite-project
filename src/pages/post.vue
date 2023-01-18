<template>
    <Layout>
        <PageHeader>
            <template #title>
                文章
            </template>
            <template #actions>
                <PrimaryButton class="btn-base">新增</PrimaryButton>
            </template>
        </PageHeader>

        <SearchFilter class="mt-4"></SearchFilter>

        <div class="post-content mt-4">
            <Card stretch>
                <Table 
                    :columns="columns" 
                    :data="data"
                    confirm-delete-text="確定要刪除文章嗎?"
                    @delete-selected="handleDeleteSelectPosts"
                >
                    <template #column-title="{ record, value }">
                        <RouterLink :to="`/posts/${record.id}`" class="post-link">
                            {{ value }}
                        </RouterLink>
                    </template>

                    <template #column-visits="{ value }">
                        <HeroiconsSolidEye class="w-4 h-4 inline-block mr-2"/>
                        <span>{{ value }}</span>次
                    </template>
                    <template #column-tag="{ value }">
                        <span 
                            class="badge badge-primary" 
                            v-for="tag in value" :key="tag">
                                {{ tag }}
                        </span>
                    </template>
                    <template #actions="{ record, confirmDeleteText }">
                        <EditAction :to="`/posts/${record.id}`">
                        </EditAction>
                        <DeleteAction 
                            :record="record"
                            :confirmText="confirmDeleteText"
                            @delete="handleDeletePost"
                        >
                        </DeleteAction>
                    </template>
                </Table>
            </Card>
        </div>
    </Layout>
</template>

<script>
    import { ref } from 'vue'
    import { successNotify } from '@/composables/useNotification'
    export default {
        // setup函式 為 Composition API 啟動元件的初始入口位置
        setup(){
            // 在這邊聲明數據，或者編寫函數在這裡執行它

            const columns = ref([
                { key: 'title', label:'標題' },
                { key: 'description' , label:"簡介"},
                { key: 'visits', label: '瀏覽次數' },
                { key: 'created_at', label: '建立時間' },
                { key: 'tag', label: '標籤' }
            ])
            const data = ref([
                { 
                    id: '01', 
                    title:'標題01', 
                    description: '簡介簡介簡介簡介簡介', 
                    visits: '123', 
                    created_at: '2022/11/11', 
                    tag:['標籤1', '標籤2']
                },
                { 
                    id: '02', 
                    title:'標題02', 
                    description: '簡介簡介簡介簡介簡介', 
                    visits: '1423', 
                    created_at: '2022/11/12', 
                    tag:['標籤A', '標籤B']
                },
                { 
                    id: '03', 
                    title:'標題03', 
                    description: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介', 
                    visits: '153', 
                    created_at: '2022/11/12', 
                    tag:['標籤a', '標籤b']
                },
            ])

            // 刪除單一文章
            const handleDeletePost = deleteRocord => {
                data.value = data.value.filter(record => record.id !== deleteRocord.id)
                successNotify('文章刪除成功')
                // console.log('刪除成功')
            }

            // 刪除選取文章
            const handleDeleteSelectPosts = ids => {
                data.value = data.value.filter(record => !ids.includes(record.id))
                successNotify('文章刪除成功')
                // console.log('刪除成功')
            }
            
            // 要給`template`使用的數據或函數，從這邊`return`出去
            return { 
                columns, 
                data, 
                handleDeletePost,
                handleDeleteSelectPosts 
            }
        },
    }
</script>