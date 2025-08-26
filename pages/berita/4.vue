<template>
    <div class="wrapper">
        <div class="aio-section">
            <section id="berita">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h3>Pelatihan IKM Rumput Laut</h3>
                                <small>By Dinas Perindustrian / 5 September 2024</small>
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
                                    <img class="img-responsive" src="@/static/img/blog/blog-4.jpg"
                                        alt="Pelatihan IKM Rumput Laut" />
                                </div>
                            </div>
                            <div class="block">
                                <span class="first-child-span">
                                    Dinas Perindustrian Konawe Utara mengadakan <b>Pelatihan IKM Rumput Laut</b> untuk
                                    meningkatkan kualitas produk olahan rumput laut bagi pelaku usaha kecil dan
                                    menengah.
                                </span>

                                <p class="first-child">
                                    Pelatihan ini mencakup teknik pengolahan rumput laut, manajemen produksi, dan
                                    kemasan produk agar lebih menarik bagi konsumen lokal maupun nasional.
                                    Peserta dibimbing langsung oleh instruktur ahli di bidang pengolahan rumput laut.
                                </p>

                                <blockquote>
                                    <p>
                                        "Kami ingin meningkatkan daya saing produk lokal serta memberikan peluang
                                        pendapatan tambahan bagi masyarakat pesisir."
                                    </p>
                                    <div class="footer">Kepala Dinas Perindustrian</div>
                                </blockquote>

                                <p>
                                    Para peserta juga diberikan materi tentang pemasaran digital dan branding produk
                                    agar produk olahan rumput laut mampu menembus pasar lebih luas.
                                </p>

                                <p>
                                    Program ini diharapkan dapat mendorong pertumbuhan ekonomi lokal dan memperkuat
                                    keberlanjutan usaha mikro, kecil, dan menengah di Konawe Utara.
                                </p>

                                <div class="tags">
                                    <h5>Tags</h5>
                                    <a href="#">IKM</a>,
                                    <a href="#">Rumput Laut</a>,
                                    <a href="#">Pelatihan</a>,
                                    <a href="#">Konawe Utara</a>
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
    name: "BeritaIKMRumputLaut",
})
</script>
