<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
const { t } = useI18n();

const stats = ["changes", "cost", "monthly"];
const guarantees = ["followup", "changes", "substitute"];
const reasons = ["leave", "holidays", "other"];

// Las modalidades reutilizan los textos de advisory.adapt
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
    <!-- BANNER -->
    <section class="relative isolate flex min-h-[18rem] items-center overflow-hidden md:min-h-[26rem]">
      <NuxtImg
        src="/img/seguimiento_bg.png"
        alt=""
        aria-hidden="true"
        width="1920"
        height="1280"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <div class="mx-auto w-full max-w-5xl px-4 py-12">
        <h1 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t("followup.title") }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
          {{ t("followup.subtitle") }}
        </p>
      </div>
    </section>

    <!-- CIFRAS -->
    <section class="border-b border-gray-200 bg-white">
      <dl class="mx-auto grid max-w-5xl gap-6 px-4 py-8 text-center sm:grid-cols-3">
        <div v-for="stat in stats" :key="stat">
          <dt class="text-4xl font-bold text-blue-700">
            {{ t(`followup.stats.${stat}.value`) }}
          </dt>
          <dd class="mt-1 text-gray-600">
            {{ t(`followup.stats.${stat}.label`) }}
          </dd>
        </div>
      </dl>
    </section>

    <!-- GARANTÍAS: lista + imagen -->
    <section class="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            {{ t("followup.guarantees.title") }}
          </h2>
          <p class="mt-3 text-gray-600">{{ t("followup.intro") }}</p>

          <ul class="mt-6 space-y-5">
            <li v-for="item in guarantees" :key="item" class="flex gap-4">
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
                  {{ t(`followup.guarantees.items.${item}.title`) }}
                </h3>
                <p class="text-gray-600">
                  {{ t(`followup.guarantees.items.${item}.text`) }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <NuxtImg
          src="/img/seguimiento_y_suplencia.jpg"
          alt="Seguimiento y suplencia"
          width="800"
          height="1000"
          loading="lazy"
          class="h-full max-h-[34rem] w-full rounded-2xl object-cover shadow-lg lg:rounded-bl-3xl lg:rounded-tr-3xl"
        />
      </div>
    </section>

    <!-- SUPLENCIAS -->
    <section class="bg-blue-50 py-12 md:py-16">
      <div class="mx-auto max-w-5xl px-4 text-center">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          {{ t("followup.substitutes.title") }}
        </h2>
        <p class="mx-auto mt-3 max-w-3xl text-gray-700">
          {{ t("followup.substitutes.text") }}
        </p>

        <ul class="mt-8 flex flex-wrap justify-center gap-3">
          <li
            v-for="reason in reasons"
            :key="reason"
            class="rounded-full border border-blue-200 bg-white px-5 py-2 font-medium text-blue-800 shadow-sm"
          >
            {{ t(`followup.substitutes.reasons.${reason}`) }}
          </li>
        </ul>
      </div>
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
            <ul class="mt-3 list-disc space-y-1.5 pl-5 text-gray-600 marker:text-blue-600">
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