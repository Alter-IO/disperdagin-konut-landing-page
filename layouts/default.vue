<script setup>
import Header from '../components/organism/Header.vue'
import Footer from '../components/organism/Footer.vue'

// Use composition API for head
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '/css/animate.min.css' },
    { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
    { rel: 'stylesheet', href: '/css/icon.css' },
    { rel: 'stylesheet', href: '/css/image.css' },
    { rel: 'stylesheet', href: '/css/lightbox.css' },
    { rel: 'stylesheet', href: '/css/owl.carousel.css' },
    { rel: 'stylesheet', href: '/css/owl.transitions.css' },
    { rel: 'stylesheet', href: '/css/preloader.css' },
    { rel: 'stylesheet', href: '/css/style.css' },
    { rel: 'stylesheet', href: '/css/tab.css' },
    { rel: 'stylesheet', href: '/css/aio.css' }
  ],
  script: [
    { src: '/js/jquery-1.11.3.min.js' },
    { src: '/js/bootstrap.min.js' },
    { src: '/js/waypoints.min.js' },
    { src: '/js/lightbox.js' },
    { src: '/js/jquery.counterup.min.js' },
    { src: '/js/owl.carousel.min.js' },
    { src: '/js/html5lightbox.js' },
    { src: '/js/jquery.mixitup.js' },
    { src: '/js/wow.min.js' },
    { src: '/js/jquery.sticky.js' },
    { src: '/js/jquery.nav.js' },
    { src: '/js/main.js' }
  ]
})
</script>

<template>
  <main id="top">
    <Header />
    <slot /> <!-- This is where page content will be injected -->
    <Footer />
  </main>
</template>