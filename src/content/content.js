/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-11-22 11:23:06
 * @LastEditTime: 2022-12-01 17:11:00
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \base_vite_chrome_extension\src\content\content.js
 */

import { createApp } from 'vue'
import App from './Content.vue'
// import cssString from './style.css'

const id = Math.floor(Math.random() * 100000)

// 创建 app dom
const appEl = document.createElement(`ext-app-${id}`)
appEl.setAttribute('id', `ext-app-${id}`)
const shadowDom = appEl.attachShadow({ mode: 'open' })

// 插入样式
// const style = document.createElement('style')
// style.textContent = cssString
// style.textContent = `unocss-placeholder` // 这里插入获取不到component中的class，所以放到vue文件中动态插入style。
// shadowDom.appendChild(style)

// 插入挂载点
const mountEl = document.createElement('div')
mountEl.setAttribute('id', 'app')
shadowDom.appendChild(mountEl)

// 挂载 vue
createApp(App).mount(mountEl)

// 插入页面
document.body.append(appEl)
