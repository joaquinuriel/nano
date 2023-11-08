import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    VitePWA({ registerType: 'autoUpdate' }),
    react(),
    legacy(),
  ],
});
