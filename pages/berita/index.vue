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
    title: "Pengembangan Pasar Asera",
    author: "Admin",
    date: "2024-08-15T09:00:00Z",
    image: "/img/blog/blog-1.jpg",
    content: "Pemkab Konawe Utara meresmikan pemanfaatan kembali Pasar Asera..."
  },
  {
    id: 2,
    title: "IKM Olahan Kakao Naik Produksi",
    author: "Admin",
    date: "2024-08-20T10:30:00Z",
    image: "/img/blog/blog-2.jpg",
    content: "Produk IKM berbasis kakao dari Kecamatan Andowia mulai dipasarkan..."
  },
  {
    id: 3,
    title: "Gerakan Pangan Murah",
    author: "Disperindag",
    date: "2024-09-01T12:00:00Z",
    image: "/img/blog/blog-3.jpg",
    content: "Polres Konawe Utara bekerjasama dengan Disperindag menggelar pasar murah..."
  },
  {
    id: 4,
    title: "Pelatihan IKM Rumput Laut",
    author: "Dinas Perindustrian",
    date: "2024-09-05T14:00:00Z",
    image: "/img/blog/blog-4.jpg",
    content: "Pelatihan diberikan untuk meningkatkan kualitas olahan rumput laut..."
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
