<script setup lang="ts">
import { ref } from 'vue'

import ZoneInterventionSection from '../components/layout/ZoneInterventionSection.vue'

const name = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')
const consent = ref(false)

const sendMail = () => {
  if (!consent.value) {
    alert('Veuillez accepter la politique de confidentialité.')
    return
  }

  const subject = encodeURIComponent('Demande de contact – Alcove')
  const body = encodeURIComponent(
    `Nom & prénom : ${name.value}\n` +
    `Téléphone : ${phone.value}\n` +
    `Email : ${email.value}\n\n` +
    `Message :\n${message.value}`
  )

  window.location.href =
    `mailto:mchoubri@gmail.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <TopBar />
  <NavBar />
  <section class="w-full bg-white py-16">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-14">

        <form
          @submit.prevent="sendMail"
          class="lg:col-span-2 space-y-6"
        >
          <div>
            <label>Nom & prénom <span class="text-red-600">*</span></label>
            <input v-model="name" required class="input" />
          </div>

          <div>
            <label>Téléphone <span class="text-red-600">*</span></label>
            <input v-model="phone" required class="input" />
          </div>

          <div>
            <label>E-mail <span class="text-red-600">*</span></label>
            <input v-model="email" type="email" required class="input" />
          </div>

          <div>
            <label>Votre message <span class="text-red-600">*</span></label>
            <textarea v-model="message" required class="textarea"></textarea>
          </div>

          <div class="flex items-start gap-3">
            <input
              type="checkbox"
              v-model="consent"
              class="mt-1"
            />
            <p class="text-sm text-gray-600">
              Je consens à ce que mon adresse email soit collectée afin de
              traiter cette demande.
            </p>
          </div>

          <button
            type="submit"
            class="border border-[#6b4a1f] text-[#6b4a1f]
                   px-8 py-3 rounded-md font-semibold
                   hover:bg-[#6b4a1f] hover:text-white transition"
          >
            Envoyer
          </button>
        </form>

        <aside class="space-y-8">
          <img
            src="@/assets/alcove.webp"
            alt="Alcove"
            class="h-[70px]"
          />

          <div>
            <h3 class="text-lg font-bold">Contact</h3>
            <p class="mt-1">06 51 00 33 31</p>
          </div>

          <div>
            <h3 class="text-lg font-bold">Adresse</h3>
            <p class="mt-1">
              3 route de Châtelaillon<br />
              17290 Le Thou
            </p>
          </div>

          <div>
            <h3 class="text-lg font-bold">Heure d'ouverture</h3>
            <p class="mt-1">
              Lundi au Vendredi :<br />
              8h à 18h
            </p>
          </div>
        </aside>

      </div>
    </div>
  </section>
    <ZoneInterventionSection />
</template>

<style scoped>
label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
}

.input,
.textarea {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 12px;
  font-size: 14px;
}

.textarea {
  min-height: 140px;
}
</style>
