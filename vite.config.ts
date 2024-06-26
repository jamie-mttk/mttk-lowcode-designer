import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { visualizer } from "rollup-plugin-visualizer";
import cdn from 'vite-plugin-cdn-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer({
    //   filename: 'bundle-stats.html', 
    //   open: true, 
    // }),
    [
      // cdn({
      //     modules: ['vue', 'vue-router',
      //       {
      //         name: 'element-plus',
      //         var: 'ElementPlus',
      //         path: 'https://unpkg.com/element-plus@2.3.3/dist/index.full.js',
      //         css: 'https://unpkg.com/element-plus@2.3.3/dist/index.css'
      //       },
      //       {
      //         name: 'echarts',
      //         var: 'echarts',
      //         path: 'https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js',

      //       },   
      //       {
      //         name: '@vueuse/shared',
      //         var: 'VueUse',
      //         path: 'https://unpkg.com/@vueuse/shared',
      //       },   
      //       {
      //         name: '@vueuse/core',
      //         var: 'VueUse',
      //         path: 'https://unpkg.com/@vueuse/core',
      //       },   
      //       // {
      //       //   name: '@mdi/js',
      //       //   var: 'mdi',
      //       //   path: 'https://unpkg.com/@mdi/js/mdi.js',
      //       //   // path:'https://cdn.jsdelivr.net/npm/vite-plugin-mdi-icons@0.1.0/dist/index.min.js',
      //       // },  
      //       // {
      //       //   name: 'zrender',
      //       //   var: 'Zrender',
      //       //   path: 'https://unpkg.com/zrender',
      //       // },   
      //     ],
      // }),
  ],
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  build: {
    target: 'esnext',
    minify: true,
    rollupOptions: {
      output: {
        sourcemap:false,
        compact:true,

        // manualChunks (filePath) { 
        //   // console.log('###########'+filePath)
        //   if (filePath.includes('node_modules')) {    
        //     return 'vender'
        //     // console.log(filePath.toString().split('node_modules/')[1].split('/')[0].toString())
        //     // return filePath.toString().split('node_modules/')[1].split('/')[0].toString();
        //   }else{
        //     return 'mttk-designer'
        //   }
        // }
      }
    }
  }
})
