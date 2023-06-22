<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent("/blog").sort({ data: 1 }).limit(3).find()
);
</script>

<template>
  <SiteBackground />
  <!-- Main content -->
  <section>
    <h1 class="text-5xl font-bold mt-20">
      <span style="display: inline-block; margin-right: 5px">Hi there</span>
      <span
        style="display: inline-block"
        class="animate-[wave_2s_ease-in-out_3] hover:animate-wave cursor-pointer ml-2 mr-4 origin-bottom"
        ><img src="../assets/images/wave.png" alt="wave-hand" class="w-12"
      /></span>
      <span style="display: inline-block">I'm Boran </span>
    </h1>
    <p class="text-base text-gray-900 mt-2 ml-1 mb-5 italic">
      IT Student @
      <a href="https://www.hesge.ch/heg/" class="font-bold underline"
        >HEG<Icon name="mingcute:arrow-right-up-fill" size="1.1em"
      /></a>
    </p>
  </section>
  <section class="flex flex-col md:flex-row text-justify">
    <div class="md:w-3/4">
      <p class="text-lg py-2">
        I'm a passionate second-year Business IT student at
        <a href="https://www.hesge.ch/heg/" class="font-bold underline"
          >Haute école de gestion de Genève<Icon
            name="mingcute:arrow-right-up-fill"
            size="1.1em" /></a
        >, where I've gained a diverse set of skills. Through my academic
        journey, I've honed my abilities in Python, Java, UML and Git.
      </p>
      <p class="text-lg py-2">
        I'm eager to apply my knowledge and contribute to innovative projects
        that merge the worlds of business and technology.
      </p>
    </div>
    <img
      src="../assets/images/pp.png"
      alt="profilePic"
      class="w-1/2 md:max-w-sm p-8 mx-auto pt-0 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
    />
  </section>

  <!-- Blog Posts -->
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10 mb-20">
      <Post :posts="posts" />
    </div>
  </section>
</template>
