<script setup>
useHead({
  meta: [
    {
      name: "description",
      content:
        "This is the home page of Boran Uzun's personal website, where he showcases his work and achievements.",
    },
  ],
});
</script>

<template>
  <div class="flex h-[calc(100vh-158px)]">
    <div class="m-auto">
      <SiteBackground />
      <!-- Main content -->
      <section class="flex flex-col md:flex-row">
        <div class="md:w-3/4 text-justify md:text-left py-4">
          <h1 class="text-5xl font-bold mt-6 md:mt-0">
            <span class="inline-block mr-1">Hi there</span>
            <span
              class="inline-block animate-[wave_2s_ease-in-out_3] hover:animate-wave cursor-pointer ml-2 mr-4 origin-bottom w-11 h-11 md:w-12 md:h-12"
              ><img
                src="../assets/images/wave.png"
                alt="wave-hand"
                width="48px"
                height="48px"
            /></span>
            <span class="inline-block">I'm Boran </span>
          </h1>
          <p class="text-base mt-2 ml-1 mb-5 italic">
            IT Student @
            <a
              href="https://www.hesge.ch/heg/"
              aria-label="HEG's website"
              class="font-bold underline group"
              >HEG<Icon
                name="mingcute:arrow-right-up-fill"
                size="1.2em"
                class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            /></a>
          </p>
          <p class="text-lg py-2">
            I'm a passionate second-year Business IT student at
            <a
              href="https://www.hesge.ch/heg/formations/bachelors/informatique-gestion"
              aria-label="HEG's website"
              class="font-bold underline group"
              >Haute école de gestion de Genève<Icon
                name="mingcute:arrow-right-up-fill"
                size="1.1em"
                class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a
            >, where I've gained a diverse set of skills. Through my academic
            journey, I've honed my abilities in Python, Java, UML and Git.
          </p>
          <p class="text-lg py-2">
            I am driven to embark on innovative projects and contribute to their
            success. Committed to continuous learning and eager to make a
            positive impact in the realm of business and technology.
          </p>
        </div>
        <img
          src="../assets/images/pp.svg"
          alt="profilePic"
          class="w-1/2 md:max-w-sm invisible sm:visible p-8 mx-auto pt-0 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </section>
    </div>
  </div>
</template>
