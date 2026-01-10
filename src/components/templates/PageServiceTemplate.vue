<script setup lang="ts">
defineSlots<{
  actions?: () => any
}>()

defineProps<{
  title: string
  subtitle?: string
  description: string
  bullets?: string[]
  image?: string
}>()
</script>

<template>
  <section class="w-full bg-white py-20">
    <div
      class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12
             grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
    >

      <div>
        <h1 class="text-[34px] font-extrabold text-[#2a2a2a] mb-4">
          {{ title }}
        </h1>

        <h2
          v-if="subtitle"
          class="text-[20px] font-bold text-[#6b4a1f] mb-4"
        >
          {{ subtitle }}
        </h2>

        <p class="text-[15px] text-[#3a3a3a] leading-relaxed mb-6">
          {{ description }}
        </p>

        <ul v-if="bullets?.length" class="space-y-3 mb-8">
          <li
            v-for="item in bullets"
            :key="item"
            class="flex items-center gap-3 text-[#4b320f]"
          >
            <span class="font-bold text-[#6b4a1f]">✓</span>
            {{ item }}
          </li>
        </ul>

        <div class="flex gap-4 flex-wrap">
          <slot name="actions" />
        </div>
      </div>

      <div v-if="image" class="relative">
        <img
          :src="image"
          alt=""
          class="rounded-[28px] shadow-xl object-cover w-full"
        />
      </div>

    </div>
  </section>
</template>
