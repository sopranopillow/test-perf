import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
build({
  plugins: [react()],
  build: {
    target: 'modules',
    lib: {
      entry: 'lib/withoutSlotAlways.scenario.js',
    },
  },
})


export default defineConfig({
  base: '/lib/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input:{
        "withSlotAlways": "./lib/withSlotAlways.scenario.js",
        "withoutSlotAlways": "./lib/withoutSlotAlways.scenario.js"
      }
    },
  },
})
