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
    class="p-4 shadow-lg rounded hover:bg-gray-50 ring-indigo-800 ring-1 transition ease-in-out hover:-translate-y-1 hover:scale-103 duration-300"
  >
    <a :href="project.url" target="_blank" aria-label="{{ project.title }}">
      <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">
        {{ project.name }}
      </h2>
    </a>
    <p>{{ project.description }}</p>
    <div class="mt-4 flex justify-start space-x-6 lg:space-x-8">
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
  </div>
</template>
