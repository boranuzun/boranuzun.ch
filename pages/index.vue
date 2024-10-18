<script setup>
useHead({
  meta: [
    {
      name: "description",
      content:
        "This page is currently under maintenance. We will be back shortly.",
    },
  ],
});
</script>

<template>
  <div class="flex h-[calc(100vh-158px)]">
    <div class="m-auto text-center">
      <SiteBackground />
      <section class="flex flex-col items-center py-4">
        <h1 class="text-5xl font-bold mt-6">
          <span class="inline-block mr-2 setting-wheel">
            ⚙️
          </span>
          <span class="inline-block">Under Maintenance</span>
        </h1>
        <p class="text-lg py-4 italic">
          We're currently making some improvements to the site. Please check
          back later!
        </p>
        <p class="text-base mt-6">Thank you for your patience!</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
@keyframes spinAndZoomIn {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(1.2) rotate(360deg);
  }
}

@keyframes spinAndZoomOut {
  0% {
    transform: scale(1.2) rotate(360deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

.setting-wheel {
  display: inline-block;
  transition: transform 0.5s ease-in-out;
}

.setting-wheel:hover {
  animation: spinAndZoomIn 0.5s forwards;
}

.setting-wheel {
  animation: spinAndZoomOut 0.5s forwards;
}

.setting-wheel:hover ~ .setting-wheel {
  animation: none;
}
</style>
