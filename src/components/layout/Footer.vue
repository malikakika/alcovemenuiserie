<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logo from '@/assets/alcove.jpg'
</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-col">
        <img :src="logo" alt="Alcove Menuiserie" class="footer-logo" />

        <p class="address">
          Route de La Rochelle, ZI la Figerasse<br />
          17330 Bernay-Saint-Martin
        </p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="instagram"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"
              fill="none"
              stroke="#6b4a1f"
              stroke-width="1.5"
            />
          </svg>
        </a>
      </div>

      <div class="footer-col">
        <h4>Nos services</h4>
        <ul>
          <li><RouterLink to="/menuiserie">Menuiserie bois</RouterLink></li>
          <li><RouterLink to="/charpente">Charpente</RouterLink></li>
          <li><RouterLink to="/extension">Extension</RouterLink></li>
          <li><RouterLink to="/escalier">Escalier</RouterLink></li>
          <li><RouterLink to="/cuisine">Cuisine</RouterLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>À propos</h4>
        <ul>
          <li><RouterLink to="/a-propos">Qui sommes-nous ?</RouterLink></li>
          <li><RouterLink to="/mentions-legales">Mentions légales</RouterLink></li>
          <li><RouterLink to="/confidentialite">Politique de confidentialité</RouterLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Informations</h4>
        <p class="info-title">Horaires d'ouverture :</p>
        <p>Lundi au Vendredi</p>
        <p>8h à 18h</p>
      </div>

    </div>

    <div class="footer-bottom">
      © Alcove 2026 — Tous droits réservés
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #fbf3d2;
  padding: 70px 20px 0;
  box-shadow: inset 0 1px 0 rgba(0,0,0,0.05);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding-bottom: 50px;
}

.footer-col {
  font-size: 14px;
  color: #1f1f1f;
}

.footer-logo {
  width: 150px;
  margin-bottom: 20px;
}

.address {
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer-col h4 {
  font-size: 16px;
  font-weight: 700;
  color: #6b4a1f;
  margin-bottom: 14px;
  position: relative;
}

.footer-col h4::after {
  content: '';
  display: block;
  width: 42px;
  height: 2px;
  background: #6b4a1f;
  margin-top: 6px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  margin-bottom: 10px;
}

.footer-col a {
  text-decoration: none;
  color: #1f1f1f;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-col a:hover {
  color: #6b4a1f;
  transform: translateX(3px);
}

.instagram svg {
  width: 26px;
  height: 26px;
  transition: transform 0.2s ease;
}

.instagram:hover svg {
  transform: scale(1.15);
}

.info-title {
  font-weight: 600;
  margin-bottom: 6px;
}

.footer-bottom {
  border-top: 1px solid rgba(107, 74, 31, 0.25);
  text-align: center;
  padding: 16px;
  font-size: 13px;
  color: #6b4a1f;
  background: #f6ebc6;
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-col h4::after {
    margin: 6px auto 0;
  }

  .footer-col a:hover {
    transform: none;
  }
}
</style>
