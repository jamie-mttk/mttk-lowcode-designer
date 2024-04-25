import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
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
