<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="rencana-strategis">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>RENCANA STRATEGIS</h2>
                <p>
                  Memperlihatkan Rencana Strategis Dinas Perdagangan dan Perindustrian Konawe Utara.
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
  name: "RencanaStrategis",
  data() {
    return {
      dataTable: [
        { nama_dokumen: "Rencana Strategis 2024-2028", url: "#" },
        { nama_dokumen: "Rencana Strategis Triwulan 1", url: "#" },
        { nama_dokumen: "Rencana Strategis Triwulan 2", url: "#" },
        { nama_dokumen: "Rencana Strategis Triwulan 3", url: "#" },
        { nama_dokumen: "Rencana Strategis Triwulan 4", url: "#" },
      ]
    };
  }
});
</script>
