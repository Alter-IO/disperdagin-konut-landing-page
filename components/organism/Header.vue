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
            <a href="#body"><img src="/img/logo-header.png" height="41" width="100%" alt=""></a>
          </h1>
          <!-- /logo -->
        </div>

        <!-- main nav -->
        <nav class="collapse navbar-collapse navbar-right" role="navigation">
          <ul id="nav" class="nav navbar-nav menu">
            <li :class="uri_segment == 'index' ? 'active' : ''">
              <a href="/" @click.prevent="navigateTo('/')">
                Home
              </a>
            </li>
            <li class="dropdown" :class="uri_segment == 'profil' ? 'active' : ''">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Profil <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><a href="/profil/sambutan" @click.prevent="navigateTo('/profil/sambutan')">Sambutan</a></li>
                <li class="aio-dropdown-menu"><a href="/profil/visi-misi" @click.prevent="navigateTo('/profil/visi-misi')">Visi Misi</a></li>
                <li class="aio-dropdown-menu"><a href="/profil/struktur-organisasi" @click.prevent="navigateTo('/profil/struktur-organisasi')">Struktur Organisasi</a></li>
                <li class="aio-dropdown-menu"><a href="/profil/bidang-bidang" @click.prevent="navigateTo('/profil/bidang-bidang')">Bidang-bidang</a></li>
              </ul>
            </li>
            <li class="dropdown" :class="uri_segment == 'statistik' ? 'active' : ''">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Statistik <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><a href="/statistik/komoditi" @click.prevent="navigateTo('/statistik/komoditi')">Komoditi</a></li>
                <li class="aio-dropdown-menu"><a href="/statistik/ikm" @click.prevent="navigateTo('/statistik/ikm')">IKM</a></li>
                <li class="aio-dropdown-menu"><a href="/statistik/lokasi-pasar" @click.prevent="navigateTo('/statistik/lokasi-pasar')">Lokasi Pasar</a></li>
              </ul>
            </li>
            <li :class="uri_segment == 'berita' ? 'active' : ''">
              <a href="/berita" @click.prevent="navigateTo('/berita')">
                Berita
              </a>
            </li>
            <li class="dropdown" :class="uri_segment == 'informasi' ? 'active' : ''">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Informasi Publik <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><a href="/informasi-publik/laporan-akuntansi" @click.prevent="navigateTo('/informasi-publik/laporan-akuntansi')">Laporan Akuntansi</a></li>
                <li class="aio-dropdown-menu"><a href="/informasi-publik/rencana-strategis" @click.prevent="navigateTo('/informasi-publik/rencana-strategis')">Rencana Strategis</a></li>
                <li class="aio-dropdown-menu"><a href="/informasi-publik/rencana-kerja" @click.prevent="navigateTo('/informasi-publik/rencana-kerja')">Rencana Kerja</a></li>
                <li class="aio-dropdown-menu"><a href="/informasi-publik/indikator-kinerja-utama" @click.prevent="navigateTo('/informasi-publik/indikator-kinerja-utama')">Indikator Kinerja Utama</a></li>
                <li class="aio-dropdown-menu"><a href="/informasi-publik/perjanjian-kerja" @click.prevent="navigateTo('/informasi-publik/perjanjian-kerja')">Perjanjian Kerja</a></li>
              </ul>
            </li>
            <li class="dropdown" :class="uri_segment == 'produk' ? 'active' : ''">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Produk Hukum <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><a href="/produk-hukum/peraturan-daerah" @click.prevent="navigateTo('/produk-hukum/peraturan-daerah')">Peraturan Daerah</a></li>
                <li class="aio-dropdown-menu"><a href="/produk-hukum/peraturan-bupati" @click.prevent="navigateTo('/produk-hukum/peraturan-bupati')">Rencana Bupati</a></li>
                <li class="aio-dropdown-menu"><a href="/produk-hukum/peraturan-kepala-skpd" @click.prevent="navigateTo('/produk-hukum/peraturan-kepala-skpd')">Peraturan Kepala SKPD</a></li>
              </ul>
            </li>
            <li class="dropdown" :class="uri_segment == 'galeri' ? 'active' : ''">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Galeri <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li class="aio-dropdown-menu"><a href="/galeri/foto" @click.prevent="navigateTo('/galeri/foto')">Foto</a></li>
                <li class="aio-dropdown-menu"><a href="/galeri/video" @click.prevent="navigateTo('/galeri/video')">Video</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /main nav -->

      </div>
    </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const uri_segment = computed(() => {
  return route.name?.toString().split('-')[0] || ''
})

const navigateTo = (path: string) => {
  router.push(path)
}
</script>