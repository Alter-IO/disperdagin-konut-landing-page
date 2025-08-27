<template>

  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="berita">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h3>Berita {{ idBerita }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog-left">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-0 col-sm-10 col-sm-offset-1">
              <div class="blog-img row">
                <div class="col-md-12">
                  <img class="img-responsive" src="@/public/img/blog-details-img2.jpg" alt="">
                </div>
              </div>
              <div class="block">
                <span class="first-child-span">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.</span>
                <p class="first-child">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy
                  text
                  of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard
                  dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the standard dummy text.</p>
                <blockquote>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the
                    printing
                    and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy
                    text.</p>
                  <div class="footer">
                    Jason Santa Maria
                  </div>
                </blockquote>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the
                  industry's standard dummy text ever since the 1500s.</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy
                  text
                  of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                  has been the standard dummy text.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy
                  text
                  of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.</p><br>
                <div class="tags">
                  <h5>Tags</h5>
                  <a href="#">Advertisement</a>,
                  <a href="#">Smart Quotes</a>,
                  <a href="#">Unique</a>,
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-md-offset-1 col-sm-4">
              <div class="widget">
                <span>BERITA TERAKHIR</span>
                <div class="widget-body">
                  <ul class="category-list">
                    <li><a class="items" href="#">Standard Post with Gallery</a>Saturday - June 15, 2013</li>
                    <li><a class="items" href="#">Standard post with preview Video</a>Saturday - June 20, 2013</li>
                    <li><a class="items" href="#">Standard post with preview Picture</a>Saturday - June 25, 2013</li>
                    <li><a class="items" href="#">Standard Post with Gallery</a>Saturday - June 15, 2013</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data(): any {
    return {
      idBerita: this.$route.params.berita
    }
  }
})
</script>
