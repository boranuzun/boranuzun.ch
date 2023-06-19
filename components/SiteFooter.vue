<script setup>
const links = [
  {
    name: "Email",
    href: "mailto:boran.u3@gmail.com",
    icon: "material-symbols:mail",
  },
  {
    name: "GitHub",
    href: "https://www.github.com/boranuzun",
    icon: "fa6-brands:square-github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/boranuzun",
    icon: "fa6-brands:linkedin",
  },
];
</script>

<template>
  <footer class="bg-gray-800">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-2 text-gray-300 flex flex-row"
    >
      <p class="flex-1 mt-3">&copy; Boran UZUN 2023. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-3">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>
