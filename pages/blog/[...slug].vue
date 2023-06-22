<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

useHead({
  title: data.title,
  meta: [
    { name: 'description', content: data.description }
  ],
})
</script>

<template>
  <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl text-justify" />
  <div class="my-8">
    <a
      v-for="tag in data.tags"
      :key="tag"
      :href="`/blog/tags/${tag}`"
      class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-indigo-800 hover:bg-indigo-600 uppercase last:mr-0 mr-4"
    >
      <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-1 " />
      {{ tag }}
    </a>
  </div>
</template>
