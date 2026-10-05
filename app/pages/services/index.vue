<script setup>
// pages/services/index.vue
const { t, tm, rt } = useI18n();
const localePath = useLocalePath();

// Rellenar antes de publicar
const PHONE = "937261011"; // ej. '+34 930 00 00 00' (si está vacío, el botón de llamar no se muestra)
const CONTACT_PATH = "/contact"; // ruta de la página de contacto / formulario
const ADVISORY_PATH = "/services/advice"; // ruta de la página de asesoría
const CAREGIVER_TYPES_PATH = "/services/caregiverTypes"; // página de modalidades de cuidador

const advisoryPoints = computed(() => tm("services.advisory.points"));
const steps = computed(() => tm("services.how.steps"));
const types = computed(() => tm("services.types.items"));

const phoneHref = "tel:" + PHONE.replace(/\s/g, "");

useSeoMeta({
  title: () => t("services.seo.title"),
  description: () => t("services.seo.description"),
  ogTitle: () => t("services.seo.title"),
  ogDescription: () => t("services.seo.description"),
});
</script>

<template>
  <main class="text-lg leading-relaxed text-gray-800">
    <!-- Hero -->
    <section class="px-4 pb-5 pt-8 sm:pt-12">
      <div
        class="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#005df2] to-[#4aedea] px-6 py-14 text-white sm:px-12 sm:py-20"
      >
        <p
          class="text-base font-semibold uppercase tracking-wide text-blue-200"
        >
          {{ t("services.hero.eyebrow") }}
        </p>
        <h1 class="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          {{ t("services.hero.title") }}
        </h1>
        <p class="mt-6 max-w-2xl text-xl text-blue-50">
          {{ t("services.hero.subtitle") }}
        </p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            :href="phoneHref"
            class="inline-flex min-h-[3.5rem] items-center rounded-full px-8 font-bold bg-white text-xl text-blue-500 hover:bg-white/80"
          >
            {{ t("services.cta.call") }} {{ PHONE }}
          </a>
          <nuxt-link
            :to="localePath(CONTACT_PATH)"
            class="inline-flex min-h-[3.5rem] items-center border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white/60` rounded-full px-8 text-xl font-bold"
          >
            {{ t("services.cta.form") }}
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- Modalidades -->
    <section class="mx-auto mt-16 max-w-6xl">
      <h2 class="text-3xl font-bold">{{ t("services.types.title") }}</h2>
      <p class="mt-3 text-xl">{{ t("services.types.intro") }}</p>

      <ul class="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <li v-for="item in types" :key="rt(item.section)">
          <div
            class="group flex h-full flex-col rounded-2xl border-2 border-blue-100 bg-white p-6 shadow-sm transition hover:border-blue-600 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            <h3 class="text-2xl font-bold text-gray-900">
              {{ rt(item.title) }}
            </h3>
            <p class="mt-3 flex-1">{{ rt(item.text) }}</p>
            <!-- :to="localePath('/services/caregiverTypes')" -->
            <NuxtLinkLocale
              :to="`/services/caregiverTypes#${rt(item.section)}`"
              class="mt-6 font-semibold text-blue-800 underline underline-offset-4"
            >
              {{ t("services.types.readMore") }} →
            </NuxtLinkLocale>
          </div>
        </li>
      </ul>
    </section>

    <!-- Asesoría -->
    <section class="mx-auto mt-16 max-w-6xl">
      <div
        class="grid gap-8 rounded-3xl border-2 border-blue-800 bg-white p-8 md:grid-cols-2 md:items-center md:p-12"
      >
        <div>
          <p class="text-base font-semibold uppercase tracking-wide text-blue-800">
            {{ t('services.advisory.eyebrow') }}
          </p>
          <h2 class="mt-2 text-3xl font-bold text-gray-900">{{ t('services.advisory.title') }}</h2>
          <p class="mt-4">{{ t('services.advisory.text') }}</p>
          <NuxtLink :to="localePath(ADVISORY_PATH)" class="inline-flex min-h-[3.5rem] items-center justify-center rounded-full px-8 text-xl font-bold transition focus:outline-none focus-visible:ring-4 bg-blue-800 text-white hover:bg-blue-900 focus-visible:ring-blue-300 mt-8">
            {{ t('services.advisory.cta') }}
          </NuxtLink>
        </div>
        <ul class="space-y-4">
          <li v-for="(point, i) in advisoryPoints" :key="'adv-' + i" class="flex gap-3">
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-800"
              aria-hidden="true"
            >
              ✓
            </span>
            <span>{{ rt(point) }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Cómo funciona -->
    <section class="mt-16 bg-blue-50 px-4 py-16">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-gray-900">{{ t('services.how.title') }}</h2>
        <p class="mt-3 max-w-3xl">{{ t('services.how.intro') }}</p>

        <ol class="mt-10 grid gap-8 md:grid-cols-3">
          <li v-for="(step, i) in steps" :key="'step-' + i" class="flex gap-4">
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-800 text-2xl font-bold text-white"
              aria-hidden="true"
            >
              {{ i + 1 }}
            </span>
            <div>
              <h3 class="text-xl font-bold text-gray-900">{{ rt(step.title) }}</h3>
              <p class="mt-2">{{ rt(step.text) }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Ayuda para elegir -->
    <section class="mx-auto max-w-4xl px-4 py-16 text-center">
      <h2 class="text-3xl font-bold text-gray-900">{{ t('services.help.title') }}</h2>
      <p class="mx-auto mt-3 max-w-2xl">{{ t('services.help.text') }}</p>
      <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <!-- TODO: REVISAR CLASES -->
        <a v-if="PHONE" :href="phoneHref" class="bg-blue-400 text-white hover:bg-blue-600 inline-flex min-h-[3.5rem] items-center rounded-full px-8 text-xl font-bold transition">
          {{ t('services.cta.call') }} {{ PHONE }}
        </a>
        <NuxtLink :to="localePath(CONTACT_PATH)" class="inline-flex min-h-[3.5rem] items-center rounded-full px-8 text-xl font-bold border-2 border-blue-600 text-blue-700 hover:bg-blue-50">
          {{ t('services.cta.form') }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
