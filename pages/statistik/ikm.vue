<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="rencana-strategis">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>IKM BELUM FIX</h2>
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
                      <th scope="col" class="text-center">Deskripsi</th>
                      <th scope="col" class="text-center">Jenis Usaha</th>
                      <th scope="col" class="text-center">Kelurahan/Desa</th>
                      <th scope="col" class="text-center">Author</th>
                      <th scope="col" class="text-center">Dibuat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(ikm, index) in ikmTable" :key="ikm.id">
                      <td class="text-center">{{ index + 1 }}</td>
                      <td class="text-center">{{ ikm.description }}</td>
                      <td class="text-center">{{ ikm.business_type }}</td>
                      <td class="text-center">{{ ikm.village_id }}</td>
                      <td class="text-center">{{ ikm.author }}</td>
                      <td class="text-center">
                        {{ new Date(ikm.created_at).toLocaleDateString() }}
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
import Banner from '@/components/atoms/Banner.vue'

export default defineComponent({
  components: { Banner },
  data() {
    return {
      users: [],
      ikmTable: [
        {
          id: "1",
          description: "Produksi Kerajinan Rotan",
          village_id: "Asera",
          business_type: "Kerajinan",
          created_at: "2024-08-01T10:00:00Z",
          updated_at: null,
          author: "Dinas Perindustrian",
          deleted_at: null
        },
        {
          id: "2",
          description: "Usaha Olahan Kakao",
          village_id: "Andowia",
          business_type: "Makanan/Minuman",
          created_at: "2024-08-10T10:00:00Z",
          updated_at: null,
          author: "Dinas Perdagangan",
          deleted_at: null
        },
        {
          id: "3",
          description: "Pengolahan Rumput Laut",
          village_id: "Bende",
          business_type: "Kelautan",
          created_at: "2024-08-15T10:00:00Z",
          updated_at: null,
          author: "Disperindag Konut",
          deleted_at: null
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