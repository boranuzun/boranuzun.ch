<script setup>
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
  <h1 class="text-3xl font-bold my-8">Projects</h1>
  <p class="text-lg mb-8">
    Below, you can find a collection of my projects hosted on GitHub.
  </p>

  <section class="grid md:grid-cols-2 gap-10">
    <div
      v-for="project in data?.viewer.repositories.nodes"
      :key="project.id"
      class="p-8 shadow-lg my-4 rounded hover:bg-gray-50"
    >
      <a :href="project.url" target="_blank">
        <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">
          {{ project.name }}
        </h2>
      </a>
      <p>{{ project.description }}</p>
      <div class="mt-4">
        <Icon
          name="solar:star-bold"
          size="1.1rem"
          class="text-indigo-700 mb-1"
        />
        Stars: {{ project.stargazers.totalCount }}
        <Icon
          name="mdi:directions-fork"
          size="1.1rem"
          class="text-indigo-800 ml-8 mb-1"
        />
        Forks: {{ project.forks.totalCount }}
        <Icon
          name="fluent:eye-12-filled"
          size="1.1rem"
          class="text-indigo-700 ml-8 mb-1"
        />
        Watchers: {{ project.watchers.totalCount }}
      </div>
    </div>
  </section>
</template>
