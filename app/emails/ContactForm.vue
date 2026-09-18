<script setup lang="ts">
import { Html, Head, Preview, Body, Container, Section, Img, Text, Hr, Tailwind } from '@vue-email/components'

defineProps<{
  nombre: string
  phone: string
  email?: string
  comments?: string
}>()
</script>

<template>
  <Tailwind>
    <Html>
      <Head />
      <Preview>Nuevo contacto recibido desde el formulario web</Preview>
      <Body class="bg-gray-100 font-sans py-6">
        <Container class="bg-white rounded-lg mx-auto max-w-xl p-6">
          <!-- <Section class="text-center mb-4">
            <Img src="https://granvalles.es/wp-content/uploads/2022/03/logo-gran-valles.png" width="140" alt="Logo empresa" class="mx-auto" />
          </Section> 
          <Hr class="my-4" /> -->
          <Text class="text-xl font-bold text-blue-950 mb-2">Nuevo contacto recibido</Text>
          <Section class="bg-gray-50 rounded-md p-4">
            <Text class="text-sm text-gray-500 mb-1">Nombre</Text>
            <Text class="text-base font-medium mb-3">{{ nombre }}</Text>
            <Text class="text-sm text-gray-500 mb-1">Teléfono</Text>
            <Text class="text-base font-medium mb-3">{{ phone }}</Text>
            <Text v-if="email" class="text-sm text-gray-500 mb-1">Email</Text>
            <Text v-if="email" class="text-base font-medium mb-3">{{ email }}</Text>
            <Text v-if="comments" class="text-sm text-gray-500 mb-1">Comentario</Text>
            <Text v-if="comments" class="text-base">{{ comments }}</Text>
          </Section>
          <Hr class="my-4" />
          <Text class="text-xs text-gray-400 text-center">Este correo se generó automáticamente desde el formulario de contacto de la web.</Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
</template>