<template>
  <!-- Sección principal del formulario -->
  <div class="w-full py-0 md:py-4 bg-blue-900">
    <p class="text-center text-white text-3xl md:text-4xl p-4 md:p-8">
      {{ $t("home.form.title") }}
    </p>

    <!-- Contenedores individuales (Formulario / num telefono) -->
    <!-- En móvil: teléfono primero, formulario después. Sin padding ni gap en móvil para ocupar todo el ancho -->
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 p-0 md:p-6 md:py-20"
    >
      <!-- Información atención oficina -->
      <div
        class="order-1 md:order-2 bg-blue-50 px-8 py-6 rounded-none md:rounded-lg text-center flex flex-col items-center gap-2 w-full md:w-auto max-w-sm"
      >
        <p class="text-xl font-semibold text-blue-800">
          {{ $t("home.infoOffice.callToAction") }}
        </p>
        <p class="text-3xl font-bold text-blue-500">93 726 10 11</p>
      </div>

      <!-- Formulario -->
      <div
        class="order-2 md:order-1 w-full md:w-auto flex justify-center items-center bg-blue-50 rounded-none md:rounded-lg px-8 py-6 md:p-8"
      >
        <form @submit.prevent="sendForm" class="flex flex-col gap-5 w-full">
          <!-- Datos del cliente -->
          <div class="flex flex-col gap-3">
            <!-- Nombre -->
            <label class="flex flex-col">
              <p>
                {{ $t("home.form.name") }}
                <strong class="text-red-500">*</strong>
              </p>
              <input
                v-model="form.nombre"
                type="text"
                class="rounded-lg py-1"
                required
              />
            </label>
            <!-- Telefono y mail -->
            <div class="flex flex-col sm:flex-row gap-3">
              <label class="flex flex-col gap-2 flex-1">
                <p>
                  {{ $t("home.form.phone") }}
                  <strong class="text-red-500">*</strong>
                </p>
                <input
                  v-model="form.phone"
                  type="tel"
                  maxlength="14"
                  class="rounded-lg w-full py-1"
                  required
                />
              </label>
              <label class="flex flex-col gap-2 flex-1">
                {{ $t("home.form.mail") }}
                <input
                  v-model="form.email"
                  type="email"
                  class="rounded-lg w-full py-1"
                />
              </label>
            </div>
            <!-- Comentario -->
            <div>
              <label class="flex flex-col">
                <p>{{ $t("home.form.comments") }}</p>
                <textarea
                  v-model="form.comments"
                  rows="4"
                  maxlength="280"
                  class="rounded-lg py-1 px-2 resize-none"
                ></textarea>
                <span
                  class="text-sm self-end"
                  :class="
                    form.comments.length >= 280
                      ? 'text-red-500'
                      : 'text-gray-500'
                  "
                >
                  {{ form.comments.length }}/280
                </span>
              </label>
            </div>
          </div>
          <!-- checkbox privacidad -->
          <label class="flex gap-3">
            <input
              type="checkbox"
              v-model="form.condiciones"
              name="condiciones"
              class="w-5 h-5 checked:bg-blue-900"
              required
            />
            <span>
              <i18n-t keypath="home.form.privacy" tag="span">
                <template #link>
                  <NuxtLinkLocale to="/privacy" class="underline hover:text-blue-500">
                    {{ $t("home.form.privacyLink") }}
                  </NuxtLinkLocale>
                </template>
              </i18n-t>
              <strong class="text-red-500">*</strong>
            </span>
          </label>
          <!-- Btn enviar -->
          <button
            type="submit"
            :disabled="enviando"
            class="p-2 rounded-lg bg-blue-800 text-white"
          >
            {{ enviando ? $t("home.form.sending") : $t("home.form.send") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  nombre: "",
  phone: "",
  email: "",
  comments: "",
});

const enviando = ref(false);
const enviado = ref(false); // se usa como flag interno, pero no se muestra ningún mensaje de éxito en el template

async function sendForm() {
  enviando.value = true;
  try {
    await $fetch("/api/form", { method: "POST", body: form });
    enviado.value = true;
  } catch (e) {
    console.error(e);
  } finally {
    enviando.value = false;
  }
}
</script>