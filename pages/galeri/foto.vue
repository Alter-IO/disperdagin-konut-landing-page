<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="foto">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>GALERI FOTO</h2>
                <p>Memuat Foto - Foto yang telah diambil oleh Dinas Perdagangan Dan Perindustrian
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div align="center">
              <button class="filter-button" @click="filter('all')"
                :class="{ active: currentFilter === 'all' }">All</button>
              <button v-for="data in kategori" key="data.id" class="filter-button" @click="filter(data.id)"
                :class="{ active: currentFilter === data.id }">{{ data.kategori }}</button>
              <h2>Data tidak ditemukan</h2>
              <!-- <button class="btn btn-default filter-button" data-filter="all">All</button>
                <button class="btn btn-default filter-button" data-filter="63ce988b3430a">All</button>
                <button v-for="data in kategori" :key="data.id" class="btn btn-default filter-button" data-filter="63ce988b3430a">{{data.kategori}}</button> -->
            </div>
            <div v-for="data in filteredItems" :key="data.id" v-bind:tabindex="data.id"
              class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter wow fadeInUp"
              :class="data.id_kategori_foto" data-wow-delay=".3s">
              <img v-if="data.src" :src="'data:image/jpg;base64,' + data.src" class="img-responsive">
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
  data() {
    return {
      users: [],
      dataTable: [{
        author: "",
        deskripsi: "",
        id_kategori_foto: "",
        id: "",
        judul: "",
        src: ""
      }],
      kategori: [
        {
          id: "",
          kategori: ""
        }
      ],
      currentFilter: "all",
    }
  },
  computed: {
    filteredItems(): any {
      if (this.currentFilter === "all") {
        return this.dataTable;
      } else {
        return this.dataTable.filter((item) => item.id_kategori_foto === this.currentFilter);
      }
    },
  },
  methods: {
    async getData() {
      await this.$axios
        .get(`${process.env.API_URL}/foto`)
        .then((res) => {
          this.dataTable = res.data.data;
        })
    },
    async getKategori() {
      await this.$axios
        .get(`${process.env.API_URL}/kategori_foto`)
        .then((res) => {
          this.kategori = res.data.data;
        })
    },
    filter(filter: any) {
      this.currentFilter = filter;
      console.log(this.currentFilter);
    }
  },
  mounted() {
    this.getKategori()
    this.getData()
  }
})
</script>

<style>
.gallery-title {
  font-size: 36px;
  color: #42B32F;
  text-align: center;
  font-weight: 500;
  margin-bottom: 70px;
}

.gallery-title:after {
  content: "";
  position: absolute;
  width: 7.5%;
  left: 46.5%;
  height: 45px;
  border-bottom: 1px solid #5e5e5e;
}

.filter-button {
  font-size: 18px;
  border: 1px solid #42B32F;
  border-radius: 5px;
  text-align: center;
  color: #42B32F;
  margin: 0 2px 30px 2px;

}

.filter-button:hover {
  font-size: 18px;
  border: 1px solid #42B32F;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  background-color: #42B32F;

}

.btn-default:active .filter-button:active {
  background-color: #42B32F;
  color: white;
}

.port-image {
  width: 100%;
}

.gallery_product {
  margin-bottom: 30px;
}
</style>