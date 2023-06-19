// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  build: {
    transpile: ["tslib"], // Add 'tslib' to the transpile array because I had an error when building the app
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/apollo",
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "dracula",
      preload: [
        "ts",
        "js",
        "json",
        "yaml",
        "md",
        "vue",
        "python",
        "bash",
        "shell",
        "sh",
        "html",
        "css",
        "scss",
        "sass",
        "less",
        "xml",
        "sql",
        "graphql",
        "go",
        "rust",
        "java",
        "c",
        "cpp",
        "cs",
        "swift",
        "php",
      ],
    },
  },
  apollo: {
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "https://api.github.com/graphql",
      },
    },
  },
});
