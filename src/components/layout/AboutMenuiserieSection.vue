<script setup lang="ts">
import aboutImage from '@/assets/alcove.webp'
import alcoveImage from '@/assets/alcove.webp'
</script>

<template>
  <section class="relative w-full bg-white ">
    <div
      class="
        max-w-[1400px]
        mx-auto
        px-4 sm:px-8 lg:px-12
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-20
        items-center
      "
    >
      <div class="relative">

        <span class="block w-14 h-[2px] bg-[#6b4a1f] mb-6"></span>

        <h2
          class="
            text-[30px]
            sm:text-[36px]
            font-bold
            text-[#2f2f2f]
            leading-tight
            mb-8
          "
        >
          Vos menuiseries d’agencement<br />
          par un professionnel à l’écoute
        </h2>

        <p class="text-[15px] text-[#4b4b4b] leading-[1.8] mb-5">
          Vous rêvez d’un dressing dans votre chambre à coucher ?
          D’une cuisine parfaitement pensée pour votre quotidien ?
          <strong>Alcove</strong> intervient sur
          <strong>La Rochelle</strong> et ses environs pour des projets
          entièrement sur mesure.
        </p>

        <p class="text-[15px] text-[#4b4b4b] leading-[1.8] mb-10">
          Tout notre mobilier est fabriqué directement dans notre atelier
          par des professionnels qualifiés, avec une exigence constante
          de qualité et de durabilité.
        </p>

        <div class="flex items-center gap-6">
          <img
            :src="alcoveImage"
            alt="Alcove Menuiserie"
            class="h-[70px] opacity-90"
          />

          <span class="text-sm text-[#6b4a1f] italic">
            Artisan menuisier • Sur mesure
          </span>
        </div>
      </div>

      <div class="relative">

        <div
          class="
            absolute
            -top-6
            -left-6
            w-full
            h-full
            bg-[#f6f1e5]
            rounded-[32px]
            -z-10
          "
        ></div>

        <img
          :src="aboutImage"
          alt="Cuisine sur mesure Alcove"
          class="
            w-full
            h-auto
            rounded-[28px]
            object-cover
            shadow-lg
          "
        />
      </div>
    </div>
  </section>
</template>
