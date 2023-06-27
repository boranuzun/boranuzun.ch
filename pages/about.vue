<script setup>
import Experience from "~/components/Experience.vue";

useHead({
  title: "About | Boran Uzun",
  meta: [
    {
      name: "description",
      content:
        "This is the résumé of Boran Uzun, showcasing his experience, education, skills, and accomplishments",
    },
  ],
});
</script>

<template>
  <h1 class="text-3xl font-bold my-8">Résumé</h1>
  <div class="bg-transparent">
    <div class="container mx-auto my-8">
      <div class="grid grid-cols-4 sm:grid-cols-12 gap-6">
        <div class="col-span-4 sm:col-span-4 lg:col-span-3">
          <AboutCard />
        </div>
        <div class="col-span-4 sm:col-span-8 lg:col-span-9">
          <div class="bg-white shadow-lg rounded p-6">
            <h2 class="text-xl font-bold mb-4">About Me</h2>
            <AboutIntro/>
            <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
            <Experience />
            <hr class="my-6" />
            <h2 class="text-xl font-bold mt-6 mb-4">Education</h2>
            <AboutEducation />
            <hr class="my-6" />
            <h2 class="text-xl font-bold mt-6 mb-4">Languages</h2>
            <AboutLanguages />
            <hr class="my-6" />
            <h2 class="text-xl font-bold mt-6 mb-4">Interests</h2>
            <AboutInterests />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sticky {
  height: 80vh;
}
</style>
