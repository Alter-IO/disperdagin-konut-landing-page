<template>
    <div class="wrapper">
        <div class="aio-section">
            <section id="berita">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h3>PEMDA Konawe Utara Gelar Pasar Murah untuk Masyarakat</h3>
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
                                    <img class="img-responsive" src="@/public/img/berita_3.jpg"
                                        alt="PEMDA Konawe Utara Gelar Pasar Murah untuk Masyarakat" />
                                </div>
                            </div>
                            <div class="block">
                                <p>
                                    Dalam rangka menekan inflasi, Pemerintah Daerah (Pemda) Konawe Utara (Konut),
                                    melalui Dinas Perindustrian dan Perdagangan (Disperindag) menggelar pasar murah.
                                    Pasar murah yang dilaksanakan, diperuntukkan untuk masyarakat diwilayah itu, sebagai
                                    upaya Pemerintah Konut menangani dan menekan inflasi.
                                    Sekertaris Dinas (Sekdis) Disperindag Konut, Indra Thalib, mengatakan, program pasar
                                    murah ini diselenggarakan di 13 kecamatan didaerah itu.
                                    Menurut Indra Thalib, pasar murah yang digelar Pemda Konut menawarkan berbagai macam
                                    kebutuhan sembilan 9 bahan pokok dengan harga dibawah harga pasar pada umumnya.
                                    “Seperti beras 10 kilo gram, harga pasar Rp130 ribu, pasar murah dijual seharga Rp90
                                    ribu,”ungkap Indra Thalib.
                                    Pasar murah Disperindag Konut ini, terbuka untuk umum, dengan menyediakan stok
                                    sembako tidak terbatas untuk memenuhi kebutuhan masyarakat.
                                    “Pasar murah sejauh ini telah dilaksanakan pada 4 kecamatan diantaranya, Kecamatan
                                    Andowia, Lasolo, Molawe dan Wawolesea,”jelas Indra.
                                    Untuk bisa mendapatkan kebutuhan yang diinginkan dalam pasar murah itu, masyarakat
                                    cukup mengambil kupon sesuai jenis sembako kemudian membeli sesuai jenisnya.
                                    Terpisah, Wakil Bupati Konut, Abu Haera mengungkapkan, pasar murah yang digelar
                                    tersebut, merupakan wujud visi misi Konasara untuk memberikan pelayanan kepada
                                    masyarakat, terutama dalam penanganan inflasi.
                                    Menurutnya, pelayanan pemerintah tersebut, tidak hanya khususnya pada penanganan
                                    inflasi, tetapi juga untuk menurunkan angka stunting dan kemiskinan ekstrim dengan
                                    maksimalkan program yang bersentuhan langsung kepada masyarakat.
                                    Program pasar murah tersebut, juga melibatkan, jajaran Polres Konut, Kodim Konut dan
                                    Forkopimda yang dirangkaikan pembagian sembako gratis untuk 100 kepala keluarga
                                    kategori program kemiskinan ekstrim.


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
    name: "BeritaPanganMurah",
})
</script>
