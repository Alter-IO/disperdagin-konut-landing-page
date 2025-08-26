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
    { src: '/js/jquery-1.11.3.min.js', body: true },
    { src: '/js/bootstrap.min.js', body: true },
    { src: '/js/waypoints.min.js', body: true },
    { src: '/js/lightbox.js', body: true },
    { src: '/js/jquery.counterup.min.js', body: true },
    { src: '/js/owl.carousel.min.js', body: true },
    { src: '/js/html5lightbox.js', body: true },
    { src: '/js/jquery.mixitup.js', body: true },
    { src: '/js/wow.min.js', body: true },
    { src: '/js/jquery.sticky.js', body: true },
    { src: '/js/jquery.nav.js', body: true },
    { src: '/js/main.js', body: true }
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