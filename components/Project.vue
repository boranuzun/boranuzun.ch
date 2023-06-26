<script setup>
import moment from "moment";

const query = gql`
  {
    viewer {
      repositories(
        first: 20
        orderBy: { field: CREATED_AT, direction: DESC }
        privacy: PUBLIC
      ) {
        totalCount
        nodes {
          id
          name
          createdAt
          updatedAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
<template>
  <div
    v-for="project in data?.viewer.repositories.nodes"
    :key="project.id"
    class="flex flex-col bg-white border shadow-sm rounded overflow-x-auto hover:shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-103 duration-300"
  >
    <div class="p-4 md:p-5 flex-grow">
      <a :href="project.url" target="_blank" aria-label="{{ project.title }}">
        <h3 class="text-lg font-bold text-gray-800">
          {{ project.name }}
        </h3>
      </a>
      <p class="mt-2 text-gray-800">
        {{ project.description }}
      </p>
    </div>
    <div
      class="pb-4 px-4 md:px-5 md:pb-5 flex justify-start space-x-6 lg:space-x-8"
    >
      <div class="flex auto">
        <Icon
          name="solar:star-bold"
          size="1.1rem"
          class="text-indigo-700 self-center"
        />
        <span>Stars:</span>
        <span class="ml-2 justify-items-center">
          {{ project.stargazers.totalCount }}</span
        >
      </div>
      <div class="flex auto">
        <Icon
          name="mdi:directions-fork"
          size="1.1rem"
          class="text-indigo-800 self-center"
        />
        <span> Forks:</span>
        <span class="ml-2 justify-items-center">{{
          project.forks.totalCount
        }}</span>
      </div>
      <div class="flex auto">
        <Icon
          name="fluent:eye-12-filled"
          size="1.1rem"
          class="text-indigo-700 self-center"
        />
        <span> Watchers:</span>
        <span class="ml-2 justify-items-center">{{
          project.watchers.totalCount
        }}</span>
      </div>
    </div>
    <div class="bg-gray-100 border-t rounded-b py-3 px-4 md:py-4 md:px-5">
      <p class="mt-1 text-sm text-gray-600">
        Last updated {{ moment(project.updatedAt).fromNow() }}
      </p>
    </div>
  </div>
</template>
