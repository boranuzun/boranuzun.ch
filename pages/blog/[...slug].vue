<script setup>
import moment from "moment";
const { path } = useRoute();

// Format date to be human readable
const formatDate = (date) => {
  return moment(date).format("MMMM Do YYYY");
};

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <div class="sm:px-8 mt-8 lg:mt-16">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="xl:relative">
            <div class="mx-auto max-w-2xl">
              <button
                type="button"
                onclick="location.href='/blog'"
                aria-label="Go back to articles"
                class="group mb-8 flex h-10 w-10 items-center justify-center rounded-2xl shadow-lg hover:bg-gray-800 ring-1 ring-zinc-200 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <Icon
                  name="material-symbols:arrow-back-rounded"
                  class="h-4 w-4 stroke-zinc-700 group-hover:stroke-zinc-100 group-hover:text-zinc-100"
                ></Icon>
              </button>
              <article>
                <header class="flex flex-col">
                  <time
                    dateTime="{{ formatDate(data.date) }}"
                    class="order-first flex items-center text-base text-zinc-500"
                    ><span class="h-4 w-0.5 rounded-full bg-zinc-500"></span
                    ><span class="ml-2">{{ formatDate(data.date) }}</span></time
                  >
                </header>
                <ContentRenderer
                  :value="data"
                  class="prose mt-4 mx-auto max-w-7xl text-justify"
                />
                <div class="flex space-x-4 mt-6 mb-10 justify-end">
                  <span
                    v-for="tag in data.tags"
                    :key="tag"
                    class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
                  >
                    {{ tag }}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
