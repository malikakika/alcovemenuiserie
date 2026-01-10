<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'white'
}>()
</script>

<template>
  <a
    href="tel:0651003331"
    class="btn"
    :class="variant === 'white' ? 'btn-white' : 'btn-default'"
  >
    06 51 00 33 31
  </a>
</template>

<style scoped>
.btn {
  padding: 12px 26px;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* ⭐ MÊME RADIUS */
  border-radius: 4px 18px 4px 18px;
}

/* DEFAULT */
.btn-default {
  background: #4b320f;
  color: white;
}

.btn-default:hover {
  opacity: 0.9;
}

/* BLANC */
.btn-white {
  background: white;
  color: #8b6a3e;
}

.btn-white:hover {
  background: #6b4a1f;
  color: white;
}
</style>
