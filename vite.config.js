import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['logo.svg'],
      manifest: {
        name: 'My Pokedex',
        short_name: 'Pokedex',
        description: 'This my awaesome pokedez and ir can talk!!!',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo.png',
            sizes: '192x192',
            type: 'image/svg'
          },
          {
            src: 'logo.svg',
            sizes: '512x512',
            type: 'image/svg'
          }
        ]
      }
      
    })
  ],
  server: {
    host: true
  }
})
