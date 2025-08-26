<template>
  <div>
    <section id="banner" v-if="$route.name == 'index'">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <h1>SELAMAT DATANG DI</h1>
              <h2>DINAS PERINDUSTRIAN DAN PERDAGANGAN</h2>
              <br>
              <h2>KONAWE UTARA</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="scrolldown">
        <a id="scroll" href="#profil-bidang-section" class="scroll"></a>
      </div>
    </section>
    <section id="global-header" v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block text-center">
              <h1>KONASARA</h1>
              <p>KONAWE UTARA YANG LEBIH SEJAHTERA DAN BERDAYA SAING</p>
              <hr class="border-white" style="border-top: 2px solid #fff; width: 100px; margin: 10px auto;">
              <div><strong>DISPERDAGIN</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script setup lang="ts">
const route = useRoute()
</script>