<template>
    <div class="wrapper">
        <div class="aio-section">
            <section id="berita">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h3>IKM Olahan Kakao Naik Produksi</h3>
                                <small>By Admin / 20 Agustus 2024</small>
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
                                    <img class="img-responsive" src="@/static/img/blog/blog-2.jpg"
                                        alt="IKM Olahan Kakao" />
                                </div>
                            </div>
                            <div class="block">
                                <span class="first-child-span">
                                    Industri Kecil dan Menengah (IKM) Konawe Utara menunjukkan peningkatan signifikan
                                    dalam produksi <b>olahan kakao</b> pada tahun 2024.
                                </span>

                                <p class="first-child">
                                    Peningkatan ini didorong oleh dukungan pemerintah daerah melalui pelatihan, bantuan
                                    peralatan, dan fasilitasi pemasaran produk.
                                    Produk olahan kakao seperti cokelat batangan, bubuk kakao, dan minuman siap saji
                                    kini semakin dikenal di pasar lokal maupun luar daerah.
                                </p>

                                <blockquote>
                                    <p>
                                        "Kami berharap IKM berbasis kakao dapat menjadi salah satu tulang punggung
                                        ekonomi daerah sekaligus meningkatkan nilai tambah bagi petani."
                                    </p>
                                    <div class="footer">Kepala Dinas Perdagangan & Perindustrian Konawe Utara</div>
                                </blockquote>

                                <p>
                                    Data menunjukkan bahwa kapasitas produksi IKM olahan kakao meningkat hingga 30%
                                    dibandingkan tahun sebelumnya.
                                    Selain itu, beberapa pelaku usaha telah berhasil menembus pasar regional dengan
                                    membawa identitas lokal Konawe Utara.
                                </p>

                                <p>
                                    Pemerintah terus berkomitmen memberikan dukungan agar olahan kakao Konawe Utara
                                    mampu bersaing di pasar nasional dan internasional.
                                </p>

                                <div class="tags">
                                    <h5>Tags</h5>
                                    <a href="#">IKM</a>,
                                    <a href="#">Kakao</a>,
                                    <a href="#">UMKM</a>,
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
    name: "BeritaIKMKakao",
})
</script>
