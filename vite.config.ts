import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/auth': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/users': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
