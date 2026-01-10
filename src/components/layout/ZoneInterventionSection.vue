<template>
  <section class="zone-section">
    <div class="container">

      <h2 class="title">Zone d’intervention</h2>
      <p class="subtitle">La Rochelle + 80 km</p>

      <div class="map-wrapper">
        <iframe
src="https://www.google.com/maps?q=3%20Route%20de%20Châtelaillon%2017290%20Le%20Thou&z=10&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </section>
</template>

<style scoped>
.zone-section {
  background: #ffffff;
  padding: 60px 20px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 12px;
}

.subtitle {
  text-align: center;
  font-size: 16px;
  color: #6b4a1f;
  margin-bottom: 50px;
  font-weight: 500;
}

.map-wrapper {
  width: 100%;
  height: 420px;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
}

.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .map-wrapper {
    height: 320px;
  }

  .title {
    font-size: 28px;
  }
}
</style>
