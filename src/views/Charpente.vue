<script setup lang="ts">
import PageServiceTemplate from '@/components/templates/PageServiceTemplate.vue'
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'
import imageCharpente from '@/assets/images/test2.webp'

</script>

<template>

  <PageServiceTemplate
    title="Nos services en charpente"
    subtitle="Une charpente de qualité par un professionnel qualifié"
    description="Nous mettons à la disposition des particuliers et professionnels de la région de La Rochelle une équipe de charpentiers expérimentés. Qu’il s’agisse de la fabrication ou de la pose de charpente traditionnelle ou à fermettes, nous garantissons solidité et esthétique à tous vos bâtiments. Contactez l’entreprise Alcove du lundi au vendredi pour un devis gratuit."
    :bullets="[
      'Conception',
      'Pose',
      'Rénovation'
    ]"
    :image="imageCharpente"
  >
      <UIButtonDevis />
      <UIButtonPhone />
  </PageServiceTemplate>
</template>
