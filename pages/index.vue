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
          <span class="inline-block mr-2 transition ease-in-out hover:scale-110 duration-300">⚙️</span>
          <span class="inline-block">Under Maintenance</span>
        </h1>
        <p class="text-lg py-4 italic">
          We're currently making some improvements to the site. Please check
          back later!
        </p>
        <!-- <img
          src="../assets/images/maintenance.svg"
          alt="Under Maintenance"
          class="w-1/2 md:max-w-sm p-8 mx-auto pt-0 transition ease-in-out hover:scale-110 duration-300"
        /> -->
        <p class="text-base mt-6">Thank you for your patience!</p>
      </section>
    </div>
  </div>
</template>
