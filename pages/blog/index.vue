<script setup>
useHead({
  title: 'Blog // Boran Uzun',
  meta: [
    { name: 'description', content: 'Explore the blog of Boran Uzun, where he shares insights, tips, and experiences related to his interests in web development, technology, and more.' }
  ],
})

const { data: posts } = await useAsyncData("posts", () =>
  //   queryContent().where({ _type: "post" }).orderBy("_createdAt", "desc").find();
  queryContent("/blog").find()
);
</script>

<template>
  <h1 class="text-3xl font-bold my-8">Blog Posts</h1>
  <p class="text-lg mb-8">
    I enjoy writing about topics that currently engage me or pique my interest.
    If there's a particular subject you'd like me to explore, feel free to
    contact me through my social media channels.
  </p>
  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>
