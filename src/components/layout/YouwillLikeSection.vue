<template>
  <section class="w-full bg-white pt-20">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

      <h2 class="text-center text-[32px] font-bold text-[#4b4b4b] mb-16">
        Votre menuisier de confiance à La Rochelle
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

        <div class="flex flex-col items-center gap-5">
          <div class="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8b6a3e" stroke-width="1.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p>+ de 20 ans d’expérience</p>
        </div>

        <div class="flex flex-col items-center gap-5">
          <div class="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8b6a3e" stroke-width="1.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3l7 4v6c0 5-7 8-7 8s-7-3-7-8V7l7-4z"
              />
            </svg>
          </div>
          <p>
            Diplômé des Compagnons<br />
            du Devoir
          </p>
        </div>

        <div class="flex flex-col items-center gap-5">
          <div class="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8b6a3e" stroke-width="1.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 21h18M6 18V9h12v9M9 9V6h6v3"
              />
            </svg>
          </div>
          <p>
            Atelier dédié<br />
            à la conception
          </p>
        </div>

        <div class="flex flex-col items-center gap-5">
          <div class="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8b6a3e" stroke-width="1.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M9 3a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          </div>
          <p>Équipe de 4 personnes</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.icon-circle {
  width: 78px;
  height: 78px;
  border-radius: 9999px;
  background-color: #f6f1e5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.icon-circle:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.icon-circle svg {
  width: 36px;
  height: 36px;
}

p {
  font-size: 15px;
  color: #4b4b4b;
  line-height: 1.4;
}
</style>
