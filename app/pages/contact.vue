<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
const { t, tm, rt } = useI18n()

const offices = computed(() =>
  tm('footer.offices.items').map((o) => ({
    name: rt(o.name),
    address: o.address ? rt(o.address) : null,
    maps: o.maps ? rt(o.maps) : null,
    alert: o.alert ? rt(o.alert) : null,
  }))
)
</script>

<template>
  <ContactForm />

  <section class="mx-auto max-w-6xl px-4 py-12">
    <h2 class="mb-6 text-2xl font-semibold">
      {{ t('footer.offices.title') }}
    </h2>

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="o in offices" :key="o.name" class="rounded-xl border p-4">
        <h3 class="font-semibold">{{ o.name }}</h3>

        <p v-if="o.address" class="mt-1">{{ o.address }}</p>

        <p v-if="o.alert" class="mt-1 text-sm font-medium text-amber-600">
          {{ o.alert }}
        </p>

        <a
          v-if="o.maps"
          :href="o.maps"
          target="_blank"
          rel="noopener"
          class="mt-2 inline-block underline"
        >
          {{ t('footer.offices.viewMap') }}
        </a>
      </li>
    </ul>
  </section>
</template>