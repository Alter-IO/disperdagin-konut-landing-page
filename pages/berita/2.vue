<template>
    <div class="wrapper">
        <div class="aio-section">
            <section id="berita">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h3>Pemda Konawe Utara Gelar Pasar Murah di Kecamatan Sawa</h3>
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
                                    <img class="img-responsive" src="@/public/img/berita_2.jpg"
                                        alt="Pemda Konawe Utara Gelar Pasar Murah di Kecamatan Sawa" />
                                </div>
                            </div>
                            <div class="block">
                                <p>
                                    Guna menekan angka kemiskinan ekstrim, stunting dan inflasi, Dinas Perindustrian dan
                                    Perdagangan (Disperindag) Kabupaten Konawe Utara baru-baru ini, menggelar pasar
                                    murah di Kecamatan Sawa, dibuka oleh Bupati Konut Ruksamin

                                    Bupati Konut Ruksamin menjelaskan, pasar murah ini digelar di seluruh kecamatan
                                    terdiri 13 kecamatan se Konawe Utara yang sebelumnya juga telah dilaksanakan di
                                    Kecamatan Andowia, Lasolo, Molawe, Wawolesea, Lembo, dan kini di Kecamatan Sawa.

                                    Dalam kesempatan itu, Ruksamin juga menyerahkan bantuan 100 paket sembako kepada
                                    masyarakat, sekaligus berharap pelaksanaan pasar murah ini dapat menekan angka
                                    kemiskinan ekstrim, stunting dan inflasi.

                                    “Pemda akan terus melakukan kegiatan pasar murah ini sebagai upaya mengantisipasi
                                    terjadinya inflasi akibat musim kemarau,”ungkap Ruksamin.

                                    Ruksamin juga mengimbau para kepala desa, agar mengarahkan masyarakatnya untuk
                                    pemanfaatkan lahan pekarangan dengan menanam tanaman yang cocok dimusim kemarau.

                                    Sementara itu, Kadis Disperindag Konut, Jumadil menjelaskan, dalam kegiatan pasar
                                    murah guna pengendalian inflasi serta stabilisasi harga barang kebutuhan pokok,
                                    disiapkan yakni beras, telur, gula, tepung, susu, Indomie goreng, Indomie kaldu,
                                    Intermie goreng, bawang merah dan bawang putih.

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
                                                PEMDA Konawe Utara Resmikan Dua Pasar Rakyat untuk Dongkrak Ekonomi dan
                                                Atasi Kemiskinan, Inflasi, serta Stunting
                                            </RouterLink>
                                            Kamis - 15 Agustus 2024
                                        </li>
                                        <li>
                                            <RouterLink class="items" to="/berita/2">
                                                PEMDA Konawe Utara Gelar Pasar Murah di Kecamatan Sawa
                                            </RouterLink>
                                            Senin - 10 Juli 2024
                                        </li>
                                        <li>
                                            <RouterLink class="items" to="/berita/3">
                                                PEMDA Konawe Utara Gelar Pasar Murah untuk Masyarakat
                                            </RouterLink>
                                            Rabu - 28 Juni 2024
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
