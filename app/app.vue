<script setup>
  const { t } = useI18n()

  useSeoMeta({
    title: t('seo.default.title'),
    description: t('seo.default.description')
  })

  console.log('TITLE:', t('seo.default.title'))
</script>
<template>
  <div>
    <!-- anuncia los cambios de ruta a lectores de pantalla. -->
    <NuxtRouteAnnouncer />
    <Nav />
    <NuxtPage />
  </div>
</template>
