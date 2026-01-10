<script setup lang="ts">
</script>

<template>
  <section class="w-full bg-white">

    <div class="bg-[#fbf4cf] py-24">
      <div class="max-w-[1100px] mx-auto px-6 text-center">
        <h1 class="text-[38px] md:text-[44px] font-extrabold text-[#2a2a2a] mb-6">
          Qui sommes-nous ?
        </h1>
        <p class="text-[17px] text-[#4b4b4b] max-w-[760px] mx-auto leading-relaxed">
          Une entreprise artisanale animée par la passion du bois,  
          le respect du travail bien fait et l’exigence du détail.
        </p>
      </div>
    </div>

    <div class="max-w-[1200px] mx-auto px-6 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <div>
          <h2 class="text-[30px] font-bold text-[#6b4a1f] mb-6">
            Notre histoire
          </h2>
          <p class="text-[15px] text-[#3a3a3a] leading-relaxed">
            Riche d’une expérience de plus de <strong>vingt ans dans le travail du bois</strong>,
            le gérant d’Alcove a fondé son entreprise de menuiserie d’agencement en
            <strong>juin 2023</strong>.
            <br /><br />
            Après avoir été longtemps associé, il a souhaité se lancer à son compte
            afin de faire profiter ses clients de son <strong>professionnalisme</strong>
            et de son <strong>savoir-faire unique</strong>, au service de projets
            entièrement sur mesure.
          </p>
        </div>

        <div class="relative">
          <div class="absolute -top-8 -left-8 w-full h-full bg-[#f6f1e5] rounded-[32px]"></div>
          <div class="relative bg-white rounded-[28px] shadow-xl p-10">
            <p class="text-[16px] font-medium text-[#6b4a1f] leading-relaxed">
              « Chaque projet est une pièce unique, pensée pour durer,
              fabriquée avec exigence et passion. »
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="bg-[#faf8f3] py-24">
      <div class="max-w-[1200px] mx-auto px-6">

        <h2 class="text-center text-[32px] font-bold text-[#2a2a2a] mb-16">
          Nos valeurs
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div class="value-card">
            <h3>Amour du travail bien fait</h3>
            <p>
              Chaque réalisation est pensée avec exigence,
              du premier croquis jusqu’aux finitions.
            </p>
          </div>

          <div class="value-card">
            <h3>Exigence & précision</h3>
            <p>
              Choix de l’essence, finitions, assemblages:
              chaque détail compte dans la création de menuiseries sur mesure.
            </p>
          </div>

          <div class="value-card">
            <h3>Satisfaction client</h3>
            <p>
              Nous plaçons l’écoute et l’accompagnement au cœur
              de chaque projet afin de répondre parfaitement aux attentes.
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="max-w-[1000px] mx-auto px-6 py-24 text-center">
      <h2 class="text-[30px] font-bold text-[#6b4a1f] mb-6">
        Nos distinctions
      </h2>

      <p class="text-[16px] text-[#3a3a3a] leading-relaxed max-w-[720px] mx-auto">
        Le gérant de la société est <strong>diplômé des Compagnons du Devoir</strong>
        depuis plus de <strong>vingt ans</strong>.
        Une reconnaissance d’excellence et de transmission du savoir-faire artisanal.
      </p>
    </div>

  </section>
</template>

<style scoped>
.value-card {
  background: white;
  border-radius: 22px;
  padding: 36px 32px;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.06);
  transition: all 0.35s ease;
  text-align: center;
}

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
}

.value-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #6b4a1f;
  margin-bottom: 14px;
}

.value-card p {
  font-size: 15px;
  color: #3a3a3a;
  line-height: 1.7;
}
</style>
