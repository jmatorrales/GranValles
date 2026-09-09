<script setup>
import { Phone } from '@lucide/vue'
const { locale, locales, setLocale } = useI18n()
</script>
<template>
  <nav class="flex flex-row p-5 items-center justify-between bg-white sticky top-0 shadow-sm z-50">
    <!-- logo empresa -->
    <NuxtLink to="/" class="w-2/5">
      <img src="/logogva2.jpeg" alt="Logo Gran Vallès" />
    </NuxtLink>
    <div class="flex gap-10">
      <NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink>
      <!-- to="/servicios" -->
      <NuxtLink to="/">{{ $t('nav.services') }}</NuxtLink>
      <NuxtLink to="/">{{ $t('nav.contact') }}</NuxtLink>
    </div>
    <div class="flex gap-10">
      <a href="tel:+34937261011" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex gap-2">
        <Phone /> 937261011
      </a>
      <p class="bg-blue-500 text-white border border-blue-700 px-4 py-2 rouded flex">Solicita información</p>
      <select :value="locale" @change="setLocale($event.target.value)">
        <option v-for="l in locales" :key="l.code" :value="l.code">
          {{ l.name }}
        </option>
      </select>
    </div>
  </nav>
</template>