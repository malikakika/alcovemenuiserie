<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  variant?: 'default' | 'white'
}>()
</script>

<template>
  <RouterLink
    to="/contact"
    class="btn"
    :class="variant === 'white' ? 'btn-white' : 'btn-default'"
  >
    Devis gratuit ✓
  </RouterLink>
</template>

<style scoped>
.btn {
  padding: 12px 26px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* ⭐ RADIUS SIGNATURE */
  border-radius: 4px 18px 4px 18px;
}

/* DEFAULT (fond clair) */
.btn-default {
  border: 2px solid #6b4a1f;
  color: #6b4a1f;
  background: transparent;
}

.btn-default:hover {
  background: #6b4a1f;
  color: white;
}

/* BLANC (sur fond marron) */
.btn-white {
  background: white;
  color: #8b6a3e;
  border: 2px solid white;
}

.btn-white:hover {
  background: #6b4a1f;
  color: white;
  border-color: #6b4a1f;
}
</style>
