<!-- components/home/HowItWorksSection.vue -->
<template>
  <div class="flex flex-col pt-20 gap-10 items-center">
    <h2 
        class="text-3xl md:text-5xl font-bold text-center mb-6 text-indigo-950"
    >
        {{ $t("home.howItWorks.title") }}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-5 gap-0 w-2/3">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="[step.bg, index !== 0 ? '-ml-4 sm:-ml-6' : '']"
        :style="clipPath(index)"
        class="text-white px-8 py-10 text-center relative"
      >
        <p class="text-4xl font-bold mb-2">{{ index + 1 }}</p>
        <p
          class="font-semibold border-b border-white/50 inline-block pb-1 mb-3"
        >
          {{ step.title }}
        </p>
        <p class="text-sm">{{ step.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const steps = [
  { title: t("home.howItWorks.steps.step1.title"), text: t("home.howItWorks.steps.step1.text"), bg: "bg-blue-50 !text-slate-800" },
  { title: t("home.howItWorks.steps.step2.title"), text: t("home.howItWorks.steps.step2.text"), bg: "bg-blue-100 !text-slate-800" },
  { title: t("home.howItWorks.steps.step3.title"), text: t("home.howItWorks.steps.step3.text"), bg: "bg-blue-400 !text-slate-800" },
  { title: t("home.howItWorks.steps.step4.title"), text: t("home.howItWorks.steps.step4.text"), bg: "bg-blue-700" },
  { title: t("home.howItWorks.steps.step5.title"), text: t("home.howItWorks.steps.step5.text"), bg: "bg-blue-900" },
];

function clipPath(index) {
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  let polygon = "0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%";
  if (isFirst) polygon = "0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%";
  if (isLast) polygon = "0% 0%, 100% 0%, 100% 100%, 0% 100%, 10% 50%";

  return { clipPath: `polygon(${polygon})` };
}
</script>
