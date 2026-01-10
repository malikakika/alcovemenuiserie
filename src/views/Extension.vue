<script setup lang="ts">
import PageServiceTemplate from '@/components/templates/PageServiceTemplate.vue'
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'
import imageExtension from '@/assets/images/test3.png'
</script>

<template>
  <PageServiceTemplate
    title="Des prestations sur mesure"
    subtitle="Un professionnel de plus de 20 ans d’expérience en ossature bois"
    description="Vous rêvez de mètres carrés en plus sans déménager ? Laissez-vous tenter par un projet d’extension de maison sur La Rochelle ou ses environs. Spécialiste de l’ossature bois dans la région, Alcove conçoit des agrandissements de maison sur mesure afin de répondre à votre besoin d’espace."
    :bullets="[
      'Agrandissement de maison',
      'Extension de maison en bois',
      'Ossature bois'
    ]"
    :image="imageExtension"
  >
      <UIButtonDevis />
      <UIButtonPhone />
  </PageServiceTemplate>
</template>
