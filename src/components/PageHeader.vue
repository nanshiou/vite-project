
<template>
    <div class="post-header flex flex-row justify-between items-center">
        <div class="title-box">
            <h1 class="title text-3xl font-bold">
                <slot name="title"></slot>
            </h1>
        </div>
        <div class="btn-box">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>