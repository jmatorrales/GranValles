<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
const { t } = useI18n();

const forWho = ["has", "hiring"];
const services = ["legal", "contract", "procedures", "support"];
</script>

<template>
  <main>
    <!-- BANNER -->
    <section class="relative isolate flex min-h-[18rem] items-center overflow-hidden md:min-h-[26rem]">
      <NuxtImg
        src="/img/cuidador_bg.png"
        alt="cuidador_bg"
        aria-hidden="true"
        width="1920"
        height="1280"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <div class="mx-auto w-full max-w-5xl px-4 py-12">
        <h1 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t("bringCaregiver.title") }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
          {{ t("bringCaregiver.subtitle") }}
        </p>
      </div>
    </section>

    <!-- PARA QUIÉN ES -->
    <section class="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <p class="max-w-3xl text-lg text-gray-600">
        {{ t("bringCaregiver.intro") }}
      </p>

      <h2 class="mt-10 text-2xl font-bold text-gray-900 md:text-3xl">
        {{ t("bringCaregiver.forWho.title") }}
      </h2>
      <ul class="mt-6 grid gap-6 md:grid-cols-2">
        <li
          v-for="item in forWho"
          :key="item"
          class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-lg font-semibold text-gray-900">
            {{ t(`bringCaregiver.forWho.items.${item}.title`) }}
          </h3>
          <p class="mt-1 text-gray-600">
            {{ t(`bringCaregiver.forWho.items.${item}.text`) }}
          </p>
        </li>
      </ul>
    </section>

    <!-- QUÉ HACEMOS: lista + imagen -->
    <section class="bg-gray-50 py-12 md:py-16">
      <div class="mx-auto grid max-w-5xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            {{ t("bringCaregiver.services.title") }}
          </h2>

          <ul class="mt-6 space-y-5">
            <li v-for="item in services" :key="item" class="flex gap-4">
              <span
                class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ t(`bringCaregiver.services.items.${item}.title`) }}
                </h3>
                <p class="text-gray-600">
                  {{ t(`bringCaregiver.services.items.${item}.text`) }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <NuxtImg
          src="/img/trae_tu_cuidador.jpg"
          alt="trae_tu_cuidadora"
          width="800"
          height="1000"
          loading="lazy"
          class="h-full max-h-[34rem] w-full rounded-2xl object-cover shadow-lg lg:rounded-bl-3xl lg:rounded-tr-3xl"
        />
      </div>
    </section>

    <!-- TRANQUILIDAD Y ACOMPAÑAMIENTO -->
    <section class="bg-blue-50 py-12 md:py-16">
      <div class="mx-auto max-w-3xl px-4 text-center">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          {{ t("bringCaregiver.support.title") }}
        </h2>
        <p class="mt-3 text-lg text-gray-700">
          {{ t("bringCaregiver.support.text") }}
        </p>
        <p class="mt-8 text-lg font-semibold text-blue-800">
          {{ t("bringCaregiver.cta.title") }}
        </p>
        <p class="mt-1 text-gray-700">{{ t("bringCaregiver.cta.text") }}</p>
      </div>
    </section>

    <ContactForm />
  </main>
</template>