/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-11-22 10:18:29
 * @LastEditTime: 2022-11-22 16:35:59
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \test_crxjs\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json' // Node 14 & 16
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), crx({ manifest }), Unocss({})],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            input: {
                test: 'pages/test.html'
            }
        }
    }
})
