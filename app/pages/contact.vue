<script setup>
const { t } = useI18n()
</script>

<template>
  <h1>{{ t('nav.contact') }}</h1>
  <!-- resto del contenido -->
   <ContactForm/>
</template>