<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="aperaturan-daerah">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>PERATURAN KEPALA SKPD</h2>
                <p>Memuat tentang Peraturan Kepala SKPD yang berlaku
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
                    <tr v-for="data, index in dataTable" :key="index">
                      <td>{{index + 1}}</td>
                      <td>{{data.nama_dokumen}}</td>
                      <td class="text-center">
                        <button class="btn aio-btn-download">Unduh</button>                        
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
  data(){
    return {
      users: [],
      dataTable: [
        {
          nama_dokumen: 'dokumen 1',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 2',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 3',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 4',
          url: '#'
        },
        {
          nama_dokumen: 'dokumen 5',
          url: '#'
        },
      ]
    }
  },
  computed:{
  },
  mounted(){
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