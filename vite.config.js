import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pyme: resolve(__dirname, 'pyme.html'),
        empresa: resolve(__dirname, 'test-empresa.html'),
        testPyme: resolve(__dirname, 'test-pyme.html'),
        calculator: resolve(__dirname, 'calculatorRoi.html'),
        navegacion: resolve(__dirname, 'navegacion.html')
      }
    }
  }
})