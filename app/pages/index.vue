<template>
  <div>
    <!-- Mensaje de bienvenida -->
    <HeroSection />

    <!-- Formulario solicitud de información -->
    <ContactForm />

    <!-- Seccion de servicios ofrecidos -->
    <ServicesSection />

    <!-- Seccion como funcionamos -->
    <HowItWorksSection />

    <!-- Reviews -->
    <ReviewsSection />
  </div>
</template>

<script setup>
import ContactForm from "~/components/home/ContactForm.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import HowItWorksSection from "~/components/home/HowItWorksSection.vue";
import ReviewsSection from "~/components/home/ReviewsSection.vue";
import ServicesSection from "~/components/home/ServicesSection.vue";
</script>
