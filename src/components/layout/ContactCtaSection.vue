<script setup lang="ts">
import UIButtonDevis from '@/components/ui/UIButtonDevis.vue'
import UIButtonPhone from '@/components/ui/UIButtonPhone.vue'
</script>

<template>
  <section class="contact-section">
    <div class="container">

      <h2 class="title">
        Je prends contact !
      </h2>

      <div class="actions">
        <UIButtonDevis />
        <UIButtonPhone />
      </div>

    </div>

    <span class="dot left"></span>
    <span class="dot right"></span>
    <span class="shape"></span>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  background-color: #fbf4cf;
  padding: 90px 20px;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 30px;
  font-weight: 700;
  color: #7a5a1f;
  margin-bottom: 35px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #7a5a1f;
  border-radius: 50%;
}

.dot.left {
  left: 120px;
  top: 50%;
  box-shadow:
    0 14px #7a5a1f,
    0 28px #7a5a1f,
    0 42px #7a5a1f;
}

.dot.right {
  right: 140px;
  top: 35%;
  box-shadow:
    0 14px #7a5a1f,
    0 28px #7a5a1f,
    0 42px #7a5a1f;
}

.shape {
  position: absolute;
  right: -120px;
  top: -80px;
  width: 260px;
  height: 260px;
  background-color: #3f2b0b;
  border-bottom-left-radius: 200px;
}

@media (max-width: 768px) {
  .dot.left,
  .dot.right,
  .shape {
    display: none;
  }
}
</style>
