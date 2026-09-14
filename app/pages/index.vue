<template>
  <div>

    <!-- Mensaje de bienvenida -->
    <div class="h-[80vh] flex justify-center items-center p-20 gap-10">
      <!-- texto -->
      <div class="w-1/3 flex flex-col gap-2">
        <h1 class="whitespace-pre-line text-5xl font-bold text-indigo-950">
          {{ $t('home.msg_welcome') }}
        </h1>
        <div class="flex items-center gap-4">
          <div class="w-12 h-0.5 bg-black"></div>
          <p class="text-base text-2xl text-gray-500">{{ $t('home.msg_welcome_sub') }}</p>
        </div>
      </div>

      <!-- img -->
      <div>
        <NuxtImg src="/img/cuidador_1.jpg" alt="Cuidador acompañando a una persona mayor en su domicilio" width="1920"
          height="1280" class="w-[32rem] rounded-tr-3xl rounded-bl-3xl" />
      </div>
    </div>

    <!-- Formulario solicitud de información -->
    <div class="h-[70vh] bg-blue-800">
      <p class="text-center text-white text-3xl p-8">Solicita información</p>
      <div>
        
      </div>
    </div>
    <!--  -->
    <div class="h-[200vh]">

    </div>
  </div>
</template>

<script setup>
</script>