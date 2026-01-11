<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoAlcove from '@/assets/alcove.webp'

import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'

const isOpen = ref(false)
</script>

<template>
  <header class="w-full bg-white border-b border-gray-100 relative z-50">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

      <div class="h-[70px] flex items-center justify-between">

        <RouterLink to="/" class="flex items-center">
          <img :src="logoAlcove" alt="Alcove" class="h-[48px]" />
        </RouterLink>

        <div class="hidden lg:flex items-center gap-4">
          <UIButtonDevis />
          <UIButtonPhone />
        </div>

        <button
          class="lg:hidden text-2xl"
          @click="isOpen = true"
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>
      </div>

      <nav
        class="hidden lg:flex justify-center h-[55px] items-center gap-7
               text-[15px] font-medium text-[#5b4a2f]"
      >
        <RouterLink to="/" class="font-semibold text-[#6b4a1f]">Accueil</RouterLink>
        <RouterLink to="/a-propos">Qui sommes-nous ?</RouterLink>
        <RouterLink to="/menuiserie">Menuiserie bois</RouterLink>
        <RouterLink to="/charpente">Charpente</RouterLink>
        <RouterLink to="/extension">Extension</RouterLink>
        <RouterLink to="/escalier">Escalier</RouterLink>
        <RouterLink to="/cuisine">Cuisine</RouterLink>
        <RouterLink to="/atelier">Notre atelier</RouterLink>
        <RouterLink to="/realisations">Nos réalisations</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 z-40"
      @click="isOpen = false"
    ></div>

    <aside
      class="fixed top-0 left-0 h-full w-[85%] max-w-[320px]
             bg-white z-50 transform transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="h-[70px] flex items-center justify-between px-6 border-b">
        <span class="font-semibold text-[#4b320f]">Menu</span>
        <button @click="isOpen = false" class="text-xl">✕</button>
      </div>

      <nav class="flex flex-col divide-y">
        <RouterLink to="/" @click="isOpen=false" class="menu-item">Accueil</RouterLink>
        <RouterLink to="/a-propos" @click="isOpen=false" class="menu-item">Qui sommes-nous ?</RouterLink>
        <RouterLink to="/menuiserie" @click="isOpen=false" class="menu-item">Menuiserie bois</RouterLink>
        <RouterLink to="/charpente" @click="isOpen=false" class="menu-item">Charpente</RouterLink>
        <RouterLink to="/escalier" @click="isOpen=false" class="menu-item">Escalier</RouterLink>
        <RouterLink to="/extension" @click="isOpen=false" class="menu-item">Extension</RouterLink>
        <RouterLink to="/cuisine" @click="isOpen=false" class="menu-item">Cuisine</RouterLink>
        <RouterLink to="/atelier" @click="isOpen=false" class="menu-item">Notre atelier</RouterLink>
        <RouterLink to="/realisations" @click="isOpen=false" class="menu-item">Nos réalisations</RouterLink>
        <RouterLink to="/contact" @click="isOpen=false" class="menu-item font-semibold">
          Contact
        </RouterLink>
      </nav>

      <div class="mt-auto p-6 border-t flex flex-col gap-3">
        <UIButtonDevis full />
        <UIButtonPhone full />
      </div>
    </aside>
  </header>
</template>

<style scoped>
.menu-item {
  padding: 14px 24px;
  color: #5b4a2f;
}
.menu-item:hover {
  background: #f6f1e5;
}
</style>
