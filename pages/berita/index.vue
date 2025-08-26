<template>
  <div class="wrapper">
    <Banner />
    <div class="aio-section">
      <section id="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>BERITA</h2>
                <p>
                  Temukan Berita atau Pengumuman Penting dari Dinas Perdagangan dan Perindustrian Konawe Utara
                </p>
              </div>

              <div id="blog-post" class="row">
                <div v-for="(berita, index) in beritaList" :key="berita.id"
                  class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div class="block">
                    <img :src="berita.image" alt="berita.title" class="img img-responsive aio-no-padding" />
                    <div class="content">
                      <h4>
                        <RouterLink :to="`/berita/${berita.id}`">{{ berita.title }}</RouterLink>
                      </h4>
                      <small>By {{ berita.author }} / {{ formatDate(berita.date) }}</small>
                      <RouterLink :to="`/berita/${berita.id}`" class="btn btn-read">
                        Read More
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end blog-post -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BeritaPage'
})

interface Berita {
  id: number
  title: string
  author: string
  date: string
  image: string
  content: string
}

const beritaList = ref<Berita[]>([
  {
    id: 1,
    title: "PEMDA Konawe Utara Resmikan Dua Pasar Rakyat untuk Dongkrak Ekonomi dan Atasi Kemiskinan, Inflasi, serta Stunting",
    author: "Admin",
    date: "2024-08-15T09:00:00Z",
    image: "/img/berita_1.jpg",
    content: "Menghadapi tantangan dunia kedepan seperti inflasi..."
  },
  {
    id: 2,
    title: "PEMDA Konawe Utara Gelar Pasar Murah di Kecamatan Sawa",
    author: "Admin",
    date: "2024-08-20T10:30:00Z",
    image: "/img/berita_2.jpg",
    content: "Guna menekan angka kemiskinan ekstrim..."
  },
  {
    id: 3,
    title: "PEMDA Konawe Utara Gelar Pasar Murah untuk Masyarakat",
    author: "Disperindag",
    date: "2024-09-01T12:00:00Z",
    image: "/img/berita_3.jpg",
    content: "Dalam rangka menekan inflasi, Pemerintah Daerah (Pemda) Konawe Utara (Konut)..."
  },
])

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}
</script>
