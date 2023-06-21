<script setup>
const links = [
  {
    name: "location",
    href: "https://www.google.com/maps/@46.2048247,6.1080195,13z",
    icon: "material-symbols:location-on-rounded",
    value: "Geneva, CH",
  },
  {
    name: "phone",
    href: "https://mastodon.social/@boranuzun",
    icon: "material-symbols:call",
    value: "+41 76 442 70 98",
  },
];
</script>

<template>
  <div
    v-for="link in links"
    :key="link.name"
    :href="link.href"
    class="flex flex-col md:flex-row justify-between"
  >
    <a>
      <Icon :name="link.icon" size="1.5rem" class="text-gray-800" />
    </a>
    <p>{{ link.value }}</p>
  </div>
</template>
