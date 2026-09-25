<script setup>
import { Phone, Mail, MapPin } from "@lucide/vue";

const { tm, rt } = useI18n({ useScope: "global" });

const offices = computed(() => {
  const items = tm("footer.offices.items");
  if (!Array.isArray(items)) return []; // protección si los mensajes no están listos

  return items.map((o) => {
    const name = rt(o.name);
    const address = o.address ? rt(o.address) : null;

    // rt() + normalización a string: nunca pasar un objeto a :href
    const rawMaps = o.maps ? rt(o.maps) : null;
    const maps =
      typeof rawMaps === "string" && rawMaps
        ? rawMaps
        : address
          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
          : null;

    return { name, address, maps };
  });
});

const services = useServices();

const links = computed(() => {
  const items = tm("footer.links.items");
  return Array.isArray(items)
    ? items.map((l) => ({ label: rt(l.label), to: l.to }))
    : [];
});
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-12"
    >
      <!-- Columna 1: Logo + nombre -->
      <div class="flex flex-col gap-3">
        <img src="/logogva2.jpeg" alt="Logo Gran Vallès" class="w-32 h-auto" />
        <p class="text-sm">{{ $t("footer.companyName") }}</p>
        <a
          href="mailto:info@granvalles.es"
          class="flex items-center gap-2 text-sm hover:text-white transition-colors"
        >
          <Mail class="w-4 h-4" /> info@granvalles.es
        </a>
        <a
          href="tel:+34937261011"
          class="flex items-center gap-2 text-sm hover:text-white transition-colors"
        >
          <Phone class="w-4 h-4" /> 937261011
        </a>
      </div>

      <!-- Columna 2: Oficinas -->
      <div>
        <h3 class="text-white font-semibold mb-4">
          {{ $t("footer.offices.title") }}
        </h3>
        <ul class="flex flex-col gap-3">
          <li
            v-for="office in offices"
            :key="office.name"
            class="flex items-center gap-2 text-sm"
          >
            <MapPin class="w-4 h-4 shrink-0" />
            <a
              v-if="office.maps"
              :href="office.maps"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-100 hover:text-white transition-colors"
            >
              {{ office.name }}
            </a>
            <span v-else class="text-gray-100">{{ office.name }}</span>
          </li>
        </ul>
      </div>

      <!-- Columna 3: Servicios -->
      <div>
        <h3 class="text-white font-semibold mb-4">
          {{ $t("nav.services.title") }}
        </h3>
        <ul class="flex flex-col gap-2">
          <li v-for="service in services" :key="service.key">
            <NuxtLink
              :to="`/services/${service.key}`"
              class="text-sm hover:text-white transition-colors"
            >
              {{ service.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Enlaces legales -->
    <div class="border-t border-gray-700">
      <div
        class="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 sm:px-6 lg:px-8 py-4 text-xs"
      >
        <template v-for="(link, i) in links" :key="link.to">
          <NuxtLink :to="link.to" class="hover:text-white transition-colors">{{
            link.label
          }}</NuxtLink>
          <span v-if="i < links.length - 1" class="text-gray-600">|</span>
        </template>
      </div>
    </div>

    <div class="border-t border-gray-800 text-center text-xs py-4">
      © {{ new Date().getFullYear() }} {{ $t("footer.companyName") }}.
      {{ $t("footer.rights") }}
    </div>
  </footer>
</template>
