<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  //   queryContent().where({ _type: "post" }).orderBy("_createdAt", "desc").find();
  queryContent("/blog").find()
);
</script>

<template>
  <h1 class="text-3xl font-bold my-8">Blog Posts</h1>
  <p class="text-lg mb-8">
    I like to write about anything thta I am currently working or something new
    that interests me. If you would like me to write about something or be a
    guest blogger on your blog please reach out to me on Twitter. If you would
    like to subscribe to an RSS feed you can find it here.
  </p>
  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>
