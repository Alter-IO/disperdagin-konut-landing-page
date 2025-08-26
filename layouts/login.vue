<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// Login layout - minimal layout without header/footer
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
    { rel: 'stylesheet', href: '/css/login.css' }
  ],
  script: [
    { src: '/js/jquery-1.11.3.min.js' },
    { src: '/js/bootstrap.min.js' },
    { src: '/js/login.js' }
  ]
})
</script>