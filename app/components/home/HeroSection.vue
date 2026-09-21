<template>
    <div
      class="min-h-[80vh] flex flex-col md:flex-row justify-center items-center p-6 md:p-20 gap-8 md:gap-10"
    >
      <div class="hidden md:flex w-1/3 flex-col gap-2">
        <h1 class="whitespace-pre-line text-5xl font-bold text-indigo-950">
          {{ $t("home.welcomeMessage") }}
        </h1>
        <div class="flex items-center gap-4">
          <div class="w-12 h-0.5 bg-black"></div>
          <h2 class="text-2xl text-gray-500">
            {{ $t("home.welcomeSubtitle") }}
          </h2>
        </div>
      </div>

      <!-- img con parallax sutil -->
      <div
        ref="parallaxTarget"
        class="relative w-full md:w-auto overflow-hidden rounded-tr-3xl rounded-bl-3xl"
      >
        <NuxtImg
          src="/img/cuidador_1.jpg"
          alt="Cuidador acompañando a una persona mayor en su domicilio"
          width="1920"
          height="1280"
          class="w-full md:w-[32rem] object-cover"
        />
        <div
          class="md:hidden absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 bg-black/40"
        >
          <h1 class="whitespace-pre-line text-3xl font-bold text-white">
            {{ $t("home.welcomeMessage") }}
          </h1>
          <h2 class="text-lg text-gray-200">
            {{ $t("home.welcomeSubtitle") }}
          </h2>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>