<script setup lang="ts">
import { ref } from 'vue'

import img1 from '@/assets/images/test.webp'
import img2 from '@/assets/images/test1.webp'
import img3 from '@/assets/images/test2.webp'
import img4 from '@/assets/images/test3.webp'
import img5 from '@/assets/images/test4.webp'
import img6 from '@/assets/images/test5.webp'

const images = [img1, img2, img3, img4, img5, img6]

const activeImage = ref<string | null>(null)
</script>

<template>
  <section class="w-full bg-white py-20">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

      <h1 class="text-center text-[34px] font-extrabold text-[#2a2a2a] mb-4">
        Nos réalisations
      </h1>

      <p class="text-center text-[#555] max-w-[700px] mx-auto mb-14">
        Découvrez quelques-unes de nos réalisations en menuiserie,
        charpente, escaliers et cuisines sur mesure.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="(img, index) in images"
          :key="index"
          class="group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          @click="activeImage = img"
        >
          <img
            :src="img"
            alt="Réalisation Alcove"
            class="w-full h-[260px] object-cover
                   transition-transform duration-500
                   group-hover:scale-110"
          />
        </div>

      </div>
    </div>

    <div
      v-if="activeImage"
      class="fixed inset-0 bg-black/80 z-50
             flex items-center justify-center p-6"
      @click="activeImage = null"
    >
      <img
        :src="activeImage"
        class="max-w-full max-h-full rounded-2xl shadow-2xl"
      />
    </div>
  </section>
</template>
