<template>
  <div>

    <!-- Mensaje de bienvenida -->
    <div class="h-[80vh] flex justify-center items-center p-20 gap-10">
      <!-- texto -->
      <div class="w-1/3 flex flex-col gap-2">
        <h1 class="whitespace-pre-line text-5xl font-bold text-indigo-950">
          {{ $t('home.welcomeMessage') }}
        </h1>
        <div class="flex items-center gap-4">
          <div class="w-12 h-0.5 bg-black"></div>
          <p class="text-2xl text-gray-500">{{ $t('home.welcomeSubtitle') }}</p>
        </div>
      </div>

      <!-- img -->
      <div>
        <NuxtImg src="/img/cuidador_1.jpg" alt="Cuidador acompañando a una persona mayor en su domicilio" width="1920"
          height="1280" class="w-[32rem] rounded-tr-3xl rounded-bl-3xl" />
      </div>
    </div>

    <!-- Formulario solicitud de información -->
    <div class="h-[70vh] bg-blue-950">
      <p class="text-center text-white text-4xl p-8">{{ $t('home.form.title') }}</p>

      <!-- Contenedores individuales -->
      <div class="flex justify-center items-center gap-10 px-20">
        <!-- Formulario -->
        <div class=" flex justify-center items-center bg-blue-100 rounded-lg p-8">
          <form @submit.prevent="sendForm" class="flex flex-col gap-5">
            <!-- Datos del cliente -->
            <div class="flex flex-col gap-3">
              <!-- Nombre -->
              <label class="flex flex-col">
                <p>{{ $t('home.form.name') }} <strong class="text-red-500">*</strong></p>
                <input v-model="form.nombre" type="text" class="rounded-lg py-1" required>
              </label>
              <!-- Telefono y mail -->
              <div class="flex flex-row gap-3">
                <label class="flex flex-col gap-2 flex-1">
                  <p>{{ $t('home.form.phone') }} <strong class="text-red-500">*</strong></p>
                  <input v-model="form.phone" type="tel" maxlength="14" class="rounded-lg w-full py-1" required>
                </label>
                <label class="flex flex-col gap-2 flex-1">
                  {{ $t('home.form.mail') }}
                  <!-- placeholder ahora traducido -->
                  <input v-model="form.email" type="email"
                    class="rounded-lg w-full py-1">
                </label>
              </div>
            </div>
            <!-- checkbox privacidad -->
            <label class="flex gap-3">
              <input type="checkbox" v-model="form.condiciones" name="condiciones"
              class="w-5 h-5 checked:bg-blue-950">
              <span>
                <i18n-t keypath="home.form.privacy" tag="span">
                  <template #link>
                    <NuxtLink to="/privacy" class="underline hover:text-blue-500">
                      {{ $t('home.form.privacyLink') }}
                    </NuxtLink>
                  </template>
                </i18n-t>
                <!-- asterisco sacado del slot para que no quede a media frase -->
                <strong class="text-red-500">*</strong>
              </span>
            </label>
            <!-- Btn enviar -->
            <button type="submit" :disabled="enviando" class="p-2 rounded-lg bg-blue-950 text-white">
              {{ enviando ? $t('home.form.sending') : $t('home.form.send') }}
            </button>
          </form>
        </div>
        <!-- Información atención oficina -->
        <div class="bg-blue-100 px-10 py-4 rounded-lg">
          <div>
            <p class="text-2xl">{{ $t('home.infoOffice.infoPhone') }}</p>
            <p class="text-3xl text-blue-600">93 726 10 11</p>
          </div>
          <hr class="my-4 border-blue-700">
          <div>
            <p class="text-2xl text-blue-900">{{ $t('home.infoOffice.timetableTitle') }}</p>
            <!-- "text-ml" no existe, cambiado por text-base -->
            <p class="text-base whitespace-pre-line">{{ $t('home.infoOffice.timetableTxt') }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Seccion de servicios ofrecidos -->
    <div class="h-[200vh]">

    </div>
  </div>
</template>

<script setup>
const form = reactive({
  nombre: '',
  email: '',
  mensaje: ''
})

const enviando = ref(false)
const enviado = ref(false)

async function sendForm() {
  enviando.value = true
  try {
    await $fetch('/api/contacto', {
      method: 'POST',
      body: form
    })
    enviado.value = true
  } catch (e) {
    console.error(e)
  } finally {
    enviando.value = false
  }
}
</script>