<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

import img1 from '@/assets/images/test.webp'
import img2 from '@/assets/images/test1.webp'
import img3 from '@/assets/images/test2.webp'
import img4 from '@/assets/images/test3.webp'
import img5 from '@/assets/images/test4.webp'
import img6 from '@/assets/images/test5.webp'

const images = [img1, img2, img3, img4, img5, img6]

const carouselRef = ref<HTMLElement | null>(null)
let intervalId: number | undefined

const scrollNext = () => {
  if (!carouselRef.value) return
  carouselRef.value.scrollBy({ left: 344, behavior: 'smooth' })
}

const scrollPrev = () => {
  if (!carouselRef.value) return
  carouselRef.value.scrollBy({ left: -344, behavior: 'smooth' })
}

onMounted(() => {
  intervalId = window.setInterval(scrollNext, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="w-full bg-white py-20">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

      <h2 class="text-center text-[32px] font-bold text-[#4b4b4b] mb-12">
        Nos réalisations
      </h2>

      <div class="relative">

        <button
          @click="scrollPrev"
          class="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10
                 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center
                 hover:bg-gray-100"
        >
          ‹
        </button>

        <div
          ref="carouselRef"
          class="carousel"
        >
          <div
            v-for="(img, index) in images"
            :key="index"
            class="carousel-item"
          >
            <img :src="img" alt="Réalisation Alcove" />
          </div>
        </div>

        <button
          @click="scrollNext"
          class="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10
                 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center
                 hover:bg-gray-100"
        >
          ›
        </button>

      </div>

      <div class="flex justify-center mt-14">
        <RouterLink
          to="/realisations"
          class="bg-[#6b4a1f] text-white px-8 py-3 rounded-md text-sm font-medium hover:opacity-90"
        >
          Découvrez plus de réalisations +
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.carousel {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  flex: 0 0 auto;
  width: 320px;
  scroll-snap-align: start;
}

.carousel-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 22px;
}
</style>
