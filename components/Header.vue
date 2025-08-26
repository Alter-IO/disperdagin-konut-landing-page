<template>
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
          <NuxtLink to="#body">
            <img src="/img/logo-header.png" height="41" width="100%" alt="Logo" />
          </NuxtLink>
        </h1>
        <!-- /logo -->
      </div>

      <!-- main nav -->
      <nav class="collapse navbar-collapse navbar-right" role="navigation">
        <ul id="nav" class="nav navbar-nav menu">
          <!-- Login -->
          <li>
            <NuxtLink to="/login" class="nav-link" @click="() => console.log('Navigating to /login')">
              Login
            </NuxtLink>
          </li>

          <!-- Home -->
          <li :class="uri_segment == 'index' ? 'active' : ''">
            <NuxtLink to="/" class="nav-link" @click="() => console.log('Navigating to /')">
              Home
            </NuxtLink>
          </li>

          <!-- Profil Dropdown -->
          <li class="dropdown" :class="uri_segment == 'profil' ? 'active' : ''">
            <NuxtLink to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              Profil <b class="caret"></b>
            </NuxtLink>
            <ul class="dropdown-menu">
              <li class="aio-dropdown-menu">
                <NuxtLink to="/profil/sambutan" class="dropdown-item"
                  @click="() => console.log('Navigating to Sambutan')">Sambutan</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/profil/visi-misi" class="dropdown-item"
                  @click="() => console.log('Navigating to Visi Misi')">Visi Misi</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/profil/struktur-organisasi" class="dropdown-item"
                  @click="() => console.log('Navigating to Struktur Organisasi')">Struktur Organisasi</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/profil/bidang-bidang" class="dropdown-item"
                  @click="() => console.log('Navigating to Bidang-bidang')">Bidang-bidang</NuxtLink>
              </li>
            </ul>
          </li>

          <!-- Statistik Dropdown -->
          <li class="dropdown" :class="uri_segment == 'statistik' ? 'active' : ''">
            <NuxtLink to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              Statistik <b class="caret"></b>
            </NuxtLink>
            <ul class="dropdown-menu">
              <li class="aio-dropdown-menu">
                <NuxtLink to="/statistik/komoditi" class="dropdown-item"
                  @click="() => console.log('Navigating to Komoditi')">Komoditi</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/statistik/ikm" class="dropdown-item" @click="() => console.log('Navigating to IKM')">IKM
                </NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/statistik/lokasi-pasar" class="dropdown-item"
                  @click="() => console.log('Navigating to Lokasi Pasar')">Lokasi Pasar</NuxtLink>
              </li>
            </ul>
          </li>

          <!-- Berita -->
          <li :class="uri_segment == 'berita' ? 'active' : ''">
            <NuxtLink to="/berita" class="nav-link" @click="() => console.log('Navigating to Berita')">
              Berita
            </NuxtLink>
          </li>

          <!-- Informasi Publik Dropdown -->
          <li class="dropdown" :class="uri_segment == 'informasi' ? 'active' : ''">
            <NuxtLink to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              Informasi Publik <b class="caret"></b>
            </NuxtLink>
            <ul class="dropdown-menu">
              <li class="aio-dropdown-menu">
                <NuxtLink to="/informasi-publik/laporan-akuntansi" class="dropdown-item"
                  @click="() => console.log('Navigating to Laporan Akuntansi')">Laporan Akuntansi</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/informasi-publik/rencana-strategis" class="dropdown-item"
                  @click="() => console.log('Navigating to Rencana Strategis')">Rencana Strategis</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/informasi-publik/rencana-kerja" class="dropdown-item"
                  @click="() => console.log('Navigating to Rencana Kerja')">Rencana Kerja</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/informasi-publik/indikator-kinerja-utama" class="dropdown-item"
                  @click="() => console.log('Navigating to Indikator Kinerja Utama')">Indikator Kinerja Utama</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/informasi-publik/perjanjian-kerja" class="dropdown-item"
                  @click="() => console.log('Navigating to Perjanjian Kerja')">Perjanjian Kerja</NuxtLink>
              </li>
            </ul>
          </li>

          <!-- Produk Hukum Dropdown -->
          <li class="dropdown" :class="uri_segment == 'produk' ? 'active' : ''">
            <NuxtLink to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              Produk Hukum <b class="caret"></b>
            </NuxtLink>
            <ul class="dropdown-menu">
              <li class="aio-dropdown-menu">
                <NuxtLink to="/produk-hukum/peraturan-daerah" class="dropdown-item"
                  @click="() => console.log('Navigating to Peraturan Daerah')">Peraturan Daerah</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/produk-hukum/peraturan-bupati" class="dropdown-item"
                  @click="() => console.log('Navigating to Rencana Bupati')">Rencana Bupati</NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/produk-hukum/peraturan-kepala-skpd" class="dropdown-item"
                  @click="() => console.log('Navigating to Peraturan Kepala SKPD')">Peraturan Kepala SKPD</NuxtLink>
              </li>
            </ul>
          </li>

          <!-- Galeri Dropdown -->
          <li class="dropdown" :class="uri_segment == 'galeri' ? 'active' : ''">
            <NuxtLink to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              Galeri <b class="caret"></b>
            </NuxtLink>
            <ul class="dropdown-menu">
              <li class="aio-dropdown-menu">
                <NuxtLink to="/galeri/foto" class="dropdown-item" @click="() => console.log('Navigating to Foto')">Foto
                </NuxtLink>
              </li>
              <li class="aio-dropdown-menu">
                <NuxtLink to="/galeri/video" class="dropdown-item" @click="() => console.log('Navigating to Video')">
                  Video</NuxtLink>
              </li>
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
      // Extract first segment of the route name
      return this.$route.name?.split('-')[0];
    }
  }
});
</script>
