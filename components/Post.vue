<script setup>
import moment from "moment";

const props = defineProps(["posts"]);

// Format date to be human readable
const formatDate = (date) => {
  return moment(date).format("MMMM Do YYYY");
};
</script>

<template>
  <div
    v-for="post in props.posts"
    :key="post.slug"
    class="bg-white rounded shadow-md overflow-hidden hover:opacity-90"
  >
    <NuxtLink :to="post._path">
      <!-- <nuxt-img
        format="webp"
        :src="`/images/blog/${post.cover}`"
        alt="Blog Post Cover Image"
        class="w-full h-48 object-cover"/> -->
        <img
        :src="`/images/blog/${post.cover}`"
        alt="Blog Post Cover Image"
        class="w-full h-48 object-cover"/>
    </NuxtLink>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <p class="text-gray-600 text-sm mb-2">{{ formatDate(post.date) }}</p>
      <NuxtLink
        :to="post._path"
        class="inline-block bg-indigo-800 hover:bg-indigo-600 text-white py-2 px-4 rounded float-right mb-8"
        >Read More
      </NuxtLink>
    </div>
  </div>
</template>
