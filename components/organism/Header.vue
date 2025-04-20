<template lang="">
    <header id="navigation" class="navbar-fixed-top animated-header">
      <div class="container">
        <div class="navbar-header">
          <!-- responsive nav button -->
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- /responsive nav button -->

          <!-- logo -->
          <h1 class="navbar-brand">
            <a href="#body"><img :src="require('@/static/img/logo-header.png')" height="41" width="100%" alt=""></a>
          </h1>
          <!-- /logo -->
        </div>

        <!-- main nav -->
        <nav class="collapse navbar-collapse navbar-right" role="navigation">
          <ul id="nav" class="nav navbar-nav menu">
            <li class="active">
              <NuxtLink to="/login">
                Login
              </NuxtLink>
            </li>
            <li :class="uri_segment == 'index' ? 'active' : ''">
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li class="dropdown" :class="uri_segment == 'profil' ? 'active' : ''">
              <NuxtLink to="#" class="dropdown-toggle" data-toggle="dropdown">Profil <b class="caret"></b></NuxtLink>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><NuxtLink to="/profil/sambutan">Sambutan</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/profil/visi-misi">Visi Misi</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/profil/struktur-organisasi">Struktur Organisasi</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/profil/bidang-bidang">Bidang-bidang</NuxtLink></li>
              </ul>
            </li>
            <li class="dropdown" :class="uri_segment == 'statistik' ? 'active' : ''">
              <NuxtLink to="#" class="dropdown-toggle" data-toggle="dropdown">Statistik <b class="caret"></b></NuxtLink>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><NuxtLink to="/statistik/komoditi">Komoditi</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/statistik/ikm">IKM</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/statistik/lokasi-pasar">Lokasi Pasar</NuxtLink></li>
              </ul>
            </li>
            <li :class="uri_segment == 'berita' ? 'active' : ''">
              <NuxtLink to="/berita">
                Berita
              </NuxtLink>
            </li>
            <li class="dropdown" :class="uri_segment == 'informasi' ? 'active' : ''">
              <NuxtLink to="#" class="dropdown-toggle" data-toggle="dropdown">Informasi Publik <b class="caret"></b></NuxtLink>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><NuxtLink to="/informasi-publik/laporan-akuntansi">Laporan Akuntansi</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/informasi-publik/rencana-strategis">Rencana Strategis</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/informasi-publik/rencana-kerja">Rencana Kerja</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/informasi-publik/indikator-kinerja-utama">Indikator Kinerja Utama</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/informasi-publik/perjanjian-kerja">Perjanjian Kerja</NuxtLink></li>
              </ul>
            </li>
            <li class="dropdown" :class="uri_segment == 'produk' ? 'active' : ''">
              <NuxtLink to="#" class="dropdown-toggle" data-toggle="dropdown">Produk Hukum <b class="caret"></b></NuxtLink>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><NuxtLink to="/produk-hukum/peraturan-daerah">Peraturan Daerah</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/produk-hukum/peraturan-bupati">Rencana Bupati</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/produk-hukum/peraturan-kepala-skpd">Peraturan Kepala SKPD</NuxtLink></li>
              </ul>
            </li>
            <li class="dropdown" :class="uri_segment == 'galeri' ? 'active' : ''">
              <NuxtLink to="#" class="dropdown-toggle" data-toggle="dropdown">Galeri <b class="caret"></b></NuxtLink>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><NuxtLink to="/galeri/foto">Foto</NuxtLink></li>
                <li class="aio-dropdown-menu"><NuxtLink to="/galeri/video">Video</NuxtLink></li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /main nav -->

      </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    uri_segment() {
      return this.$route.name?.split('-')[0];
    }
  }
})
</script>