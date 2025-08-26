<template>
    <div class="wrapper">
        <div class="aio-section">
            <section id="berita">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h3>Gerakan Pangan Murah</h3>
                                <small>By Admin / 5 September 2024</small>
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
                                    <img class="img-responsive" src="@/static/img/blog/blog-3.jpg"
                                        alt="Gerakan Pangan Murah" />
                                </div>
                            </div>
                            <div class="block">
                                <span class="first-child-span">
                                    Pemerintah Daerah Konawe Utara melaksanakan <b>Gerakan Pangan Murah</b> untuk
                                    membantu masyarakat menjaga daya beli di tengah kenaikan harga bahan pokok.
                                </span>

                                <p class="first-child">
                                    Kegiatan ini dilaksanakan di beberapa kecamatan dengan menyediakan beras, minyak
                                    goreng, gula pasir, dan kebutuhan pokok lainnya dengan harga yang lebih terjangkau.
                                    Program ini merupakan bagian dari upaya stabilisasi pasokan dan harga pangan,
                                    sekaligus mendukung kesejahteraan masyarakat.
                                </p>

                                <blockquote>
                                    <p>
                                        "Gerakan Pangan Murah diharapkan mampu meringankan beban masyarakat, khususnya
                                        menjelang hari-hari besar keagamaan dan nasional."
                                    </p>
                                    <div class="footer">Bupati Konawe Utara</div>
                                </blockquote>

                                <p>
                                    Antusiasme masyarakat terlihat tinggi dalam setiap pelaksanaan kegiatan.
                                    Warga datang berbondong-bondong untuk membeli kebutuhan pokok dengan harga yang
                                    lebih murah dibandingkan harga pasar.
                                </p>

                                <p>
                                    Pemerintah berkomitmen melanjutkan program ini secara berkelanjutan agar ketahanan
                                    pangan daerah tetap terjaga dan inflasi terkendali.
                                </p>

                                <div class="tags">
                                    <h5>Tags</h5>
                                    <a href="#">Pangan</a>,
                                    <a href="#">Subsidi</a>,
                                    <a href="#">Konawe Utara</a>,
                                    <a href="#">Ekonomi</a>
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
    name: "BeritaPanganMurah",
})
</script>
