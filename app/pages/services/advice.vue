<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
const { t } = useI18n();

const tasks = [
  "socialSecurity",
  "accountCode",
  "contract",
  "payroll",
  "substitutes",
  "replacement",
];

const groups = [
  {
    key: "schedule",
    items: ["fullTime", "morning", "afternoon", "hourly", "night", "weekends"],
  },
  { key: "service", items: ["liveInOut", "couples"] },
  { key: "cover", items: ["employeeLeave", "familyHoliday", "hospital"] },
];
</script>

<template>
  <main>
    <!-- BANNER: imagen de fondo + texto encima -->
    <section class="relative isolate flex min-h-[18rem] items-center overflow-hidden md:min-h-[26rem]">
      <NuxtImg
        src="/img/Asesoria_bg.jpg"
        alt=""
        aria-hidden="true"
        width="1920"
        height="1280"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <!-- Capa oscura para que el texto se lea bien -->
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <div class="mx-auto w-full max-w-5xl px-4 py-12">
        <h1 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t("advisory.title") }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
          {{ t("advisory.subtitle") }}
        </p>
      </div>
    </section>

    <!-- TRÁMITES: lista + imagen -->
    <section id="asesoramiento" class="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p class="text-gray-600">{{ t("advisory.intro") }}</p>

          <ul class="mt-6 space-y-5">
            <li v-for="task in tasks" :key="task" class="flex gap-4">
              <!-- Icono check -->
              <span
                class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
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
                  {{ t(`advisory.tasks.${task}.title`) }}
                </h3>
                <p class="text-gray-600">
                  {{ t(`advisory.tasks.${task}.text`) }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Imagen: debajo de la lista en móvil, a la derecha en escritorio -->
        <NuxtImg
          src="/img/asesoria.jpg"
          alt=""
          width="800"
          height="1000"
          loading="lazy"
          class="h-full max-h-[34rem] w-full rounded-2xl object-cover shadow-lg lg:rounded-bl-3xl lg:rounded-tr-3xl lg:rounded-br-2xl lg:rounded-tl-2xl"
        />
      </div>

      <!-- Compromiso destacado -->
      <p
        class="mt-12 rounded-xl border-l-4 border-emerald-600 bg-emerald-50 px-6 py-4 text-lg font-semibold italic text-gray-800"
      >
        {{ t("advisory.commitment") }}
      </p>
    </section>

    <!-- MODALIDADES -->
    <section class="bg-gray-50 py-12 md:py-16">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          {{ t("advisory.adapt.title") }}
        </h2>
        <p class="mt-2 text-gray-600">{{ t("advisory.adapt.intro") }}</p>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <div
            v-for="group in groups"
            :key="group.key"
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 class="text-lg font-semibold text-gray-900">
              {{ t(`advisory.adapt.groups.${group.key}.title`) }}
            </h3>
            <ul class="mt-3 list-disc space-y-1.5 pl-5 text-gray-600 marker:text-emerald-600">
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