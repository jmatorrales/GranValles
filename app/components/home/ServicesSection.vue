<template>
<div
      class="p-5 flex justify-center"
    >
      <div class="pt-10 w-full max-w-4xl">
        <h2
          class="text-3xl md:text-5xl font-bold text-center mb-6 text-indigo-950"
        >
          {{ $t("home.services") }}
        </h2>
        <!-- grid de servicios se ofrece -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <NuxtLink to="/services/advice" 
            class="relative w-full max-w-md rounded-md overflow-hidden">
            <img
              src="/img/asesoria.jpg"
              alt="Asesoramiento"
              class="w-full h-auto object-cover"
            />
            <p
              class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-xl"
            >
              {{ $t("nav.services.advice") }}
            </p>
          </NuxtLink>
          <NuxtLink to="/services/staffSelection" 
            class="relative w-full max-w-md rounded-md overflow-hidden">
            <img
              src="/img/seleccion_de_personal.png"
              alt="Seleccion de personal"
              class="w-full h-auto object-cover"
            />
            <p
              class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-xl"
            >
              {{ $t("nav.services.staffSelection") }}
            </p>
          </NuxtLink>
          <NuxtLink to="/services/caregiverTypes" 
          class="relative w-full max-w-md rounded-md overflow-hidden">
            <img
              src="/img/tipo_de_cuidador.jpg"
              alt="Tipos de cuidadora"
              class="w-full h-auto object-cover"
            />
            <p
              class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-xl"
            >
              {{ $t("nav.services.caregiverTypes") }}
            </p>
          </NuxtLink>
          <NuxtLink to="/services/followUp" 
            class="relative w-full max-w-md rounded-md overflow-hidden">
            <img
              src="/img/seguimiento_y_suplencia.jpg"
              alt="Seguimiento y suplencias"
              class="w-full h-auto object-cover"
            />
            <p
              class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-xl"
            >
            {{ $t("nav.services.followUp") }}
            </p>
          </NuxtLink>
          <NuxtLink to="/services/dependency" 
            class="relative w-full max-w-md rounded-md overflow-hidden">
            <img
              src="/img/trae_tu_cuidador.jpg"
              alt="Trae tu cuidador"
              class="w-full h-auto object-cover"
            />
            <p
              class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-xl"
            >
              {{ $t("nav.services.dependency") }}
            </p>
          </NuxtLink>
          <NuxtLink to="/services/bringCaregiver" 
            class="relative w-full max-w-md rounded-md overflow-hidden">
            <img
              src="/img/ayuda_a_la_dependencia.jpg"
              alt="Ayuda a la dependencia"
              class="w-full h-auto object-cover"
            />
            <p
              class="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-xl"
            >
              {{ $t("nav.services.bringCaregiver") }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
</template>
<script setup>
</script>