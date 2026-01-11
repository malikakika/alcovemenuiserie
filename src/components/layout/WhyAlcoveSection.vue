<script setup lang="ts">
import imageWhy from '@/assets/alcove.webp' 
import imageOverview from '@/assets/alcove.webp' 
</script>

<template>
  <section class="why-section">

    <div class="block">
      <div class="image">
        <div class="image-bg"></div>
        <img :src="imageWhy" alt="Aménagement intérieur Alcove" />
      </div>

      <div class="content">
        <h2>Pourquoi faire appel à Alcove à La Rochelle et alentour ?</h2>

        <p>
          Créée par un <strong>Compagnon du Devoir expérimenté</strong>,
          <strong>Alcove</strong> est le spécialiste du bois sur
          <strong>La Rochelle</strong> et alentour.
        </p>

        <p>
          Amoureux du travail bien fait, nous réalisons pour les particuliers
          et professionnels de la région des aménagements sur mesure.
        </p>

        <p class="highlight">
          Disponible du lundi au vendredi de <strong>8h à 18h</strong>
          pour discuter de vos projets ou établir un <strong>devis gratuit</strong>.
        </p>
      </div>
    </div>

    <div class="block reverse">
      <div class="content">
        <h2>Vue d’ensemble sur nos prestations</h2>

        <p>
          Dans notre atelier, nous concevons tout type de mobilier et
          d’infrastructures en bois.
        </p>

        <p>
          Du choix de l’essence à la pose, <strong>Alcove</strong> intervient
          tout autour de <strong>La Rochelle</strong> pour des projets
          entièrement sur mesure.
        </p>

        <ul class="list">
          <li>Menuiseries d’agencement</li>
          <li>Charpentes</li>
          <li>Extensions de maison bois</li>
          <li>Escaliers</li>
          <li>Cuisines sur mesure</li>
        </ul>
      </div>

      <div class="image">
        <div class="image-bg"></div>
        <img :src="imageOverview" alt="Prestations Alcove" />
      </div>
    </div>

  </section>
</template>


<style scoped>
.why-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
}

.block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.block.reverse {
  grid-template-columns: 1fr 1fr;
}

.image {
  position: relative;
}

.image-bg {
  position: absolute;
  top: -24px;
  left: -24px;
  width: 100%;
  height: 100%;
  background-color: #f6f1e5;
  border-radius: 32px;
  z-index: 0;
}

.block.reverse .image-bg {
  left: auto;
  right: -24px;
}

.image img {
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: 28px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

.content h2 {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 24px;
}

.content p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.highlight {
  padding-left: 18px;
  border-left: 3px solid #6b4a1f;
}

.list {
  margin-top: 24px;
  padding-left: 18px;
}

.list li {
  margin-bottom: 8px;
}

/* MOBILE */
@media (max-width: 1024px) {
  .block {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .image-bg {
    top: -16px;
    left: -16px;
  }

  .block.reverse .image-bg {
    right: -16px;
  }
}

</style>
