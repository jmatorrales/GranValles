<template>
  <div>

    <!-- Mensaje de bienvenida -->
    <div class="h-[80vh] flex justify-center items-center p-20 gap-10">
      <!-- texto -->
      <div class="w-1/3 flex flex-col gap-2">
        <h1 class="whitespace-pre-line text-5xl font-bold text-indigo-950">
          {{ $t('home.msg_welcome') }}
        </h1>
        <div class="flex items-center gap-4">
          <div class="w-12 h-0.5 bg-black"></div>
          <p class="text-base text-2xl text-gray-500">{{ $t('home.msg_welcome_sub') }}</p>
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
      <p class="text-center text-white text-3xl p-8">Solicita información</p>

      <div class="h-[50vh] flex justify-center items-center">
        <div class="w-1/2 bg-blue-100 rounded-lg p-8">
          <form @submit.prevent="sendForm" class="flex flex-col gap-2 bg-gray-200">
            <!-- Nombre -->
            <label for="name" class="flex flex-col">
              {{ $t('home.form.name') }}*
              <input v-model="form.nombre" type="text" class="rounded-lg" required>
            </label>
            <div class="flex flex-row gap-3">
              <!-- Telefono -->
              <label class="flex flex-col gap-2" for="phone">
                {{ $t('home.form.phone') }}*
                <input v-model="form.phone" type="tel" maxlength="14" class="rounded-lg" required>
              </label>
              <!-- Mail -->
              <label class="flex flex-col gap-2" for="email">
                {{ $t('home.form.mail') }}
                <input v-model="form.email" type="email" placeholder="Email" class="rounded-lg">
              </label>
            </div>
              <label for="privacy">
                <input type="checkbox" v-model="form.condiciones" name="condiciones">
                {{ $t('home.form.privacy') }}
              </label>
            <button type="submit" :disabled="enviando">
              {{ enviando ? 'Enviando...' : 'Enviar' }}
            </button>
          </form>
        </div>

      </div>
    </div>
    <!--  -->
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