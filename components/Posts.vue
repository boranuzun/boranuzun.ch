<script setup>
import moment from "moment";

const props = defineProps(["posts"]);

// Format date to be human readable
const formatDate = (date) => {
  return moment(date).format("MMMM Do YYYY");
};

// Sort the articles by date
const sortedPosts = props.posts.slice().sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});
</script>

<template>
  <ul>
    <li v-for="post in sortedPosts" :key="post.slug">
      <article>
        <NuxtLink
          :to="post._path"
          :aria-label="`Read: ${post.title}`"
          class="grid overflow-hidden md:grid-cols-5 rounded p-4 lg:py-6 xl:grid-cols-12 hover:bg-gray-100"
        >
          <h3
            class=" font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-lg"
          >
            {{ post.title }}
          </h3>
          <time
            datetime=""
            class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-xs md:text-sm text-gray-500 self-center"
            >{{ formatDate(post.date) }}</time
          >
          <p
            class="md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-10 md:ml-0 text-gray-600"
          >
            {{ post.description }}
            <br>
            <span v-for="tag in post.tags" class="mr-3 last:mr-0 text-xs text-indigo-700">#{{ tag }}</span>
          </p>
        </NuxtLink>
      </article>
    </li>
  </ul>
</template>
