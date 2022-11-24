/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-11-22 11:23:06
 * @LastEditTime: 2022-11-24 17:05:24
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \base_vite_chrome_extension\src\content\content.js
 */

import { createApp } from 'vue'
import App from './Content.vue'
import cssString from './style.css' // tailwindcss 可以直接拿到完整 style 方便插入页面，所以这里没有用 unocss。

const id = Math.floor(Math.random() * 100000)

// 创建 app dom
const appEl = document.createElement(`ext-app-${id}`)
appEl.setAttribute('id', `ext-app-${id}`)
const shadowDom = appEl.attachShadow({ mode: 'closed' })

// 插入样式
const style = document.createElement('style')
style.textContent = cssString
shadowDom.appendChild(style)
console.log('style', style);

// 插入挂载点
const mountEl = document.createElement('div')
mountEl.setAttribute('id', 'app')
shadowDom.appendChild(mountEl)

// 挂载 vue
createApp(App).mount(mountEl)

// 插入页面
document.body.append(appEl)
