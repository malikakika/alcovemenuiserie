<script setup lang="ts">
import UIPrestationDetailCard from '@/components/ui/UIPrestationDetailCard.vue'

const cards = [
  {
    title: 'Cuisines sur mesure',
    text: `
      À la recherche d’un menuisier sur <strong>La Rochelle</strong> ?
      Nous vous proposons les services d’un professionnel du bois de
      <strong>plus de 20 ans d’expérience</strong> pour tous vos projets
      d’aménagement intérieur et extérieur.
    `,
  },
  {
    title: 'Des solutions à vos projets d’agencement',
    text: `
      Que vous souhaitiez faire poser un escalier ou changer le plan de
      travail de votre cuisine, faites le choix d’un
      <strong>Compagnon du Devoir</strong>.
      Notre menuisier près de l’île de Ré trouve des solutions à toutes vos demandes.
    `,
  },
  {
    title: 'Une charpente durable pour vos bâtiments',
    text: `
      Pour un aménagement de combles ou une rénovation de toit,
      contactez notre équipe de <strong>charpentiers à La Rochelle</strong>.
      Nous concevons des infrastructures durables et solides
      pour tout type de bâtiment.
    `,
  },
  {
    title: 'L’ossature bois pour un agrandissement de maison',
    text: `
      Faire le choix d’une extension de maison à La Rochelle,
      c’est gagner en mètres carrés sans déménager.
      Optez pour une extension à ossature bois
      <strong>rapide à installer et écologique</strong>.
    `,
  },
  {
    title: 'Pose et conception d’escalier en bois sur mesure',
    text: `
      Spécialistes de la création sur mesure d’<strong>escaliers en bois</strong>,
      nous vous accompagnons à chaque étape,
      de la conception à la pose dans vos locaux ou votre habitation.
    `,
  },
  {
    title: 'Création de tout type de meubles de cuisine en bois',
    text: `
      Cuisiniste à <strong>La Rochelle</strong>, nous concevons dans notre atelier
      placards, plans de travail et meubles sur mesure.
      La garantie d’une cuisine <strong>entièrement à votre goût</strong> !
    `,
  },
]
</script>

<template>
  <section class="bg-[#faf8f3] py-16">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

      <h2
        class="
          text-center
          text-[34px]
          font-bold
          text-[#2a2a2a]
          mb-16
        "
      >
        Nos savoir-faire en menuiserie
      </h2>

      <div
        class="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        <UIPrestationDetailCard
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :text="card.text"
        />
      </div>

    </div>
  </section>
</template>
