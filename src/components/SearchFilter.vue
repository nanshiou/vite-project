<template>
    <div class="flex flex-row items-center justify-between sm:flow-col">
        <div class="filter-box flex flow-grow sm:flow-grow-0">
            <Popover class="relative flex-shrink-0 -mr-px focus:z-[1]">
                <PopoverButton class="form-select pl-4 rounded-r-none text-gray-400">
                    篩選
                </PopoverButton>

                <PopoverPanel class="absolute z-10">
                <div class="flex flex-col bg-white w-[270px] gap-4 p-4 shadow-lg mt-2 
                rounded-md border border-solid border-gray-200">
                    <div class="input-group">
                        <label for="" class="form-label text-sm text-gray-500">建立日期</label>
                        <div class="flex mt-2">
                            <select name="" id="" class="form-select w-[100px] h-8 text-xs rounded-r-none -mr-px focus:z-[1]">
                                <option value="before">之前</option>
                                <option value="after">之後</option>
                            </select>
                            <input type="date" class="text-xs form-input h-8 rounded-l-none focus:z-[1]"> 
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="" class="form-label text-sm text-gray-500  mb-2">瀏覽次數</label>
                        <div class="flex mt-2">
                            <select name="" id="" class="form-select w-[100px] h-8 text-xs rounded-r-none -mr-px focus:z-[1]">
                                <option value="before">之前</option>
                                <option value="after">之後</option>
                            </select>
                            <input type="number" class="text-xs form-input h-8 rounded-l-none focus:z-[1]"> 
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="" class="form-label text-sm text-gray-500 mb-2">標籤</label>
                        <label class="flex items-center mt-2">
                            <input type="checkbox" class="form-checkbox">
                            <span class="text-gray-400 text-sm ml-2">標籤1</span>
                        </label>
                        <label class="flex items-center mt-2">
                            <input type="checkbox" class="form-checkbox">
                            <span class="text-gray-400 text-sm ml-2">標籤2</span>
                        </label>
                    </div>
                    <div class="input-group">
                        <label for="" class="form-label text-sm text-gray-500 mb-2">軟刪除</label>
                        <label class="flex items-center mt-2">
                            <input type="radio" class="form-radio" name="delete">
                            <span class="text-gray-400 text-sm ml-2">默認</span>
                        </label>
                        <label class="flex items-center mt-2">
                            <input type="radio" class="form-radio" name="delete">
                            <span class="text-gray-400 text-sm ml-2">包含軟刪除</span>
                        </label>
                        <label class="flex items-center mt-2">
                            <input type="radio" class="form-radio" name="delete">
                            <span class="text-gray-400 text-sm ml-2">只有軟刪除</span>
                        </label>
                    </div>
                    <div class="btn-group flex justify-end gap-2">
                        <OutlineLightButton class="btn-sm">取消</OutlineLightButton>
                        <PrimaryButton class="btn-sm">確定</PrimaryButton>
                    </div>
                </div>
                </PopoverPanel>
            </Popover>
            <input type="text" placeholder="搜尋..." class="form-input rounded-l-none focus:z-[1]">
            <button type="button" class="flex-shrink-0 p-3 text-gray-500">清除</button>
        </div>
        <div class="">
            <select name="" id="" class="form-select text-md">
                <option value="sortAZ">排序A-Z</option>
                <option value="sortZA">排序Z-A</option>
            </select>
        </div>
    </div>
</template>

<script>

export default {

}
</script>