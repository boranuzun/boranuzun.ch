<template>
  <div class="flex flex-col min-h-screen">
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Title>Boran Uzun</Title>
      <meta
        name="description"
        content="Boran Uzun's personal website showcasing his work and achievements."
      />
      <meta name="author" content="Boran Uzun" />
      <meta
        name="keywords"
        content="Boran Uzun, personal website, portfolio, achievements, work, web development, geneva, genève, switzerland, suisse, schweiz, student, heg, heig-vd, heig-vd.ch, heig-vd.ch, computer science, computer, it, information technology"
      />
      <!-- Add canonical URL -->
      <link rel="canonical" href="https://www.boranuzun.ch" />
      <!-- Add Open Graph meta tags -->
      <meta property="og:title" content="Boran Uzun" />
      <meta
        property="og:description"
        content="Explore Boran Uzun's work and achievements on his personal website."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.boranuzun.ch" />
      <!-- Add Twitter Card meta tags -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Boran Uzun" />
      <meta
        name="twitter:description"
        content="Explore Boran Uzun's work and achievements on his personal website."
      />
    </Head>
    <SiteHeader />
    <main
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full"
    >
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
