<script setup>
import { Phone, Globe, Menu, X, ChevronDown, Mail } from "@lucide/vue";
const { locale, locales, setLocale, t, tm, rt } = useI18n();

// --- Estado ---
const mobileOpen = ref(false); // panel del menú móvil/tablet abierto o cerrado
const servicesOpen = ref(false); // acordeón de "Servicios" dentro del panel móvil
const navRef = ref(null); // referencia al <nav> (para detectar clics fuera)

const telefono = ref("937261011");

// Lista de servicios compartida con el footer
const services = useServices();

// Idiomas disponibles, sin el que está activo ahora
const availableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value),
);

// --- Acciones del menú móvil ---
const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};

// Cambia el idioma y cierra el panel móvil
const changeLocale = (code) => {
  setLocale(code);
  closeMobile();
};

const closeMobile = () => {
  mobileOpen.value = false;
  servicesOpen.value = false;
};

// Cierra el panel móvil si se hace clic fuera del nav
const handleClickOutside = (e) => {
  if (mobileOpen.value && navRef.value && !navRef.value.contains(e.target)) {
    closeMobile();
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside),
);
</script>

<template>
  <nav ref="navRef" class="sticky top-0 z-50 bg-white shadow-sm">
    <!-- ===== BARRA SUPERIOR (siempre visible, escritorio y móvil) ===== -->
    <div
      class="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4"
    >
      <!-- Logo (escritorio y móvil) -->
      <NuxtLinkLocale
        to="/"
        class="shrink-0 w-56 sm:w-48 md:w-56 lg:w-72 xl:w-[28rem]"
        @click="closeMobile"
      >
        <img
          src="/logogva2.jpeg"
          alt="Logo Gran Vallès"
          class="w-full h-auto"
        />
      </NuxtLinkLocale>

      <!-- ===== ENLACES DEL MENÚ: SOLO ESCRITORIO (≥ lg) ===== -->
      <div class="hidden lg:flex items-center gap-6 xl:gap-10 text-lg font-semibold text-blue-900">
        <!-- Home -->
        <NuxtLinkLocale to="/" class="hover:text-blue-600 transition-colors">{{
          $t("nav.home")
        }}</NuxtLinkLocale>
        <!-- Servicios (con desplegable al pasar el ratón) -->
        <div class="relative group">
          <NuxtLinkLocale
            to="/services"
            class="hover:text-blue-600 transition-colors"
          >
            {{ $t("nav.services.title") }}
          </NuxtLinkLocale>
          <div
            class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 flex flex-col bg-white shadow-lg rounded-md p-2 top-full left-0 mt-1 min-w-[240px] border border-gray-100 z-50"
          >
            <NuxtLinkLocale
              v-for="service in services"
              :key="service.key"
              :to="`/services/${service.key}`"
              class="py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              {{ service.label }}
            </NuxtLinkLocale>
          </div>
        </div>
        <!-- Contacto -->
        <NuxtLinkLocale
          to="/contact"
          class="hover:text-blue-600 transition-colors"
          >{{ $t("nav.contact") }}
        </NuxtLinkLocale>
      </div>

      <!-- ===== ACCIONES: SOLO ESCRITORIO (≥ lg) ===== -->
      <div class="hidden lg:flex items-center gap-4 xl:gap-6">
        <!-- TODO: WhatsApp (versión escritorio), pendiente de activar -->
        <!-- <a
          :href="`https://wa.me/34${telefono}`"
          target="_blank"
          class="shrink-0 w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Contactar por WhatsApp"
        >
          <img
            src="/img/whatsapp_logo.png"
            alt="WhatsApp"
            class="w-full h-full object-contain"
          />
        </a> -->

        <!-- Email y teléfono (escritorio) -->
        <div
          class="border-1 border-blue-600 text-blue-600 px-4 py-2 rounded flex flex-col font-semibold"
        >
          <a href="mailto:info@granvalles.es" class="flex gap-3 items-center">
            <Mail class="w-4 h-4" /> info@granvalles.es
          </a>
          <a :href="`tel:+34${telefono}`" class="flex gap-3 items-center">
            <Phone class="w-4 h-4" /> 937261011
          </a>
        </div>

        <!-- Botón "Más información" (escritorio) -->
        <NuxtLinkLocale
          to="/contact"
          class="bg-blue-500 text-white border border-blue-700 px-4 py-2 rounded whitespace-nowrap hover:bg-blue-600 transition-colors"
        >
          {{ $t("nav.info") }}
        </NuxtLinkLocale>

        <!-- Selector de idioma (escritorio, desplegable al pasar el ratón) -->
        <div class="relative group">
          <button
            class="flex items-center gap-2 px-3 py-2 rounded border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Globe class="w-4 h-4" />
            {{ locale.toUpperCase() }}
          </button>
          <div
            class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 flex flex-col bg-white shadow-lg rounded-md p-2 top-full right-0 mt-1 min-w-[120px] border border-gray-100"
          >
            <button
              v-for="l in availableLocales"
              :key="l.code"
              @click="setLocale(l.code)"
              class="text-left py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {{ l.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- TODO: WhatsApp (versión móvil/tablet < lg, fuera de la hamburguesa), pendiente de activar -->
      <!-- <a
        :href="`https://wa.me/34${telefono}`"
        target="_blank"
        class="lg:hidden shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="/img/whatsapp_logo.png"
          alt="WhatsApp"
          class="w-full h-full object-contain"
        />
      </a> -->

      <!-- ===== BOTÓN HAMBURGUESA: SOLO MÓVIL/TABLET (< lg) ===== -->
      <button
        class="lg:hidden p-2 shrink-0"
        @click.stop="toggleMobile"
        aria-label="Menú"
      >
        <X v-if="mobileOpen" class="w-6 h-6" />
        <Menu v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- ===== PANEL DEL MENÚ: SOLO MÓVIL/TABLET (< lg), se superpone sin empujar el contenido ===== -->
    <div
      v-if="mobileOpen"
      class="absolute top-full left-0 right-0 z-50 bg-white shadow-xl border-t border-gray-200 max-h-[calc(100vh-100%)] overflow-y-auto lg:hidden"
    >
      <div class="flex flex-col p-4 gap-1">
        <!-- Home (móvil) -->
        <NuxtLinkLocale
          to="/"
          @click="closeMobile"
          class="py-3 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          {{ $t("nav.home") }}
        </NuxtLinkLocale>

        <!-- Servicios (móvil): botón que abre/cierra el acordeón -->
        <button
          @click="servicesOpen = !servicesOpen"
          class="flex items-center justify-between py-3 px-3 rounded hover:bg-blue-50 transition-colors"
        >
          {{ $t("nav.services.title") }}
          <ChevronDown
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': servicesOpen }"
          />
        </button>
        <!-- Lista de servicios (móvil, visible al abrir el acordeón) -->
        <div
          v-if="servicesOpen"
          class="flex flex-col pl-4 border-l-2 border-blue-100 ml-3"
        >
          <NuxtLinkLocale
            v-for="service in services"
            :key="service.key"
            :to="`/services/${service.key}`"
            @click="closeMobile"
            class="py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            {{ service.label }}
          </NuxtLinkLocale>
        </div>

        <!-- Contacto (móvil) -->
        <NuxtLinkLocale
          to="/contact"
          @click="closeMobile"
          class="py-3 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          {{ $t("nav.contact") }}
        </NuxtLinkLocale>

        <!-- Email (móvil) -->
        <a
          href="mailto:info@granvalles.es"
          class="mt-3 border border-blue-600 text-blue-600 px-4 py-3 rounded flex gap-2 justify-center"
        >
          <Mail class="w-4 h-4" /> info@granvalles.es
        </a>
        <!-- Teléfono (móvil) -->
        <a
          :href="`tel:+34${telefono}`"
          class="mt-2 bg-blue-600 text-white px-4 py-3 rounded flex gap-2 justify-center"
        >
          <Phone class="w-4 h-4" /> 937261011
        </a>

        <!-- Selector de idioma (móvil): botones directos, sin desplegable -->
        <div class="flex gap-2 mt-3 mb-2 justify-center">
          <button
            v-for="l in availableLocales"
            :key="l.code"
            @click="changeLocale(l.code)"
            class="flex items-center gap-2 px-4 py-2 rounded border border-gray-300 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            <Globe class="w-4 h-4" />
            {{ l.name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>