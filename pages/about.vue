<script setup>
useHead({
  title: "About | Boran Uzun",
  meta: [
    {
      name: "description",
      content:
        "This is the résumé of Boran Uzun, showcasing his experience, education, skills, and accomplishments",
    },
  ],
});
</script>

<template>
  <SiteBackground />
  <h1 class="text-3xl font-bold my-8">Résumé</h1>
  <div class="bg-transparent">
    <div class="container mx-auto py-8">
      <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
        <div class="col-span-4 sm:col-span-3">
          <div class="bg-white shadow rounded-lg p-6">
            <div class="flex flex-col items-center">
              <img
                src="../assets/images/pp.png"
                class="w-32 h-32 bg-white rounded-full mb-4 shrink-0"
              />
              <h1 class="text-xl font-bold">Boran Uzun</h1>
              <p class="text-gray-600">IT Student</p>
              <div class="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:boran.u3@gmail.com"
                  class="bg-indigo-800 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                  >Contact</a
                >
                <a
                  href="https://kdrive.infomaniak.com/app/share/654236/44a53e47-7537-448a-8735-7d5888dff26e"
                  target="_blank"
                  class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >Resume</a
                >
              </div>
            </div>
            <hr class="my-6 border-t border-gray-300" />
            <div class="flex flex-col">
              <span
                class="text-gray-600 uppercase font-bold tracking-wider mb-2"
                >Skills</span
              >
              <ul class="space-y-1 list-disc">
                <li class="ml-8">Python</li>
                <li class="ml-8">Java</li>
                <li class="ml-8">HTML</li>
                <li class="ml-8">Vue</li>
                <li class="ml-8">PL/SQL</li>
                <li class="ml-8">Git</li>
                <li class="ml-8">UML</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-4 sm:col-span-9">
          <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-xl font-bold mb-4">About Me</h2>
            <p class="text-gray-700 text-justify">
              I am a dedicated and motivated IT student with a passion for
              coding and problem-solving. With a strong foundation in Python,
              Java, UML, and Git I am equipped with the technical skills
              necessary to develop innovative software solutions. I thrive in
              collaborative environments and enjoy tackling complex challenges
              to deliver high-quality results. I am constantly seeking
              opportunities to expand my knowledge and stay up-to-date with the
              latest technologies in the industry. With my strong attention to
              detail and commitment to excellence, I am confident in my ability
              to contribute to the success of any project or team.
            </p>
            <h3 class="font-semibold text-center mt-3 -mb-2">Find me on</h3>
            <div class="flex justify-center items-center gap-6 my-6">
              <Socials />
            </div>

            <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
            <div class="mb-10">
              <div class="flex justify-between">
                <span class="text-gray-600 font-bold"
                  >Inventory clerk @
                  <a href="https://www.denner.ch"
                    ><span class="underline">Denner</span>
                    <Icon name="mingcute:arrow-right-up-fill" /></a
                ></span>
                <p>
                  <span class="text-gray-600">Apr 2022 - Present</span>
                </p>
              </div>
              <ul class="list-disc mt-2">
                <li class="ml-8 py-1">
                  Perform a tally of the items present on the shelves.
                </li>
                <li class="ml-8 py-1">
                  Input the respective quantities into the system.
                </li>
                <li class="ml-8 py-1">
                  Conduct error verification and make necessary corrections as
                  required.
                </li>
              </ul>
            </div>
            <div class="mb-10">
              <div class="flex justify-between">
                <span class="text-gray-600 font-bold"
                  >Pionnier d'ondes dirigées @
                  <a href="https://www.vtg.admin.ch/en/home.html"
                    ><span class="underline">Swiss Armed Forces</span
                    ><Icon name="mingcute:arrow-right-up-fill" /></a
                ></span>
                <p>
                  <span class="text-gray-600">Jan 2020 - May 2020</span>
                </p>
              </div>
              <p class="mx-8 mt-2 py-1 text-justify">
                As part of my recruit school, I served as a pionnier d'ondes
                dirigées. I gained valuable experience installing communications
                networks in remote locations, using directed-wave systems to
                transmit signals through the air. This experience has enabled me
                to develop advanced technical skills and help ensure reliable
                connectivity, even in the most demanding environments.
              </p>
            </div>
            <div class="mb-10">
              <div class="flex justify-between">
                <span class="text-gray-600 font-bold"
                  >Cashier - Student Job @
                  <a href="https://www.coop.ch"
                    ><span class="underline">Coop</span
                    ><Icon name="mingcute:arrow-right-up-fill" /></a
                ></span>
                <p>
                  <span class="text-gray-600">Jun 2019 - Dec 2019</span>
                </p>
              </div>
              <ul class="list-disc mt-2">
                <li class="ml-8 py-1">
                  Reception, advice and customer service at the cash desk.
                </li>
                <li class="ml-8 py-1">
                  Application of the specialised knowledge acquired in the
                  cashiering course.
                </li>
                <li class="ml-8 py-1">
                  Implementation of legal requirements and internal guidelines.
                </li>
                <li class="ml-8 py-1">
                  Responsibility of the cash register and its accounting.
                </li>
                <li class="ml-8 py-1">
                  Checking the order and cleanliness of the work area.
                </li>
                <li class="ml-8 py-1">
                  Correct calculation of discounts, promotions and special
                  cases.
                </li>
                <li class="ml-8 py-1">
                  Assigned to self-checkouts and assisting in the handling of
                  goods in the various departments as required.
                </li>
              </ul>
            </div>
            <div class="mb-10">
              <div class="flex justify-between">
                <span class="text-gray-600 font-bold"
                  >HR Intern @
                  <a href="https://www.hug.ch/"
                    ><span class="underline"
                      >Hôpitaux Universitaires de Genève</span
                    ><Icon name="mingcute:arrow-right-up-fill" /></a
                ></span>
                <p>
                  <span class="text-gray-600">Aug 2017 - Aug 2018</span>
                </p>
              </div>
              <ul class="list-disc mt-2">
                <li class="ml-8 py-1">
                  Provide technical support to customers.
                </li>
                <li class="ml-8 py-1">
                  Receive requests from users of the SABA application (LMS).
                </li>
                <li class="ml-8 py-1">
                  Assist users, solve various problems of the training centre's
                  applications (Espace Carrière, FormaEva).
                </li>
                <li class="ml-8 py-1">
                  Establish procedures or online help (documentation).
                </li>
                <li class="ml-8 py-1">Diagnose equipment breakdowns.</li>
              </ul>
            </div>

            <hr class="my-6" />
            <h2 class="text-xl font-bold mt-6 mb-4">Education</h2>
            <div class="mb-2">
              <div class="flex justify-between">
                <span class="text-gray-600 font-bold"
                  >Bachelor of Science in Business IT @
                  <a href="https://www.hesge.ch/heg"
                    ><span class="underline">HEG</span
                    ><Icon name="mingcute:arrow-right-up-fill" /></a
                ></span>
                <p>
                  <span class="text-gray-600">Sep 2021 - Present</span>
                </p>
              </div>
            </div>
            <div class="mb-10">
              <div class="flex justify-between">
                <span class="text-gray-600 font-bold"
                  >CFC + Maturité professionnelle commerciale @
                  <a
                    href="https://edu.ge.ch/secondaire2/stite/accueil"
                    class="underline"
                    ><span class="underline">ECCG Aimée-Stitelmann</span
                    ><Icon name="mingcute:arrow-right-up-fill" /></a
                ></span>
                <p>
                  <span class="text-gray-600">Aug 2014 - Aug 2018</span>
                </p>
              </div>
            </div>

            <hr class="my-6" />
            <h2 class="text-xl font-bold mt-6 mb-4">Languages</h2>
            <div class="flex justify-between my-2">
              <span class="text-gray-600 font-bold">French</span>
              <p>
                <span class="text-gray-600">Native speaker</span>
              </p>
            </div>
            <div class="flex justify-between my-2">
              <span class="text-gray-600 font-bold">Turkish</span>
              <p>
                <span class="text-gray-600">Native speaker</span>
              </p>
            </div>
            <div class="flex justify-between my-2">
              <span class="text-gray-600 font-bold">English</span>
              <p>
                <span class="text-gray-600">Advanced proficiency</span>
              </p>
            </div>
            <div class="flex justify-between my-2 mb-10">
              <span class="text-gray-600 font-bold">German</span>
              <p>
                <span class="text-gray-600">Elementary proficiency</span>
              </p>
            </div>

            <hr class="my-6" />
            <h2 class="text-xl font-bold mt-6 mb-4">Interests</h2>
            <div class="flex justify-between my-2">
              <span class="text-gray-600 font-bold">Reading</span>
              <p>
                <span class="text-gray-600">Manhwa, Manga</span>
              </p>
            </div>
            <div class="flex justify-between my-2">
              <span class="text-gray-600 font-bold">Video games</span>
              <p>
                <span class="text-gray-600">RL, Rust, Osu</span>
              </p>
            </div>
            <div class="flex justify-between my-2">
              <span class="text-gray-600 font-bold">TV Shows / Movies</span>
              <p>
                <span class="text-gray-600">GOT, Dexter, SnK</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
