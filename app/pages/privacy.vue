<script setup>
// pages/politica-privacitat.vue (o como se llame tu ruta)
const { t, tm, rt } = useI18n()

// computed para mantener la reactividad al cambiar de idioma
const summaryRows = computed(() => tm('privacy.summary.rows'))
const introParagraphs = computed(() => tm('privacy.intro.paragraphs'))
const commitments = computed(() => tm('privacy.intro.commitments'))
const sections = computed(() => tm('privacy.sections'))

useHead(() => ({
  title: t('privacy.seo.title'),
  meta: [{ name: 'description', content: t('privacy.seo.description') }]
}))
</script>

<template>
  <article class="mx-auto max-w-3xl px-4 py-12 text-gray-700">
    <h1 class="text-3xl font-bold text-gray-900">{{ t('privacy.title') }}</h1>

    <!-- Tabla resumen de protección de datos -->
    <section class="mt-10 overflow-hidden rounded-xl border border-gray-200">
      <h2 class="bg-gray-50 px-5 py-4 font-semibold text-gray-900">
        {{ t('privacy.summary.title') }}
      </h2>
      <dl>
        <div
          v-for="row in summaryRows"
          :key="rt(row.label)"
          class="grid gap-1 border-t border-gray-200 px-5 py-4 first:border-t-0 sm:grid-cols-3 sm:gap-4"
        >
          <dt class="font-semibold text-gray-900">{{ rt(row.label) }}</dt>
          <dd class="sm:col-span-2">
            <ul v-if="row.items.length > 1" class="list-disc space-y-1 pl-5">
              <li v-for="(item, i) in row.items" :key="i">{{ rt(item) }}</li>
            </ul>
            <template v-else>{{ rt(row.items[0]) }}</template>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Introducción -->
    <p v-for="(p, i) in introParagraphs" :key="'intro-' + i" class="mt-6">{{ rt(p) }}</p>

    <h2 class="mt-8 font-semibold text-gray-900">{{ t('privacy.intro.commitmentTitle') }}</h2>
    <ul class="mt-3 list-disc space-y-2 pl-5">
      <li v-for="(c, i) in commitments" :key="'c-' + i">{{ rt(c) }}</li>
    </ul>

    <p class="mt-6">{{ t('privacy.intro.closing') }}</p>

    <!-- Apartados -->
    <section
      v-for="section in sections"
      :key="rt(section.id)"
      :id="rt(section.id)"
      class="mt-12 scroll-mt-24"
    >
      <h2 class="text-xl font-semibold text-gray-900">{{ rt(section.heading) }}</h2>

      <p v-for="(p, i) in section.paragraphs" :key="'p-' + i" class="mt-4">{{ rt(p) }}</p>

      <ul v-if="section.list.length" class="mt-4 list-disc space-y-2 pl-5">
        <li v-for="(item, i) in section.list" :key="'l-' + i">{{ rt(item) }}</li>
      </ul>

      <p v-for="(p, i) in section.after" :key="'a-' + i" class="mt-4">{{ rt(p) }}</p>
    </section>
  </article>
</template>