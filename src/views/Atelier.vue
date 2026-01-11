<script setup lang="ts">


import PageServiceTemplate from '@/components/templates/PageServiceTemplate.vue'
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'

import imageAtelier from '@/assets/alcove.webp'
</script>

<template>
 

  <PageServiceTemplate
    title="Notre atelier de fabrication"
    subtitle="Un savoir-faire artisanal au cœur de chaque réalisation"
    description="C’est au sein de notre atelier que prennent vie vos projets. De la sélection des essences de bois à la fabrication finale, Alcove conçoit chaque pièce avec exigence et précision. Notre atelier nous permet de garantir une qualité constante, des finitions soignées et des réalisations entièrement sur mesure."
    :bullets="[
      'Fabrication locale et artisanale',
      'Choix des essences de bois',
      'Maîtrise complète du projet'
    ]"
    :image="imageAtelier"
  >
      <UIButtonDevis />
      <UIButtonPhone />
  </PageServiceTemplate>
</template>
