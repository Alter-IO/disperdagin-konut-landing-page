declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      Header: typeof import('./components/organism/Header.vue')['default']
      Footer: typeof import('./components/organism/Footer.vue')['default']
      Banner: typeof import('./components/atoms/Banner.vue')['default']
      NuxtLogo: typeof import('./components/atoms/NuxtLogo.vue')['default']
      // Add other components as needed
    }
  }
  
  export {}