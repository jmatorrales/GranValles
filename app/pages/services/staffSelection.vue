<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
const { t } = useI18n();

const stats = ["years", "accredited", "interviewed"];
const requirements = ["experience", "references", "letters", "interview"];

// Las modalidades reutilizan los textos de advisory.adapt.groups
const groups = [
  {
    key: "schedule",
    items: ["fullTime", "morning", "afternoon", "hourly", "night", "weekends"],
  },
  { key: "service", items: ["liveInOut", "couples"] },
  { key: "cover", items: ["employeeLeave", "familyHoliday", "hospital"] },
];

// Imágenes que deben estar listas antes de mostrar la página
const CRITICAL_IMAGES = [
  "/img/seleccion_bg.png",
  "/img/seleccion_de_personal.png",
];
const ready = ref(false);

// Precarga en paralelo: las descarga en memoria sin mostrarlas
function preloadImages(srcs) {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = img.onerror = () => resolve(); // onerror para no bloquear
          img.src = src;
        }),
    ),
  );
}

onBeforeMount(async () => {
  await preloadImages(CRITICAL_IMAGES);
  ready.value = true;
});
</script>

<template>
  <main v-if="ready">
    <!-- BANNER -->
    <section
      class="relative isolate flex min-h-[16rem] items-center overflow-hidden sm:min-h-[18rem] md:min-h-[26rem]"
    >
      <NuxtImg
        src="/img/seleccion_bg.png"
        alt="banner seleccion"
        preload
        loading="eager"
        fetchpriority="high"
        aria-hidden="true"
        width="1920"
        height="1280"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <div class="mx-auto w-full max-w-5xl px-4 py-10 sm:py-12">
        <h1
          class="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {{ t("selection.title") }}
        </h1>
        <p
          class="mt-3 max-w-2xl text-base text-white/90 sm:mt-4 sm:text-lg md:text-xl"
        >
          {{ t("selection.subtitle") }}
        </p>
      </div>
    </section>

    <!-- CIFRAS -->
    <section class="border-b border-gray-200 bg-white">
      <dl
        class="mx-auto grid max-w-5xl gap-6 px-4 py-6 text-center sm:grid-cols-3 sm:py-8"
      >
        <div v-for="stat in stats" :key="stat">
          <dt class="text-3xl font-bold text-blue-700 sm:text-4xl">
            {{ t(`selection.stats.${stat}.value`) }}
          </dt>
          <dd class="mt-1 text-sm text-gray-600 sm:text-base">
            {{ t(`selection.stats.${stat}.label`) }}
          </dd>
        </div>
      </dl>
    </section>

    <!-- REQUISITOS: imagen + lista -->
    <section class="mx-auto max-w-5xl px-4 py-10 sm:py-12 md:py-16">
      <div class="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
        <!-- Imagen a la izquierda en escritorio, debajo en móvil -->
        <NuxtImg
          src="/img/seleccion_de_personal.png"
          :alt="t('selection.title')"
          width="800"
          height="1000"
          loading="eager"
          class="order-last h-auto max-h-[22rem] w-full rounded-2xl object-cover shadow-lg sm:max-h-[28rem] lg:order-first lg:max-h-[34rem] lg:rounded-bl-3xl lg:rounded-tr-3xl"
        />

        <div>
          <h2 class="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
            {{ t("selection.requirements.title") }}
          </h2>
          <p class="mt-3 text-sm text-gray-600 sm:text-base">
            {{ t("selection.intro") }}
          </p>

          <ul class="mt-6 space-y-4 sm:space-y-5">
            <li
              v-for="req in requirements"
              :key="req"
              class="flex gap-3 sm:gap-4"
            >
              <span
                class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 sm:h-7 sm:w-7"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <h3 class="text-base font-semibold text-gray-900 sm:text-lg">
                  {{ t(`selection.requirements.items.${req}.title`) }}
                </h3>
                <p class="text-sm text-gray-600 sm:text-base">
                  {{ t(`selection.requirements.items.${req}.text`) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Acreditación y confianza -->
      <div class="mt-10 grid gap-4 sm:gap-6 md:mt-12 md:grid-cols-2">
        <div
          class="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-4 sm:p-6"
        >
          <h3 class="text-base font-semibold text-gray-900 sm:text-lg">
            {{ t("selection.accreditation.title") }}
          </h3>
          <p class="mt-1 text-sm text-gray-700 sm:text-base">
            {{ t("selection.accreditation.text") }}
          </p>
        </div>
        <div
          class="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-4 sm:p-6"
        >
          <h3 class="text-base font-semibold text-gray-900 sm:text-lg">
            {{ t("selection.trust.title") }}
          </h3>
          <p class="mt-1 text-sm text-gray-700 sm:text-base">
            {{ t("selection.trust.text") }}
          </p>
        </div>
      </div>
    </section>

    <!-- HORARIOS Y MODALIDADES -->
    <section class="bg-gray-50 py-10 sm:py-12 md:py-16">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
          {{ t("selection.schedules.title") }}
        </h2>
        <p class="mt-2 text-sm text-gray-600 sm:text-base">
          {{ t("selection.schedules.intro") }}
        </p>

        <div class="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
          <div
            v-for="group in groups"
            :key="group.key"
            class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
          >
            <h3 class="text-base font-semibold text-gray-900 sm:text-lg">
              {{ t(`advisory.adapt.groups.${group.key}.title`) }}
            </h3>
            <ul
              class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-600 marker:text-blue-600 sm:text-base"
            >
              <li v-for="item in group.items" :key="item">
                {{ t(`advisory.adapt.groups.${group.key}.items.${item}`) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ContactForm />
  </main>
</template>
