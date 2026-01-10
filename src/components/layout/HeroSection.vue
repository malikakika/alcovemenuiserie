<script setup lang="ts">
import heroImg from '@/assets/bandeauhero.png'

import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'
</script>

<template>
  <section
    class="hero-section"
    :style="{ backgroundImage: `url(${heroImg})` }"
  >


    <div class="hero-content">
      <h1 class="hero-title">
        Alcove, votre spécialiste de la<br />
        menuiserie sur La Rochelle
      </h1>

      <ul class="hero-list">
        <li>
          <span>✓</span>
          + de 20 ans d’expérience
        </li>
        <li>
          <span>✓</span>
          Diplômé des Compagnons du Devoir
        </li>
        <li>
          <span>✓</span>
          Atelier dédié à la conception
        </li>
      </ul>

      <div class="hero-actions">
        <UIButtonDevis />
        <UIButtonPhone />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 85vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  overflow: hidden;
}


.hero-content {
  position: relative;
  z-index: 1;
  max-width: 680px;
  padding: 120px 24px;
  margin-left: clamp(16px, 6vw, 20px);
  margin-right: auto;

  text-align: left;
}

.hero-title {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 800;
  color: #4b320f;
  line-height: 1.2;
  margin-bottom: 28px;
}

.hero-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  color: #4b320f;
  font-size: 16px;
}

.hero-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.hero-list span {
  font-weight: 700;
  color: #6b4a1f;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}


/* Tablette */
@media (max-width: 1024px) {
  .hero-section {
    background-position: left center;
    min-height: 80vh;
  }

  .hero-content {
    padding: 100px 20px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .hero-section {
    background-position: left top;
    min-height: 70vh;
  }

  .hero-content {
    padding: 80px 16px;
    max-width: 100%;
  }
}
</style>
