<script setup lang="ts">


import PageServiceTemplate from '@/components/templates/PageServiceTemplate.vue'
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'

import imageEscalier from '@/assets/images/test4.webp'
</script>

<template>

  <PageServiceTemplate
    title="Escaliers sur mesure"
    subtitle="Un accompagnement professionnel pour vos projets d’escaliers en bois"
    description="Spécialistes de la conception et de la pose d’escaliers en bois sur La Rochelle et ses environs, Alcove vous accompagne à chaque étape de votre projet. De l’étude à la réalisation, nous concevons des escaliers sur mesure, adaptés à votre espace et à votre style."
    :bullets="[
      'Escaliers droits ou tournants',
      'Conception sur mesure',
      'Pose soignée et durable'
    ]"
    :image="imageEscalier"
  >
      <UIButtonDevis />
      <UIButtonPhone />
  </PageServiceTemplate>
</template>
