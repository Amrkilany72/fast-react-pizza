import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// vite.config.js
import eslint from 'vite-plugin-eslint';

eslint({
  failOnError: false,
  failOnWarning: false,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
