<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-11-22 17:17:10
 * @LastEditTime: 2022-12-13 11:20:15
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \base_vite_chrome_extension\src\content\Content.ce.vue
-->
<template>
    <div ref="dom" class="
    fixed inset-0 z-[9999]
    bg-sky-800/50 backdrop-blur-sm 
    flex flex-col items-center justify-center 
    text-4xl text-#d00
    ">
        <p class="font-bold">演示</p>
        <p>content-scripts</p>
        <p>使用 unocss 的 shadow-dom mode</p>
        <p>这里是 props 传参 {{ test }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    test: {
        type: [String, Number],
        default: '0'
    }
})
</script>
<style>
@unocss-placeholder
</style>


