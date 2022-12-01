<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-11-22 17:17:10
 * @LastEditTime: 2022-12-01 17:09:41
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \base_vite_chrome_extension\src\content\Content.vue
-->
<template>
    <div ref="dom" class="
    fixed inset-0 z-[9999]
    bg-sky-800/50 backdrop-blur-sm 
    flex flex-col items-center justify-center 
    text-4xl text-white
    ">
        <p class="font-bold">演示</p>
        <p>content-scripts</p>
        <p>使用 unocss 的 shadow-dom mode</p>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const dom = ref('')
const style = document.createElement('style')
style.textContent = `@unocss-placeholder`

onMounted(() => {
    console.log(dom.value.appendChild(style))
})

</script>
