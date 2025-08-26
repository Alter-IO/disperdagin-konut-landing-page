export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    // Private keys that are exposed to the server only
    apiSecret: process.env.API_SECRET,
    
    // Public keys that are exposed to the client
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:4000/v1'
    }
  },
  // Auto-import components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue'],
      global: true 
    },
  ],
  
  // Explicitly define aliases
  alias: {
    '@': '/<rootDir>',
    '~': '/<rootDir>'
  },
  
  // Vite configuration for better module resolution
  vite: {
    resolve: {
      alias: {
        '@': '/<rootDir>',
        '~': '/<rootDir>'
      }
    }
  }
})