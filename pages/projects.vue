<script setup>
useHead({
  title: "Projects | Boran Uzun",
  meta: [
    {
      name: "description",
      content:
        "Discover the projects created by Boran Uzun, showcasing his skills and expertise in programming and technology.",
    },
  ],
});
</script>

<template>
  <h1 class="text-3xl font-bold my-8">Projects</h1>
  <p class="text-lg mb-8">
    Below, you can find a collection of my projects hosted on GitHub.
  </p>
  <section class="grid lg:grid-cols-2 gap-6 md:gap-10 mb-8">
    <Projects />
  </section>
</template>
