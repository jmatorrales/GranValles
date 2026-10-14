<!-- components/home/ReviewsSection.vue -->
<script setup>
const { t } = useI18n();

useHead({
  script: [{ src: "https://elfsightcdn.com/platform.js", async: true }],
});

// Cambia las rutas de las imágenes y las URLs por las reales
const partners = [
  { name: "Momentum project", img: "/img/partners/MomentumProject.png", url: "https://www.fundacionseres.org/Paginas/Campus/BuenasPracticas.aspx?IDe=12" },
  { name: "Generalitat SASF", img: "/img/partners/generalitatSasf.png", url: "https://dretssocials.gencat.cat/ca/inici" },
  { name: "Next Generation", img: "/img/partners/NextGenerationCatalunya.jpg", url: "https://fonseuropeus.gencat.cat/ca/next-generation-catalunya/" },
  { name: "Generalitat de Catalunya", img: "/img/partners/generalitat.png", url: "https://web.gencat.cat/ca/inici" },
  { name: "Sistema Nacional de Empleo", img: "/img/partners/Logotipo_del_Sistema_Nacional_de_Empleo_SNE_Espana.jpg", url: "https://www.sistemanacionalempleo.es/HomeSne" },
];
</script>

<template>
  <div class="p-15">
    <!-- Colaboradores -->
    <section class="py-16">
      <h2 class="text-center text-2xl font-semibold mb-8">
        {{ t("home.partners.title") }}
      </h2>

      <ul class="flex flex-wrap items-center justify-center gap-8">
        <li v-for="partner in partners" :key="partner.name">
          <a
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="partner.name"
          >
            <img
              :src="partner.img"
              :alt="partner.name"
              loading="lazy"
              class="h-16 w-auto object-contain transition hover:scale-105"
            />
          </a>
        </li>
      </ul>
    </section>
    <!-- Reviews -->
     <div
      class="elfsight-app-f6f23bdf-9a52-4779-9689-11873bfa54d8"
      data-elfsight-app-lazy
    ></div>
  </div>
</template>