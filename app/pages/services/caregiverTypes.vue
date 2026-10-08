<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
const { t } = useI18n();

const tasks = [
  "autonomy",
  "companionship",
  "stimulation",
  "hygiene",
  "mobility",
  "nutrition",
  "home",
  "hospital",
];

// Las jornadas reutilizan los textos de advisory.adapt.groups
const groups = [
  {
    key: "schedule",
    items: ["fullTime", "morning", "afternoon", "hourly", "night", "weekends"],
  },
  { key: "service", items: ["liveInOut", "couples"] },
  { key: "cover", items: ["employeeLeave", "familyHoliday", "hospital"] },
];

const hourly = [
  "minimum",
  "followup",
  "admin",
  "professional",
  "technology",
  "assessment",
];
</script>

<template>
  <main>
    <!-- BANNER -->
    <section class="relative isolate flex min-h-[18rem] items-center overflow-hidden md:min-h-[26rem]">
      <NuxtImg
        src="/img/tipo_de_cuidador_bg.png"
        alt="Cuidadores y mayores compartiendo sonrisas"
        aria-hidden="true"
        width="1920"
        height="1280"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <div class="mx-auto w-full max-w-5xl px-4 py-12">
        <h1 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t("caregiver.title") }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
          {{ t("caregiver.subtitle") }}
        </p>
      </div>
    </section>

    <!-- A QUIÉN VA DIRIGIDO + OBJETIVO -->
    <section class="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            {{ t("caregiver.intro.title") }}
          </h2>
          <p class="mt-4 text-gray-600">{{ t("caregiver.intro.audience") }}</p>
          <p
            class="mt-6 rounded-xl border-l-4 border-blue-600 bg-blue-50 px-6 py-4 text-lg font-medium text-gray-800"
          >
            {{ t("caregiver.intro.goal") }}
          </p>
        </div>

        <NuxtImg
          src="/img/tipo_de_cuidador.jpg"
          alt="tipo_de_cuidador"
          width="800"
          height="1000"
          loading="lazy"
          class="h-full max-h-[30rem] w-full rounded-2xl object-cover shadow-lg lg:rounded-bl-3xl lg:rounded-tr-3xl"
        />
      </div>
    </section>

    <!-- TAREAS DE LA CUIDADORA -->
    <section class="bg-gray-50 py-12 md:py-16">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          {{ t("caregiver.tasks.title") }}
        </h2>

        <ul class="mt-8 grid gap-4 md:grid-cols-2">
          <li
            v-for="task in tasks"
            :key="task"
            class="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
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
                {{ t(`caregiver.tasks.items.${task}.title`) }}
              </h3>
              <p class="mt-1 text-gray-600">
                {{ t(`caregiver.tasks.items.${task}.text`) }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- JORNADAS (id para enlazar desde otras páginas) -->
    <section id="jornadas" class="mx-auto max-w-5xl scroll-mt-24 px-4 py-12 md:py-16">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        {{ t("caregiver.schedules.title") }}
      </h2>
      <p class="mt-2 text-gray-600">{{ t("caregiver.schedules.intro") }}</p>

      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <div
          v-for="group in groups"
          :key="group.key"
          class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-lg font-semibold text-gray-900">
            {{ t(`advisory.adapt.groups.${group.key}.title`) }}
          </h3>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-gray-600 marker:text-blue-600">
            <li v-for="item in group.items" :key="item">
              {{ t(`advisory.adapt.groups.${group.key}.items.${item}`) }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CUIDADO POR HORAS -->
    <section id="por-horas" class="scroll-mt-24 bg-blue-50 py-12 md:py-16">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          {{ t("caregiver.hourly.title") }}
        </h2>

        <ul class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(item, i) in hourly"
            :key="item"
            class="rounded-2xl bg-white p-6 shadow-sm"
          >
            <span class="text-3xl font-bold text-blue-600">
              {{ String(i + 1).padStart(2, "0") }}
            </span>
            <h3 class="mt-2 text-lg font-semibold text-gray-900">
              {{ t(`caregiver.hourly.items.${item}.title`) }}
            </h3>
            <p class="mt-1 text-gray-600">
              {{ t(`caregiver.hourly.items.${item}.text`) }}
            </p>
          </li>
        </ul>

        <div class="mt-10 text-center">
          <p class="text-xl font-semibold text-blue-800">
            {{ t("caregiver.cta.title") }}
          </p>
          <p class="mt-1 text-gray-700">{{ t("caregiver.cta.text") }}</p>
        </div>
      </div>
    </section>

    <ContactForm />
  </main>
</template>