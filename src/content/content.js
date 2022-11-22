/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-11-22 11:23:06
 * @LastEditTime: 2022-11-22 17:12:23
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \test_crxjs\src\content\content.js
 */
console.log('[content-scripts]')

import { createApp } from 'vue'
import App from './Content.vue'
// import 'uno.css'

import cssString from './style.css'
const style = document.createElement('style')
style.textContent = cssString
document.head.append(style)

const MOUNT_EL_ID = 'ezBookmarks2'

let mountEl = document.getElementById(MOUNT_EL_ID)
if (mountEl) {
    mountEl.innerHTML = ''
}
mountEl = document.createElement('ez-bookmark')
mountEl.setAttribute('id', MOUNT_EL_ID)
// mountEl.innerHTML = '<div>123</div>'
const shadowDom = mountEl //.attachShadow({ mode: 'closed' })
document.body.appendChild(mountEl)

createApp(App).mount(shadowDom)

//
const src = chrome.runtime.getURL('pages/test.html')

const iframe = new DOMParser().parseFromString(
    `<iframe class="crx" src="${src}"></iframe>`,
    'text/html'
).body.firstElementChild

console.log('x', iframe)
mountEl.append(iframe)
document.body.append(iframe)
