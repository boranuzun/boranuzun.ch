<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <div class="mt-8 mb-2">
    <span
      v-for="tag in data.tags"
      :key="tag"
      class="text-sm font-semibold inline-block py-2 px-2 uppercase last:mr-0 mr-2 first:pl-1 text-indigo-700"
    >
      #{{ tag }}
    </span>
  </div>
  <ContentRenderer
    :value="data"
    class="prose mb-10 mx-auto max-w-7xl text-justify"
  />
</template>
