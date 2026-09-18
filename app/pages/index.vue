<template>
  <div>
    <!-- Mensaje de bienvenida -->
    <div class="min-h-[80vh] flex flex-col md:flex-row justify-center items-center p-6 md:p-20 gap-8 md:gap-10">
      <div class="hidden md:flex w-1/3 flex-col gap-2">
        <h1 class="whitespace-pre-line text-5xl font-bold text-indigo-950">
          {{ $t("home.welcomeMessage") }}
        </h1>
        <div class="flex items-center gap-4">
          <div class="w-12 h-0.5 bg-black"></div>
          <h2 class="text-2xl text-gray-500">
            {{ $t("home.welcomeSubtitle") }}
          </h2>
        </div>
      </div>

      <!-- img con parallax sutil -->
      <div ref="parallaxTarget" class="relative w-full md:w-auto overflow-hidden rounded-tr-3xl rounded-bl-3xl">
        <NuxtImg
          src="/img/cuidador_1.jpg"
          alt="Cuidador acompañando a una persona mayor en su domicilio"
          width="1920"
          height="1280"
          class="w-full md:w-[32rem] object-cover"
          :style="{ transform: `translateY(${parallax.roll.value * 10}px) scale(1.05)` }"
        />
        <div class="md:hidden absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 bg-black/40">
          <h1 class="whitespace-pre-line text-3xl font-bold text-white">
            {{ $t("home.welcomeMessage") }}
          </h1>
          <h2 class="text-lg text-gray-200">
            {{ $t("home.welcomeSubtitle") }}
          </h2>
        </div>
      </div>
    </div>

    <!-- Formulario solicitud de información -->
    <div class="py-10 md:py-16 bg-blue-950">
      <p class="text-center text-white text-3xl md:text-4xl p-4 md:p-8">
        {{ $t("home.form.title") }}
      </p>

      <!-- Contenedores individuales (Formulario num telefono) -->
      <!-- En móvil: teléfono primero, formulario después -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 px-6 md:px-20">
        <!-- Información atención oficina -->
        <div class="order-1 md:order-2 bg-blue-100 px-8 py-6 rounded-lg text-center flex flex-col items-center gap-2 w-full md:w-auto max-w-sm">
          <p class="text-xl font-semibold text-blue-950">
            {{ $t("home.infoOffice.callToAction") }}
          </p>
          <p class="text-3xl font-bold text-blue-600">93 726 10 11</p>
        </div>

        <!-- Formulario -->
        <div class="order-2 md:order-1 w-full md:w-auto flex justify-center items-center bg-blue-100 rounded-lg p-6 md:p-8">
          <form @submit.prevent="sendForm" class="flex flex-col gap-5 w-full">
            <!-- Datos del cliente -->
            <div class="flex flex-col gap-3">
              <!-- Nombre -->
              <label class="flex flex-col">
                <p>
                  {{ $t("home.form.name") }}
                  <strong class="text-red-500">*</strong>
                </p>
                <input v-model="form.nombre" type="text" class="rounded-lg py-1" required />
              </label>
              <!-- Telefono y mail -->
              <div class="flex flex-col sm:flex-row gap-3">
                <label class="flex flex-col gap-2 flex-1">
                  <p>
                    {{ $t("home.form.phone") }}
                    <strong class="text-red-500">*</strong>
                  </p>
                  <input v-model="form.phone" type="tel" maxlength="14" class="rounded-lg w-full py-1" required />
                </label>
                <label class="flex flex-col gap-2 flex-1">
                  {{ $t("home.form.mail") }}
                  <input v-model="form.email" type="email" class="rounded-lg w-full py-1" />
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
                    :class="form.comments.length >= 280 ? 'text-red-500' : 'text-gray-500'"
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
                class="w-5 h-5 checked:bg-blue-950"
                required
              />
              <span>
                <i18n-t keypath="home.form.privacy" tag="span">
                  <template #link>
                    <NuxtLink to="/privacy" class="underline hover:text-blue-500">
                      {{ $t("home.form.privacyLink") }}
                    </NuxtLink>
                  </template>
                </i18n-t>
                <strong class="text-red-500">*</strong>
              </span>
            </label>
            <!-- Btn enviar -->
            <button
              type="submit"
              :disabled="enviando"
              class="p-2 rounded-lg bg-blue-950 text-white"
            >
              {{ enviando ? $t("home.form.sending") : $t("home.form.send") }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Seccion de servicios ofrecidos -->
    <div
      ref="servicesTarget"
      class="p-5 flex justify-center transition-all duration-700 ease-out"
      :class="servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div class="pt-10 w-full max-w-4xl">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-indigo-950">
          {{ $t("home.services") }}
        </h2>
        <!-- grid de servicios se ofrece -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ServiceCard image="/img/asesoria.jpg" alt="Asesoramiento" :label="$t('nav.services.advice')" />
          <ServiceCard image="/img/seleccion_de_personal.png" alt="Seleccion de personal" :label="$t('nav.services.staffSelection')" />
          <ServiceCard image="/img/tipo_de_cuidador.jpg" alt="Tipos de cuidadora" :label="$t('nav.services.caregiverTypes')" />
          <ServiceCard image="/img/seguimiento_y_suplencia.jpg" alt="Seguimiento y suplencias" :label="$t('nav.services.followUp')" />
          <ServiceCard image="/img/trae_tu_cuidador.jpg" alt="Trae tu cuidador" :label="$t('nav.services.dependency')" />
          <ServiceCard image="/img/ayuda_a_la_dependencia.jpg" alt="Ayuda a la dependencia" :label="$t('nav.services.bringCaregiver')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const parallaxTarget = ref(null);
const parallax = useParallax(parallaxTarget);

const servicesTarget = ref(null);
const servicesVisible = ref(false);

useIntersectionObserver(
  servicesTarget,
  ([{ isIntersecting }]) => {
    if (isIntersecting) servicesVisible.value = true;
  },
  { threshold: 0.15 }
);

const form = reactive({
  nombre: "",
  phone: "",
  email: "",
  comments: "",
});

const enviando = ref(false);
const enviado = ref(false);

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