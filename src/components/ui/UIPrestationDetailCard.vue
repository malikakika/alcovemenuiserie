<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div
    class="
      card
      bg-gradient-to-b from-[#f6f1e5] to-white
      border border-[#6b4a1f]
      rounded-[22px]
      p-[36px]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
    "
  >
    <h3
      class="
        text-[20px]
        font-bold
        text-[#6b4a1f]
        mb-4
      "
    >
      {{ title }}
    </h3>

    <p
      class="
        text-[15px]
        leading-[1.7]
        text-[#3a3a3a]
      "
      v-html="text"
    />
  </div>
</template>
