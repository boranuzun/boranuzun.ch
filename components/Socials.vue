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
  <a v-for="link in links" :key="link.name" :href="link.href">
    <Icon :name="link.icon" size="1.5rem" class="text-gray-800" />
  </a>
</template>
