import path from 'path';
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite' //icon
import IconsResolver from 'unplugin-icons/resolver' //自動解析icon
import Components from 'unplugin-vue-components/vite'

import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'




// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'src'),
    },
  },
  plugins: [
    Vue(),
    Pages({
      // 需要生成路由的檔案目錄
      pagesDir: 'src/pages', 
      // 排除在外的目錄，即不將所有 components 目錄下的 .vue 檔案生成路由
      // exclude: ['**/components/*.vue']  
    }),
    Components({
      resolvers: [
        //自動引入icon
        IconsResolver({
          //不使用前綴模式
          prefix: false, 
          //僅啟用heroicons-outline(若要使用其他icon，則新增分類即可)
          enabledCollections: ['heroicons-outline'], 
        }),
        HeadlessUiResolver(),  

      ],
    }),
    Icons({ compiler: 'vue3' }),
    // IconComponent ({}),
  ],
})
