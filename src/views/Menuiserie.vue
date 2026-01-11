<script setup lang="ts">
import PageServiceTemplate from '@/components/templates/PageServiceTemplate.vue'
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'

import imageMenuiserie from '@/assets/images/test.webp'
</script>

<template>
 
  <PageServiceTemplate
    title="Nos prestations en aménagement intérieur"
    subtitle="Un accompagnement professionnel pour tous vos agencements intérieurs"
    description="À la recherche d’un menuisier sur La Rochelle ou ses environs ? Alcove vous accompagne dans tous vos projets de menuiserie d’agencement intérieur sur mesure, pour les particuliers comme pour les professionnels."
    :bullets="[
      'Conception sur mesure',
      'Fabrication locale',
      'Pose soignée'
    ]"
    :image="imageMenuiserie"
  >

      <UIButtonDevis />
      <UIButtonPhone />

  </PageServiceTemplate>
</template>
