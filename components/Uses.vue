<template>
  <div>
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
        <a href="https://www.iterm2.com/" aria-label="iTerm">iTerm2</a> — Not
        much to say here. I use it as my terminal emulator.
      </li>
      <li class="ml-8">
        <a href="https://fig.io/" aria-label="Fig">Fig</a> — Offers autocomplete
        for the terminal and is a great tool for productivity.
      </li>
      <li class="ml-8">
        <a href="https://draculatheme.com/" aria-label="Dracula Theme"
          >Dracula</a
        >
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
      src="../assets/images/vscode_dracula.png"
      alt="Visual Studio Code Dracula Theme"
      class="mt-2"
    />
  </div>
</template>
