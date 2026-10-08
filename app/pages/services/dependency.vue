<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
const { t } = useI18n();

const steps = ["grade", "guidance", "social"];
const services = ["hygiene", "medication", "mobility", "company", "home"];
</script>

<template>
  <main>
    <!-- BANNER -->
    <section class="relative isolate flex min-h-[18rem] items-center overflow-hidden md:min-h-[26rem]">
      <NuxtImg
        src="/img/dependencia_bg.png"
        alt="dependencia_bg"
        aria-hidden="true"
        width="1920"
        height="1280"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <div class="mx-auto w-full max-w-5xl px-4 py-12">
        <h1 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t("dependency.title") }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
          {{ t("dependency.subtitle") }}
        </p>
      </div>
    </section>

    <!-- AYUDA CON LOS TRÁMITES: imagen + pasos -->
    <section class="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <!-- Imagen a la izquierda en escritorio -->
        <NuxtImg
          src="/img/ayuda_a_la_dependencia.jpg"
          alt="ayuda_a_la_dependencia"
          width="800"
          height="1000"
          loading="lazy"
          class="order-last h-full max-h-[34rem] w-full rounded-2xl object-cover shadow-lg lg:order-first lg:rounded-bl-3xl lg:rounded-tr-3xl"
        />

        <div>
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            {{ t("dependency.help.title") }}
          </h2>
          <p class="mt-3 text-gray-600">{{ t("dependency.intro") }}</p>

          <!-- Pasos numerados -->
          <ol class="mt-6 space-y-5">
            <li v-for="(step, i) in steps" :key="step" class="flex gap-4">
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white"
              >
                {{ i + 1 }}
              </span>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ t(`dependency.help.steps.${step}.title`) }}
                </h3>
                <p class="text-gray-600">
                  {{ t(`dependency.help.steps.${step}.text`) }}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- SERVICIOS DE LAS AUXILIARES -->
    <section class="bg-gray-50 py-12 md:py-16">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          {{ t("dependency.services.title") }}
        </h2>
        <p class="mt-2 text-gray-600">{{ t("dependency.services.intro") }}</p>

        <ul class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(service, i) in services"
            :key="service"
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <span class="text-3xl font-bold text-blue-600">
              {{ String(i + 1).padStart(2, "0") }}
            </span>
            <h3 class="mt-2 text-lg font-semibold text-gray-900">
              {{ t(`dependency.services.items.${service}.title`) }}
            </h3>
            <p class="mt-1 text-gray-600">
              {{ t(`dependency.services.items.${service}.text`) }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- LLAMADA A LA ACCIÓN -->
    <section class="bg-blue-50 py-10">
      <div class="mx-auto max-w-3xl px-4 text-center">
        <h2 class="text-2xl font-bold text-gray-900">
          {{ t("dependency.cta.title") }}
        </h2>
        <p class="mt-2 text-gray-700">{{ t("dependency.cta.text") }}</p>
      </div>
    </section>

    <ContactForm />
  </main>
</template>