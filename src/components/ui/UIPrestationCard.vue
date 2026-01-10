<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  image: string
  to: string
}>()
</script>

<template>
  <RouterLink
    :to="to"
    class="
      group
      relative
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]
      cursor-pointer
      block
    "
  >
    <div class="overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="
          w-full
          h-[220px]
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </div>

    <div class="p-6 flex justify-center items-center">
      <h3
        class="
          text-[18px]
          font-semibold
          text-[#8b6a3e]
          tracking-wide
        "
      >
        {{ title }}
      </h3>
    </div>
  </RouterLink>
</template>
