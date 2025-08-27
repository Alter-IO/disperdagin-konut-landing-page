<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="foto">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>GALERI VIDEO</h2>
                <p>Memuat Link - Link Video yang berisikan tentang informasi atau kegiatan Dinas Perdagangan Dan
                  Perindustrian
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- <div align="center">
              <button class="btn btn-default filter-button" data-filter="all">All</button>
              <button class="btn btn-default filter-button" data-filter="hdpe">HDPE Pipes</button>
              <button class="btn btn-default filter-button" data-filter="sprinkle">Sprinkle Pipes</button>
              <button class="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
              <button class="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
            </div> -->
            <div align="center">
              <h2>Data tidak ditemukan</h2>
            </div>
            <!-- <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter hdpe wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter sprinkle wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter hdpe wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter irrigation wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter spray wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter irrigation wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter spray wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter irrigation wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter irrigation wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter hdpe wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter spray wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div>

            <div class="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-6 filter sprinkle wow fadeInUp" data-wow-delay=".3s">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P2s2LCFFACI?list=RD4cZQF-BN3W8" allowfullscreen></iframe>
              </div>
            </div> -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  head() {
    return {
      script: [
        { type: 'text/javascript', src: '/js/gallery.js', body: true }
      ]
    }
  },
  data() {
    return {
      users: [],
      dataTable: [
        {
          nama_dokumen: 'dokumen 1',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 2',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 3',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 4',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 5',
          url: '#'
        },
      ]
    }
  },
  computed: {
  },
  mounted() {
    // await this.$axios
    // .get("https://therichpost.com/testjsonapi/users/")
    // .then((res)=>
    // {
    //   this.users = res.data;
    //   console.log(this.users);
    // })
  }
})
</script>

<style>
.gallery-title {
  font-size: 36px;
  color: #42B32F;
  text-align: center;
  font-weight: 500;
  margin-bottom: 70px;
}

.gallery-title:after {
  content: "";
  position: absolute;
  width: 7.5%;
  left: 46.5%;
  height: 45px;
  border-bottom: 1px solid #5e5e5e;
}

.filter-button {
  font-size: 18px;
  border: 1px solid #42B32F;
  border-radius: 5px;
  text-align: center;
  color: #42B32F;
  margin-bottom: 30px;

}

.filter-button:hover {
  font-size: 18px;
  border: 1px solid #42B32F;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  background-color: #42B32F;

}

.btn-default:active .filter-button:active {
  background-color: #42B32F;
  color: white;
}

.port-image {
  width: 100%;
}

.gallery_product {
  margin-bottom: 30px;
}
</style>