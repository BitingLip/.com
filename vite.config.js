import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    // Handle client-side routing during development
    historyApiFallback: true,
    // Allow testing with custom hostnames during development
    host: true,
    port: 5173
  },
  build: {
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize for production
    minify: 'terser',
    // Handle assets properly
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Better caching with content hashes
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  // Ensure proper handling of router history mode
  preview: {
    port: 4173,
    host: true
  }
})
