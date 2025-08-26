<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="rencana-strategis">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>LOKASI PASAR</h2>
                <p>Dantes remained confused and silent by this explanation of the <br> thoughts which had unconsciously
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
                      <th scope="col" class="text-center">Nama Pasar</th>
                      <th scope="col" class="text-center">Penarikan Retribusi</th>
                      <th scope="col" class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="data, index in dataTable" :key="index">
                      <td class="text-center">{{ index + 1 }}</td>
                      <td class="text-left">{{ data.nama_pasar }}</td>
                      <td class="text-center">{{ data.status_retribusi ? 'Sudah Ditarik' : 'Belum Ditarik' }}</td>
                      <td class="text-center">
                        <span class="badge aio-p-6"
                          :class="`${data.status ? 'aio-badge-success' : 'aio-badge-danger'}`">{{ data.status ? 'Aktif'
                            : 'Tidak Aktif' }}</span>
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
import Banner from '@/components/atoms/Banner.vue'
import { defineComponent } from "vue";

export default defineComponent({
  components: { Banner },
  data() {
    return {
      users: [],
      dataTable: [
        {
          nama_pasar: 'Pasar Asera',
          kelurahan: 'Asera',
          status_retribusi: false,
          status: true
        },
        {
          nama_pasar: 'Pasar Bende',
          kelurahan: 'Bende',
          status_retribusi: false,
          status: true
        },
        {
          nama_pasar: 'Pasar Kabupaten Konawe Utara (Andowia)',
          kelurahan: 'Andowia',
          status_retribusi: false,
          status: true
        },
        {
          nama_pasar: 'Pasar Murah Polres (program distribusi sembako)',
          kelurahan: 'Berbagai lokasi (13 kecamatan)',
          status_retribusi: false,
          status: false
        }
      ]
    }
  },
  computed: {
  },
  mounted() {
    // await this.$axios
    // .get("https://therichpost.com/testjsonapi/users/")
    // .then((res)=>
    // {
    //   this.users = res.data;
    //   console.log(this.users);
    // })
  }
})
</script>