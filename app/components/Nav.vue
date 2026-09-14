<script setup>
import { Phone, Globe, Menu, X, ChevronDown, Mail } from '@lucide/vue'
const { locale, locales, setLocale, t, tm, rt } = useI18n()

const mobileOpen = ref(false)
const servicesOpen = ref(false)
const navRef = ref(null)

const services = computed(() => {
  const all = tm('nav.services')
  return Object.entries(all)
    .filter(([key]) => key !== 'title')
    .map(([key, value]) => ({ key, label: rt(value) }))
    .filter(s => s.label && s.label !== s.key) // descarta keys sin traducción
})

const availableLocales = computed(() =>
  locales.value.filter(l => l.code !== locale.value)
)

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

const changeLocale = (code) => {
  setLocale(code)
  closeMobile()
}

const closeMobile = () => {
  mobileOpen.value = false
  servicesOpen.value = false
}

const handleClickOutside = (e) => {
  if (mobileOpen.value && navRef.value && !navRef.value.contains(e.target)) {
    closeMobile()
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <nav ref="navRef" class="sticky top-0 z-50 bg-white shadow-sm">

    <!-- Barra superior -->
    <div class="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">

      <!-- Logo: más grande en todas las pantallas -->
      <NuxtLink to="/" class="shrink-0 w-40 sm:w-48 md:w-56 lg:w-64" @click="closeMobile">
        <img src="/logogva2.jpeg" alt="Logo Gran Vallès" class="w-full h-auto" />
      </NuxtLink>

      <!-- ===== MENÚ ESCRITORIO (≥ lg) ===== -->
      <div class="hidden lg:flex items-center gap-6 xl:gap-10">
        <NuxtLink to="/" class="hover:text-blue-600 transition-colors">{{ $t('nav.home') }}</NuxtLink>

        <div class="relative group">
          <NuxtLink to="/services" class="hover:text-blue-600 transition-colors">
            {{ $t('nav.services.title') }}
          </NuxtLink>
          <div class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100
                      transition-all duration-200 flex flex-col bg-white shadow-lg rounded-md
                      p-2 top-full left-0 mt-1 min-w-[240px] border border-gray-100 z-50">
            <NuxtLink v-for="service in services" :key="service.key" :to="`/services/${service.key}`"
              class="py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap">
              {{ service.label }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/" class="hover:text-blue-600 transition-colors">{{ $t('nav.contact') }}</NuxtLink>
      </div>

      <!-- ===== ACCIONES ESCRITORIO (≥ lg) ===== -->
      <div class="hidden lg:flex items-center gap-4 xl:gap-6">
        <!-- Email visible desde lg (antes solo en xl) -->
        <a href="mailto:info@granvalles.es"
          class="flex items-center gap-2 text-blue-600 hover:underline hover:underline-offset-2">
          <Mail class="w-4 h-4" /> info@granvalles.es
        </a>
        <a href="tel:+34937261011"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex gap-2 whitespace-nowrap">
          <Phone class="w-4 h-4" /> 937261011
        </a>
        <p class="bg-blue-500 text-white border border-blue-700 px-4 py-2 rounded whitespace-nowrap">
          {{ $t('nav.info') }}
        </p>

        <!-- Idioma -->
        <div class="relative group">
          <button class="flex items-center gap-2 px-3 py-2 rounded border border-gray-300
                         hover:bg-gray-50 transition-colors">
            <Globe class="w-4 h-4" />
            {{ locale.toUpperCase() }}
          </button>
          <div class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100
                      transition-all duration-200 flex flex-col bg-white shadow-lg rounded-md
                      p-2 top-full right-0 mt-1 min-w-[120px] border border-gray-100">
            <button v-for="l in availableLocales" :key="l.code" @click="setLocale(l.code)"
              class="text-left py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors">
              {{ l.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- ===== HAMBURGUESA (< lg) ===== -->
      <button class="lg:hidden p-2 shrink-0" @click.stop="toggleMobile" aria-label="Menú">
        <X v-if="mobileOpen" class="w-6 h-6" />
        <Menu v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- ===== TODO: BORRAR FONDO OSCURECIDO (click para cerrar) ===== -->
    <!-- <div v-if="mobileOpen" class="fixed inset-0 bg-black/50 z-40 lg:hidden" @click="closeMobile"></div> -->

    <!-- ===== PANEL OVERLAY (< lg): se superpone, no empuja ===== -->
    <div v-if="mobileOpen" class="absolute top-full left-0 right-0 z-50 bg-white shadow-xl border-t border-gray-200
             max-h-[calc(100vh-100%)] overflow-y-auto lg:hidden">
      <div class="flex flex-col p-4 gap-1">

        <NuxtLink to="/" @click="closeMobile"
          class="py-3 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors">
          {{ $t('nav.home') }}
        </NuxtLink>

        <button @click="servicesOpen = !servicesOpen"
          class="flex items-center justify-between py-3 px-3 rounded hover:bg-blue-50 transition-colors">
          {{ $t('nav.services.title') }}
          <ChevronDown class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': servicesOpen }" />
        </button>
        <div v-if="servicesOpen" class="flex flex-col pl-4 border-l-2 border-blue-100 ml-3">
          <NuxtLink v-for="service in services" :key="service.key" :to="`/services/${service.key}`"
            @click="closeMobile" class="py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors">
            {{ service.label }}
          </NuxtLink>
        </div>

        <!-- <NuxtLink to="/" @click="closeMobile"
          class="py-3 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors">
          {{ $t('nav.dependency') }}
<<<<<<< HEAD
        </NuxtLink>
        <NuxtLink to="/contact" @click="closeMobile"
=======
        </NuxtLink> -->
        <NuxtLink to="/" @click="closeMobile"
>>>>>>> 13a57fc3b1dc4e0ca58444ee2333a06162f35393
          class="py-3 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors">
          {{ $t('nav.contact') }}
        </NuxtLink>

        <a href="mailto:info@granvalles.es"
          class="mt-3 border border-blue-600 text-blue-600 px-4 py-3 rounded flex gap-2 justify-center">
          <Mail class="w-4 h-4" /> info@granvalles.es
        </a>
        <a href="tel:+34937261011" class="mt-2 bg-blue-600 text-white px-4 py-3 rounded flex gap-2 justify-center">
          <Phone class="w-4 h-4" /> 937261011
        </a>

        <div class="flex gap-2 mt-3 mb-2 justify-center">
          <button v-for="l in availableLocales" :key="l.code" @click="changeLocale(l.code)" class="flex items-center gap-2 px-4 py-2 rounded border border-gray-300
                   hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <Globe class="w-4 h-4" />
            {{ l.name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>