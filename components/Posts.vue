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
  <div class="my-14">
    <div class="flex flex-col space-y-10 md:border-l md:border-zinc-100 md:pl-6">
      <article
        v-for="post in sortedPosts"
        :key="post.slug"
        class="md:grid md:grid-cols-5 md:items-baseline"
      >
        <div class="md:col-span-4 group relative flex flex-col items-start">
          <h2 class="text-lg font-semibold tracking-tight">
            <div
              class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded"
            ></div>
            <NuxtLink :to="post._path" :aria-label="`Read: ${post.title}`"
              ><span
                class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded"
              ></span
              ><span class="relative z-10">{{ post.title }}</span></NuxtLink
            >
          </h2>
          <time
            class="md:hidden relative z-10 order-first mb-1 flex items-center text-sm pl-2 text-gray-500"
            datetime="{{ formatDate(post.date) }}"
            ><span
              class="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
              ><span class="h-4 w-0.5 rounded-full bg-zinc-200"></span></span
            >{{ formatDate(post.date) }}</time
          >
          <p class="relative z-10 text-sm text-gray-600">
            {{ post.description }}
            <br />
            <span
              v-for="tag in post.tags"
              class="mr-3 last:mr-0 text-xs text-indigo-700"
              >#{{ tag }}</span
            >
          </p>
        </div>
        <time
          class="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-gray-500 uppercase tracking-wider md:text-xs"
          datetime="{{ formatDate(post.date) }}"
          >{{ formatDate(post.date) }}</time
        >
      </article>
    </div>
  </div>
</template>
