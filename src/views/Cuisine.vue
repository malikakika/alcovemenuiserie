<script setup lang="ts">


import PageServiceTemplate from '@/components/templates/PageServiceTemplate.vue'
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'

import imageCuisine from '@/assets/images/test5.png'
</script>

<template>

  <PageServiceTemplate
    title="Une cuisine sur mesure"
    subtitle="Faites le choix d’une cuisine en bois entièrement sur mesure"
    description="Vous aménagez votre maison et souhaitez une cuisine durable et résistante ? Cuisiniste à La Rochelle, Alcove conçoit pour vous des cuisines en bois entièrement sur mesure. Nous adaptons chaque élément selon vos envies, vos usages et les contraintes de votre espace."
    :bullets="[
      'Plans de travail sur mesure',
      'Crédences personnalisées',
      'Façades et caissons en bois'
    ]"
    :image="imageCuisine"
  >
      <UIButtonDevis />
      <UIButtonPhone />
  </PageServiceTemplate>
</template>
