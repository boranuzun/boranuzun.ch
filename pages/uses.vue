<script setup>
useHead({
  title: "Uses | Boran Uzun",
  meta: [
    {
      name: "description",
      content:
        "Explore the tools, technologies, and resources used by Boran Uzun in his projects and workflows.",
    },
  ],
});
</script>

<template>
  <h1 class="text-3xl font-bold my-8">Uses</h1>
  <p class="text-lg text-justify">
    This page serves as an updated list of the gear I utilize. If you have any
    questions about the tools I use or if you have suggestions for additional
    resources, please feel free to contact me. I drew inspiration for this page
    from the website
    <a href="https://uses.tech/" aria-label="uses.tech">uses.tech</a>.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-2">This Website</h2>
  <ul class="list-disc space-y-1">
    <li class="ml-8">
      <a href="https://vuejs.org/" aria-label="Vue 3">Vue 3</a>
    </li>
    <li class="ml-8">
      <a href="https://nuxt.com/" aria-label="Nuxt 3">Nuxt 3</a>
    </li>
    <li class="ml-8">
      <a href="https://tailwindcss.com/" aria-label="Tailwind CSS"
        >Tailwind CSS</a
      >
    </li>
  </ul>

  <h2 class="text-2xl font-bold mt-8 mb-2">Hardware</h2>
  <ul class="list-disc">
    <li class="ml-8 py-1">
      MacBook Pro (14", 2021) — Best laptop I've ever owned.
    </li>
  </ul>

  <h2 class="text-2xl font-bold mt-8 mb-2">Editor and Terminal</h2>
  <ul class="list-disc space-y-1">
    <li class="ml-8">
      <a href="https://code.visualstudio.com/" aria-label="Visual Studio Code"
        >Visual Studio Code</a
      >
      — I use it for pretty much everything.
    </li>
    <li class="ml-8">
      <a href="https://www.iterm2.com/" aria-label="iTerm">iTerm2</a> — Not much
      to say here. I use it as my terminal emulator.
    </li>
    <li class="ml-8">
      <a href="https://fig.io/" aria-label="Fig">Fig</a> — Offers autocomplete
      for the terminal and is a great tool for productivity.
    </li>
    <li class="ml-8">
      <a href="https://draculatheme.com/" aria-label="Dracula Theme">Dracula</a>
      — This is my theme of choice for VS Code.
    </li>
  </ul>
  <!-- <nuxt-img
    format="webp"
    loading="lazy"
    src="../public/images/vscode_dracula.png"
    alt="Visual Studio Code Dracula Theme"
    class="mt-8 mb-20"
  /> -->
  <img
    src="../public/images/vscode_dracula.png"
    alt="Visual Studio Code Dracula Theme"
    class="mt-8 mb-20"
  />
</template>
