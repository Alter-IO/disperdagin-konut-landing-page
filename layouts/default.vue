<!-- Please remove this file from your project -->
<template>
  <main id="top">
    <Header/>
    <div>
      <NuxtPage />
      <Footer/>
    </div>
  </main>
</template>

  
<script lang="ts">
export default {
  data(): any {
    return {
    }
  },
  methods: {
  },
  head() {
    return {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
        { rel: 'stylesheet', href:'./css/animate.min.css'},
        { rel: 'stylesheet', href:'./css/bootstrap.min.css'},
        // { rel: 'stylesheet', href:'/css/overwrite.css'},
        { rel: 'stylesheet', href:'./css/font-awesome.min.css'},
        { rel: 'stylesheet', href:'./css/icon.css'},
        { rel: 'stylesheet', href:'./css/image.css'},
        { rel: 'stylesheet', href:'./css/lightbox.css'},
        { rel: 'stylesheet', href:'./css/owl.carousel.css'},
        { rel: 'stylesheet', href:'./css/owl.transitions.css'},
        { rel: 'stylesheet', href:'./css/preloader.css'},
        { rel: 'stylesheet', href:'./css/style.css'},
        { rel: 'stylesheet', href:'./css/tab.css'},
        { rel: 'stylesheet', href:'./css/aio.css'}
      ],
      script: [
        { type: 'text/javascript', src: './js/jquery-1.11.3.min.js', body: true },
        { type: 'text/javascript', src: './js/bootstrap.min.js', body: true },
        { type: 'text/javascript', src: './js/waypoints.min.js', body: true },
        { type: 'text/javascript', src: './js/lightbox.js', body: true },
        { type: 'text/javascript', src: './js/jquery.counterup.min.js', body: true },
        { type: 'text/javascript', src: './js/owl.carousel.min.js', body: true },
        { type: 'text/javascript', src: './js/html5lightbox.js', body: true },
        { type: 'text/javascript', src: './js/jquery.mixitup.js', body: true },
        { type: 'text/javascript', src: './js/wow.min.js', body: true },
        // { type: 'text/javascript', src: './js/jquery.scrollUp.js', body: true },
        { type: 'text/javascript', src: './js/jquery.sticky.js', body: true },
        { type: 'text/javascript', src: './js/jquery.nav.js', body: true },
        { type: 'text/javascript', src: './js/main.js', body: true }
      ]
    }
  },
}
</script>

