<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="rencana-strategis">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>KOMODITI</h2>
                <p>Berikut adalah Informasi Komoditi di Konawe Utara yang telah didata oleh Dinas Perdangangan dan
                  Perindustrian Konawe Utara, data yang ditampilkan adalah data terbaru sehingga data yang ditampilkan
                  dapat diunduh oleh masyarakat sekitar untuk menjadi referensi
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="feature-block text-center aio-margin-table">
                <table class="table table-striped table-borderless table-hover">
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">No.</th>
                      <th scope="col" class="text-center">Nama Komoditi</th>
                      <th scope="col" class="text-center">Satuan</th>
                      <th scope="col" class="text-center">Harga (Rp)</th>
                      <th scope="col" class="text-center">Ketersediaan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in dataKomoditi" :key="index">
                      <td class="text-center">{{ index + 1 }}</td>
                      <td class="text-center">{{ item.nama_komoditi }}</td>
                      <td class="text-center">{{ item.satuan }}</td>
                      <td class="text-center">{{ item.harga.toLocaleString() }}</td>
                      <td class="text-center">
                        <span class="badge aio-p-6"
                          :class="`${item.ketersediaan === 'Tersedia' ? 'aio-badge-success' : 'aio-badge-warning'}`">
                          {{ item.ketersediaan }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  data() {
    return {
      dataKomoditi: [
        { nama_komoditi: "Beras", satuan: "Kg", harga: 12000, ketersediaan: "Tersedia" },
        { nama_komoditi: "Jagung", satuan: "Kg", harga: 6000, ketersediaan: "Tersedia" },
        { nama_komoditi: "Kakao", satuan: "Kg", harga: 28000, ketersediaan: "Tersedia" },
        { nama_komoditi: "Ikan Segar (Tuna)", satuan: "Kg", harga: 35000, ketersediaan: "Tersedia" },
        { nama_komoditi: "Rumput Laut", satuan: "Kg", harga: 15000, ketersediaan: "Tersedia" },
        { nama_komoditi: "Sapi Potong", satuan: "Ekor", harga: 12000000, ketersediaan: "Terbatas" }
      ]
    }
  }
})
</script>
