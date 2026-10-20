<template>
  <!-- Contenedor principal: columna en móvil, fila en desktop -->
  <div
    class="w-full lg:min-h-[80vh] flex flex-col md:flex-row justify-center items-center md:p-0 lg:p-4 sm:p-6 md:p-20 gap-8 md:gap-10"
  >
    <!-- Bloque de texto (solo visible en desktop, en móvil el texto va sobre la imagen) -->
    <div class="hidden md:flex w-1/3 flex-col gap-2">
      <h1 class="whitespace-pre-line text-5xl font-bold text-indigo-950">
        <span class="block text-8xl text-blue-800 leading-none pb-4">{{
          $t("home.welcomeHighlight")
        }}</span>
        {{ $t("home.welcomeMessage") }}
      </h1>
      <div class="flex items-center gap-4">
        <div class="w-12 h-0.5 bg-black"></div>
        <h2 class="text-2xl text-gray-500">
          {{ $t("home.welcomeSubtitle") }}
        </h2>
      </div>
    </div>

    <!-- Imagen -->
    <div
      class="relative w-full md:w-auto aspect-[4/5] sm:aspect-[3/2] md:aspect-auto overflow-hidden lg:rounded-tr-3xl lg:rounded-bl-3xl"
    >
      <!-- aspect-ratio fijo en móvil/tablet para que la imagen tenga altura predecible -->
      <NuxtImg
        src="/img/cuidador_1.png"
        alt="Cuidador acompañando a una persona mayor en su domicilio"
        width="1920"
        height="1280"
        class="w-full h-full md:w-[32rem] md:h-auto object-cover"
      />
      <!-- Overlay de texto solo en móvil (en desktop el texto ya está aparte, a la izquierda) -->
      <div
        class="md:hidden absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-4 sm:px-6 bg-black/40"
      >
        <h1
          class="whitespace-pre-line text-2xl sm:text-3xl font-bold text-white"
        >
          <span class="block text-6xl text-blue-900 leading-none pb-2">{{
            $t("home.welcomeHighlight")
          }}</span>
          {{ $t("home.welcomeMessage") }}
        </h1>
        <h2 class="text-base sm:text-lg text-gray-200">
          {{ $t("home.welcomeSubtitle") }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup></script>
