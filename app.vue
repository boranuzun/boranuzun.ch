<template>
  <Html lang="en" dir="ltr">
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
          content="Boran Uzun, Boran, Uzun, personal website, portfolio, achievements, work, web development, geneva, genève, onex, switzerland, suisse, schweiz, student, heg, heig-vd, computer science, computer, it, information technology, informatique de gestion, Python, Java, UML, Git, programming, software development, technology, business, computer skills, communication, teamwork, problem-solving, inventory clerk, technical support, Swiss Army, Hôpitaux Universitaires de Genève, professional growth"
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
      <Body>
        <SiteHeader />
        <main
          class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grow items-start w-full text-gray-900"
        >
          <NuxtPage />
        </main>
        <SiteFooter />
      </Body>
    </div>
  </Html>
</template>
