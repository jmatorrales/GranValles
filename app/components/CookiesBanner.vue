<script setup>
// Banner simple: aceptar / rechazar, persistido en localStorage
const visible = ref(false);

const CONSENT_KEY = "cookie_consent";

onMounted(() => {
  // Solo se muestra si el usuario aún no ha decidido
  const consent = localStorage.getItem(CONSENT_KEY);
  if (!consent) visible.value = true;
});

const accept = () => {
  localStorage.setItem(CONSENT_KEY, "accepted");
  visible.value = false;
  // TODO: aquí activar scripts de analítica/marketing si los hay
};

const reject = () => {
  localStorage.setItem(CONSENT_KEY, "rejected");
  visible.value = false;
};
</script>

<template>
  <div
    v-if="visible"
    class="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-lg"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4"
    >
      <p
        class="text-sm text-gray-700 text-justify hyphens-auto sm:text-left sm:hyphens-none"
      >
        {{ $t("cookies.text") }}
        <NuxtLinkLocale to="/privacy" class="underline hover:text-blue-600">
          {{ $t("cookies.link") }}
        </NuxtLinkLocale>
      </p>
      <div class="flex gap-3 shrink-0">
        <button
          @click="reject"
          class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
        >
          {{ $t("cookies.reject") }}
        </button>
        <button
          @click="accept"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
        >
          {{ $t("cookies.accept") }}
        </button>
      </div>
    </div>
  </div>
</template>
