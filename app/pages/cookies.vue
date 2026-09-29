<script setup>
// pages/avis-cookies.vue
const { t, tm, rt } = useI18n()

// computed para mantener la reactividad al cambiar de idioma
const introParagraphs = computed(() => tm('cookies.intro.paragraphs'))
const sections = computed(() => tm('cookies.sections'))

useHead(() => ({
  title: t('cookies.seo.title'),
  meta: [{ name: 'description', content: t('cookies.seo.description') }]
}))
</script>

<template>
  <article class="mx-auto max-w-3xl px-4 py-12 text-gray-700">
    <h1 class="text-3xl font-bold text-gray-900">{{ t('cookies.title') }}</h1>

    <!-- Introducción: identificación del titular (art. 10 LSSI) -->
    <div class="mt-10 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
      <p v-for="(p, i) in introParagraphs" :key="'intro-' + i">{{ rt(p) }}</p>
    </div>

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