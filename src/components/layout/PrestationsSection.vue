<script setup lang="ts">
import UIPrestationCard from '@/components/ui/UIPrestationCard.vue'
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'

import img1 from '@/assets/images/test.webp'
import img2 from '@/assets/images/test1.webp'
import img3 from '@/assets/images/test2.webp'
import img4 from '@/assets/images/test3.webp'
import img5 from '@/assets/images/test4.webp'

const prestations = [
  { title: 'Menuiserie', image: img1, link: '/menuiserie' },
  { title: 'Charpente', image: img2, link: '/charpente' },
  { title: 'Extension bois', image: img3, link: '/extension' },
  { title: 'Escalier', image: img4, link: '/escalier' },
  { title: 'Cuisine', image: img5, link: '/cuisine' },
]
</script>

<template>
  <section class="w-full bg-white py-20">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

      <h2 class="text-center text-[32px] font-bold text-[#4b4b4b] mb-14">
        Nos prestations
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <UIPrestationCard
          v-for="item in prestations"
          :key="item.title"
          :title="item.title"
          :image="item.image"
          :to="item.link"
        />

        <div
          class="
            bg-[#8b6a3e]
            rounded-2xl
            shadow-[0_15px_40px_rgba(0,0,0,0.15)]
            text-white
            p-8
            flex
            flex-col
            items-center
            justify-center
            gap-6
          "
        >
          <h3 class="text-[22px] font-semibold text-center">
            Je prends contact !
          </h3>

          <UIButtonDevis variant="white" />
          <UIButtonPhone variant="white" />
        </div>

      </div>
    </div>
  </section>
</template>
