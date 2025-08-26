<template>
    <div class="wrapper">
        <div class="aio-section">
            <section id="berita">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h3>Pengembangan Pasar Asera</h3>
                                <small>By Admin / 15 Agustus 2024</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blog-left">
                <div class="container">
                    <div class="row">
                        <!-- main content -->
                        <div class="col-md-8 col-md-offset-0 col-sm-10 col-sm-offset-1">
                            <div class="blog-img row">
                                <div class="col-md-12">
                                    <img class="img-responsive" src="@/static/img/blog/blog-1.jpg"
                                        alt="Pengembangan Pasar Asera" />
                                </div>
                            </div>
                            <div class="block">
                                <span class="first-child-span">
                                    Pemerintah Kabupaten Konawe Utara meresmikan pengembangan <b>Pasar Asera</b> sebagai
                                    pusat kegiatan ekonomi masyarakat.
                                </span>

                                <p class="first-child">
                                    Revitalisasi Pasar Asera dilakukan untuk meningkatkan akses masyarakat terhadap
                                    bahan pokok sekaligus mendorong pertumbuhan usaha kecil dan menengah di wilayah
                                    tersebut.
                                    Dengan fasilitas baru yang lebih tertata, pedagang dan pembeli dapat berinteraksi
                                    dalam suasana yang lebih nyaman, bersih, dan aman.
                                </p>

                                <blockquote>
                                    <p>
                                        "Pasar rakyat harus menjadi pusat ekonomi berbasis kerakyatan yang mampu
                                        meningkatkan kesejahteraan masyarakat."
                                    </p>
                                    <div class="footer">Bupati Konawe Utara</div>
                                </blockquote>

                                <p>
                                    Pengembangan ini mencakup perbaikan infrastruktur, penyediaan fasilitas sanitasi,
                                    penerangan, dan area parkir yang memadai.
                                    Pemerintah daerah juga memberikan dukungan pelatihan manajemen usaha bagi pedagang
                                    agar mampu bersaing di era modern.
                                </p>

                                <p>
                                    Dengan adanya pasar yang lebih representatif, diharapkan Asera dapat menjadi pusat
                                    distribusi komoditas unggulan Konawe Utara seperti jagung, kakao, dan hasil laut.
                                </p>

                                <div class="tags">
                                    <h5>Tags</h5>
                                    <a href="#">Pasar Rakyat</a>,
                                    <a href="#">Konawe Utara</a>,
                                    <a href="#">Ekonomi Daerah</a>,
                                    <a href="#">UMKM</a>
                                </div>
                            </div>
                        </div>

                        <!-- sidebar -->
                        <div class="col-md-3 col-md-offset-1 col-sm-4">
                            <div class="widget">
                                <span>BERITA TERAKHIR</span>
                                <div class="widget-body">
                                    <ul class="category-list">
                                        <li>
                                            <RouterLink class="items" to="/berita/1">
                                                Pengembangan Pasar Asera
                                            </RouterLink>
                                            Kamis - 15 Agustus 2024
                                        </li>
                                        <li>
                                            <RouterLink class="items" to="/berita/2">
                                                IKM Olahan Kakao Naik Produksi
                                            </RouterLink>
                                            Senin - 10 Juli 2024
                                        </li>
                                        <li>
                                            <RouterLink class="items" to="/berita/3">
                                                Gerakan Pangan Murah
                                            </RouterLink>
                                            Rabu - 28 Juni 2024
                                        </li>
                                        <li>
                                            <RouterLink class="items" to="/berita/4">
                                                Pelatihan IKM Rumput Laut
                                            </RouterLink>
                                            Sabtu - 1 Juni 2024
                                        </li>
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
import { defineComponent } from "vue"

export default defineComponent({
    name: "BeritaAsera",
})
</script>
