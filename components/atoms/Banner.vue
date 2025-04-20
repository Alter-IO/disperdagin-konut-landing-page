<template>
    <div>
      <section id="banner" v-if="$route.name=='index'">
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
                <h1>BIG HEADLINE FOR BLOG</h1>
                <p>13 MARCH 2015 / BY SARA SMITH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
</template>


<script lang="ts">
export default{
  mounted():any{
    console.log()
  }
}
</script>