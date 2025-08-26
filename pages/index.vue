<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Banner from '../components/atoms/Banner.vue'

// This is equivalent to your data() in the Options API
const baseAsset = ref('/img/work2.jpg')

const statistics = ref({
  total_subdistricts: 0,
  total_villages: 0,
  total_ikms: 0,
  total_markets: 0,
  total_commodities: 0
})

const isLoading = ref(true)
const hasError = ref(false)

const config = useRuntimeConfig()
const baseUrl = config.public.apiUrl

const fetchStatistics = async () => {
  try {
    isLoading.value = true

    // Fetch data from API endpoint
    const response = await $fetch(`${baseUrl}/home/statistic`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response && response.data) {
      statistics.value = response.data
    }

    // Update statistics with response data
    hasError.value = false
  } catch (error) {
    console.error('Failed to fetch statistics:', error)
    hasError.value = true

    statistics.value = {
      total_subdistricts: 0,
      total_villages: 0,
      total_ikms: 0,
      total_markets: 0,
      total_commodities: 0
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchStatistics)
</script>

<template>
  <div class="wrapper">
    <Banner />
    <div>
      <section id="profil-bidang-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>PROFIL BIDANG</h2>
                <p>
                  Dinas Perdagangan dan Perindustrian Kabupaten Konawe Utara berdasarkan Peraturan Bupati Konawe
                  Utara<br />
                  Nomor 12 Tahun 2019 tentang Kedudukan, Susunan organisasi, Tugas dan Fungsi, Serta Tata Kerja<br />
                  Dinas Perdagangan dan Perindustrian Kabupaten Konawe Utara, terdiri dari beberapa susunan organisasi
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-6 col-sm-6">
              <div class="feature-block text-center">
                <div class="icon-box">
                  <i class="ion-easel"></i>
                </div>
                <h4 class="wow fadeInUp" data-wow-delay=".3s">Bidang Perindustrian</h4>
                <p class="wow fadeInUp" data-wow-delay=".5s">
                  Bidang Perindustrian mempunyai mempunyai 3 seksi yaitu Seksi Pembinaan dan Pengembangan Industri,
                  Seksi Produksi Monitoring dan Pelaporan, Seksi Energi dan Sumber Daya Mineral
                </p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 col-sm-6">
              <div class="feature-block text-center">
                <div class="icon-box">
                  <i class="ion-paintbucket"></i>
                </div>
                <h4 class="wow fadeInUp" data-wow-delay=".3s">Bidang Perdagangan</h4>
                <p class="wow fadeInUp" data-wow-delay=".5s">
                  Bidang Perdagangan mempunyai mempunyai 3 seksi yaitu Seksi Pembinaan pasar dan Distribusi, Seksi
                  Perlindungan dan Pengawasan Perdagangan, Seksi Ketertiban, Pemeliharaan dan Pengembangan Pasar
                </p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 col-sm-6">
              <div class="feature-block text-center">
                <div class="icon-box">
                  <i class="ion-paintbrush"></i>
                </div>
                <h4 class="wow fadeInUp" data-wow-delay=".3s">Bidang Pengelolaan Pasar</h4>
                <p class="wow fadeInUp" data-wow-delay=".5s">
                  Bidang Pengelolaan Pasar mempunyai mempunyai 3 seksi yaitu Seksi Pendapatan / Retribusi Pasar, Seksi
                  Sarana dan Prasarana, Seksi Pemeliharaan Kebersihan dan Keamanan Pasar
                </p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 col-sm-6">
              <div class="feature-block text-center">
                <div class="icon-box">
                  <i class="ion-paintbrush"></i>
                </div>
                <h4 class="wow fadeInUp" data-wow-delay=".3s">Bidang Kemetrologian</h4>
                <p class="wow fadeInUp" data-wow-delay=".5s">
                  Bidang Kemetrologian mempunyai mempunyai 3 seksi yaitu Seksi Pelayanan Tera dan Tera Ulang, Seksi Bina
                  Sumber Daya Manusia, Seksi Pengawasan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="statistik">
        <div class="container">
          <div class="row">
            <div class="title">
              <h2>STATISTIK</h2>
              <p>
                Berikut beberapa tampilan data Jumlah Kecamatan, Jumlah Pasar dan Jumlah Komoditi<br />
                yang ada di Kabupaten Konawe Utara
              </p>
            </div>

            <!-- Loading indicator -->
            <div v-if="isLoading" class="col-md-12 text-center">
              <p>Sedang memuat data statistik...</p>
            </div>

            <!-- Error notification (hidden by default) -->
            <div v-if="hasError" class="col-md-12">
              <div class="alert alert-warning">
                Terjadi masalah saat memuat data. Menampilkan data default.
              </div>
            </div>

            <!-- Statistics display -->
            <div v-if="!isLoading" class="col-md-3 col-sm-6 col-xs-6">
              <div class="block wow fadeInRight" data-wow-delay=".3s">
                <i class="ion-code"></i>
                <p class="aio-statistik-text">
                  <span class="aio-statistik-digit">{{ statistics.total_subdistricts }}</span>
                </p>
                <p>Jumlah Kecamatan</p>
              </div>
            </div>

            <div v-if="!isLoading" class="col-md-3 col-sm-6 col-xs-6">
              <div class="block wow fadeInRight" data-wow-delay=".3s">
                <i class="ion-code"></i>
                <p class="aio-statistik-text">
                  <span class="aio-statistik-digit">{{ statistics.total_ikms }}</span>
                </p>
                <p>Jumlah IKM</p>
              </div>
            </div>

            <div v-if="!isLoading" class="col-md-3 col-sm-6 col-xs-6">
              <div class="block wow fadeInRight" data-wow-delay=".5s">
                <i class="ion-compass"></i>
                <p class="aio-statistik-text">
                  <span class="aio-statistik-digit">{{ statistics.total_markets }} +</span>
                </p>
                <p>Jumlah Pasar</p>
              </div>
            </div>

            <div v-if="!isLoading" class="col-md-3 col-sm-6 col-xs-6">
              <div class="block wow fadeInRight" data-wow-delay=".7s">
                <i class="ion-compose"></i>
                <p class="aio-statistik-text">
                  <span class="aio-statistik-digit">{{ statistics.total_commodities }}</span>
                </p>
                <p>Jumlah Komoditi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="komoditi">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>KOMODITI UNGGULAN</h2>
                <p>
                  Kabupaten Konawe Utara memiliki beberapa jenis Komoditi Unggulan,komoditi ini terdiri dari Hasil Bumi,
                  Hasil Laut dan Kerajinan.<br />
                  Berikut beberapa list komoditi unggulan yang dimiliki oleh Kabupaten Konawe Utara
                </p>
              </div>
              <div class="block">
                <div class="recent-work-pic">
                  <ul id="mixed-items">
                    <li class="mix category-1 col-md-4 col-xs-6" data-my-order="1">
                      <!-- <a class="example-image-link" href="#" data-lightbox="example-set"> -->
                      <img class="img-responsive" src="@/public/img/komoditi/KOMODITI_JAGUNG.png" alt="">
                      <div class="overlay">
                        <h3>
                          Jagung <br>
                          <span class="aio-price">25.000</span>
                        </h3>
                        <i class="ion-ios-plus-empty"></i>
                      </div>
                      <!-- </a> -->
                    </li>
                    <li class="mix category-2 col-md-4 col-xs-6" data-my-order="2">
                      <!-- <a class="example-image-link" href="#" data-lightbox="example-set"> -->
                      <img class="img-responsive" src="@/public/img/komoditi/KOMODITI_BAWANG_BOMBAY.png" alt="">
                      <div class="overlay">
                        <h3>
                          Bawang Bombay<br>
                          <span class="aio-price">20.000</span>
                        </h3>
                        <i class="ion-ios-plus-empty"></i>
                      </div>
                      <!-- </a> -->
                    </li>
                    <li class="mix category-1 col-md-4 col-xs-6" data-my-order="3">
                      <!-- <a class="example-image-link" href="#" data-lightbox="example-set"> -->
                      <img class="img-responsive" src="@/public/img/komoditi/KOMODITI_BERAS.png" alt="">
                      <div class="overlay">
                        <h3>
                          Beras <br>
                          <span class="aio-price">15.000</span>
                        </h3>
                        <i class="ion-ios-plus-empty"></i>
                      </div>
                      <!-- </a> -->
                    </li>
                    <li class="mix category-2 col-md-4 col-xs-6" data-my-order="4">
                      <!-- <a class="example-image-link" href="#" data-lightbox="example-set"> -->
                      <img class="img-responsive" src="@/public/img/komoditi/KOMODITI_CABAI.png" alt="">
                      <div class="overlay">
                        <h3>
                          Cabai <br>
                          <span class="aio-price">13.000</span>
                        </h3>
                        <i class="ion-ios-plus-empty"></i>
                      </div>
                      <!-- </a> -->
                    </li>
                    <li class="mix category-1 col-md-4 col-xs-6" data-my-order="5">
                      <!-- <a class="example-image-link" href="#" data-lightbox="example-set"> -->
                      <img class="img-responsive" src="@/public/img/komoditi/KOMODITI_DAGING_AYAM.png" alt="">
                      <div class="overlay">
                        <h3>
                          Daging Ayam <br>
                          <span class="aio-price">30.000</span>
                        </h3>
                        <i class="ion-ios-plus-empty"></i>
                      </div>
                      <!-- </a> -->
                    </li>
                    <li class="mix category-2 col-md-4 col-xs-6" data-my-order="6">
                      <!-- <a class="example-image-link" href="#" data-lightbox="example-set"> -->
                      <img class="img-responsive" src="@/public/img/komoditi/KOMODITI_GULA_PASIR.png" alt="">
                      <div class="overlay">
                        <h3>
                          Gula Pasir <br>
                          <span class="aio-price">12.000</span>
                        </h3>
                        <i class="ion-ios-plus-empty"></i>
                      </div>
                      <!-- </a> -->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="slogan">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block">
                <h2 class="wow fadeInUp" data-wow-delay=".3s">KONASARA II</h2>
                <p class="wow fadeInUp" data-wow-delay=".5s">“KONAWE UTARA YANG LEBIH SEJAHTERA DAN BERDAYA SAING”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bosbos">
        <div class="container">
          <div class="row">
            <div class="title">
              <h2>STRUKTUR ORGANISASIx</h2>
              <p>Struktur Organisasi Dinas Perdagangan dan Perindustrian Konawe Utara Meliputi seluruh jabatan
                fungsional yang ada dalam dinas</p>
            </div>
            <div class="col col-md-offset-3 col-md-6">
              <div class="media wow fadeInLeft" data-wow-delay=".3s">
                <div class="media-left">
                  <a href="javascript:void(0);">
                    <img src="/img/service-img.png" alt="">
                  </a>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0);">
                    <h3 class="media-heading">xJonathon Andrew</h3>
                    <h5 class="media-heading">Kepala Dinas Perindustrian dan Perdagangan</h5>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commo</p>
                </div>
              </div>
            </div>
            <div class="col col-md-6">
              <div class="media wow fadeInLeft" data-wow-delay=".3s">
                <div class="media-left">
                  <a href="javascript:void(0);">
                    <img src="/img/service-img.png" alt="">
                  </a>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0);">
                    <h3 class="media-heading">Jonathon Andrew</h3>
                    <h5 class="media-heading">Kepala Bidang Pengelolaan Pasar</h5>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commo</p>
                </div>
              </div>
            </div>
            <div class="col col-md-6">
              <div class="media wow fadeInRight" data-wow-delay=".3s">
                <div class="media-left">
                  <a href="javascript:void(0);">
                    <img src="/img/service-img.png" alt="">
                  </a>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0);">
                    <h3 class="media-heading">Jonathon Andrew</h3>
                    <h5 class="media-heading">Kepala Bidang Perdagangan</h5>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commo</p>
                </div>
              </div>
            </div>
            <div class="col col-md-6">
              <div class="media wow fadeInLeft" data-wow-delay=".3s">
                <div class="media-left">
                  <a href="javascript:void(0);">
                    <img src="/img/service-img.png" alt="">
                  </a>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0);">
                    <h3 class="media-heading">Jonathon Andrew</h3>
                    <h5 class="media-heading">Kepala Bidang Kemetrologian</h5>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commo</p>
                </div>
              </div>
            </div>
            <div class="col col-md-6">
              <div class="media wow fadeInRight" data-wow-delay=".3s">
                <div class="media-left">
                  <a href="javascript:void(0);">
                    <img src="/img/service-img.png" alt="">
                  </a>
                </div>
                <div class="media-body">
                  <a href="javascript:void(0);">
                    <h3 class="media-heading">Jonathon Andrew</h3>
                    <h5 class="media-heading">Kepala Bidang Kemetrologian</h5>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="survey">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block">
                <h3 class="wow fadeInUp" data-wow-delay=".5s">Survey Kepuasan Pelayanan</h3>
                <p class="wow fadeInUp" data-wow-delay=".5s">Mari Bersama Membangun Pelayanan Yang Lebih Baik</p>
                <button class="wow fadeInUp btn btn-md aio-btn-success aio-font-weight-bold float left"
                  data-wow-delay=".5s">Klik Disini</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>BERITA</h2>
                <p>Temukan Berita atau Pengumuman Penting dari Dinas Perdagangan dan Perindustrian Konawe Utara</p>
              </div>
              <div id="blog-post" class="owl-carousel">
                <div class="row">
                  <!-- Berita 1 -->
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="block">
                      <img src="@/public/img/berita_1.jpg"
                        alt="PEMDA Konawe Utara Resmikan Dua Pasar Rakyat untuk Dongkrak Ekonomi dan Atasi Kemiskinan, Inflasi, serta Stunting"
                        class="img img-responsive aio-no-padding">
                      <div class="content">
                        <h4>
                          <NuxtLink to="/berita/1">PEMDA Konawe Utara Resmikan Dua Pasar Rakyat untuk Dongkrak Ekonomi
                            dan Atasi Kemiskinan, Inflasi, serta Stunting</NuxtLink>
                        </h4>
                        <small>By admin / Aug 26, 2025</small>
                        <p>
                          Menghadapi tantangan dunia kedepan seperti inflasi...
                        </p>
                        <NuxtLink to="/berita/1" class="btn btn-read">Read More</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <!-- Berita 2 -->
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="block">
                      <img src="@/public/img/berita_2.jpg" alt="PEMDA Konawe Utara Gelar Pasar Murah di Kecamatan Sawa"
                        class="img img-responsive aio-no-padding">
                      <div class="content">
                        <h4>
                          <NuxtLink to="/berita/2">PEMDA Konawe Utara Gelar Pasar Murah di Kecamatan Sawa</NuxtLink>
                        </h4>
                        <small>By admin / Aug 20, 2025</small>
                        <p>
                          Guna menekan angka kemiskinan ekstrim...
                        </p>
                        <NuxtLink to="/berita/2" class="btn btn-read">Read More</NuxtLink>
                      </div>
                    </div>
                  </div>

                  <!-- Berita 3 -->
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="block">
                      <img src="@/public/img/berita_3.jpg" alt="PEMDA Konawe Utara Gelar Pasar Murah untuk Masyarakat"
                        class="img img-responsive aio-no-padding">
                      <div class="content">
                        <h4>
                          <NuxtLink to="/berita/3">PEMDA Konawe Utara Gelar Pasar Murah untuk Masyarakat</NuxtLink>
                        </h4>
                        <small>By admin / Aug 15, 2025</small>
                        <p>
                          Dalam rangka menekan inflasi, Pemerintah Daerah (Pemda) Konawe Utara (Konut)...
                        </p>
                        <NuxtLink to="/berita/3" class="btn btn-read">Read More</NuxtLink>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form">
        <div class="container">
          <div class="row">
            <div class="title">
              <h2>CONTACT US</h2>
              <p>Informasi tentang Lokasi atau Titik Dinas Perdagangan dan perindustrian dalam google maps yang dapat
                diakses oleh pengunjung serta sebuah kotak surat untuk mengirimkan kritik dan saran untuk menjadikan
                dinas perdagangan dan perindustrian konawe utara menjadi lebih baik!</p>
            </div>
            <div class="col-md-6 col">
              <!-- map -->
              <div class="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13394.411243642062!2d122.14223910117175!3d-3.5453918186821562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d99bb0515e73e7d%3A0x80090f1afb060961!2sBLUD%20RS%20Kabupaten%20Konawe%20Utara!5e0!3m2!1sen!2sid!4v1677343442104!5m2!1sen!2sid"
                  width="100%" height="370" style="border:0;" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <!--/map-->

            </div>
            <div class="col-md-6">
              <form>
                <input type="text" class="form-control" placeholder="Nama">
                <input type="text" class="form-control" placeholder="Email">
                <textarea class="form-control" rows="3" placeholder="Kritik & Saran"></textarea>
                <button class="btn btn-default" type="submit">KIRIM</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
