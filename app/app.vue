<script setup>
const { t, locale } = useI18n();

useHead({
  htmlAttrs: { lang: locale },
});

useSeoMeta({
  title: t("seo.default.title"),
  description: t("seo.default.description"),
});
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <!-- anuncia los cambios de ruta a lectores de pantalla. -->
    <NuxtRouteAnnouncer />
    <Nav />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
    <CookiesBanner />
  </div>
</template>
