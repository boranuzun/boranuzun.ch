<script setup>
const links = [
  {
    name: "Email",
    href: "mailto:contact@boranuzun.ch",
    icon: "material-symbols:mail",
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@boranuzun",
    icon: "fa6-brands:mastodon",
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
  <a
    v-for="link in links"
    :key="link.name"
    :href="link.href"
    :aria-label="link.name"
    class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
  >
    <Icon
      :name="link.icon"
      size="1.5rem"
      class="text-gray-800"
    />
  </a>
</template>
