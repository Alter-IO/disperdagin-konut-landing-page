<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="peraturan-daerah">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>PERATURAN DAERAH</h2>
                <p>
                  Daftar Peraturan Daerah yang telah dibuat oleh pejabat terkait di Konawe Utara.
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
                      <th scope="col" class="text-center">Nama Dokumen</th>
                      <th scope="col" class="text-center">Unduh</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in dataTable" :key="index">
                      <td class="text-center">{{ index + 1 }}</td>
                      <td>{{ data.nama_dokumen }}</td>
                      <td class="text-center">
                        <a :href="data.url" class="btn aio-btn-download" target="_blank">
                          Unduh
                        </a>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "PeraturanDaerah",
  data() {
    return {
      dataTable: [
        { nama_dokumen: "Peraturan Daerah Nomor 1 Tahun 2025", url: "#" },
        { nama_dokumen: "Peraturan Daerah Nomor 2 Tahun 2025", url: "#" },
        { nama_dokumen: "Peraturan Daerah Nomor 3 Tahun 2025", url: "#" },
        { nama_dokumen: "Peraturan Daerah Nomor 4 Tahun 2025", url: "#" },
        { nama_dokumen: "Peraturan Daerah Nomor 5 Tahun 2025", url: "#" },
      ]
    };
  }
});
</script>
