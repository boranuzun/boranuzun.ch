<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <hr class="border-gray-200" />
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-2 text-gray-800 flex flex-row bg-white pt-3 self-center"
    >
      <p class="flex-1 mt-3">
        &copy;<b class="ml-1">{{ currentYear }}</b> — Boran UZUN
      </p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-3">
        <Socials />
      </div>
    </section>
  </footer>
</template>
