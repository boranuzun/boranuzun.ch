<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent("/blog").sort({ data: 1 }).limit(3).find()
);
</script>

<template>
  <section>
    <!-- <h1 class="text-5xl font-bold mt-20">👋🏼 Hello, I'm Boran Uzun !</h1> -->
    <h1 class="text-5xl font-bold mt-20">
      <span style="display: inline-block; margin-right: 5px">Hi there</span>
      <span style="display: inline-block; margin-right: 5px"
        ><img src="../assets/images/hi.gif" width="55px"
      /></span>
      <span style="display: inline-block; margin-right: 15px">,</span>
      <span style="display: inline-block">I'm Boran </span>
    </h1>
    <p class="text-base text-gray-900 mt-2 ml-1 mb-5 italic">
      IT Student @ <a href="https://www.hesge.ch/heg/">HEG</a>
    </p>
  </section>
  <section class="flex flex-col md:flex-row text-justify">
    <div class="md:w-3/4">
      <p class="text-lg py-2">
        I'm a passionate second-year Business IT student at Haute école de
        gestion de Genève, where I've gained a diverse set of skills. Through my
        academic journey, I've honed my abilities in Python, Java, UML and Git.
      </p>
      <p class="text-lg py-2">
        I'm eager to apply my knowledge and contribute to innovative projects
        that merge the worlds of business and technology.
      </p>
    </div>
    <img
      src="../assets/images/pp.png"
      alt="profilePic"
      class="w-1/2 md:max-w-sm p-8 mx-auto pt-0"
    />
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10 mb-20">
      <Post :posts="posts" />
    </div>
  </section>
</template>
