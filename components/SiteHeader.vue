<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();

const navigation = [
  { name: "Home", href: "/", current: route.name === "index" },
  { name: "Blog", href: "/blog", current: route.name.includes("blog") },
  { name: "Projects", href: "/projects", current: route.name === "projects" },
  { name: "Uses", href: "/uses", current: route.name === "uses" },
  //{ name: "About", href: "/about", current: route.name === "about" },
];
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow-md" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <a href="/">
              <img
                class="block h-7 w-auto lg:hidden"
                src="../assets/images/logo.svg"
                alt="Boran Uzun's website logo"
                width="28px"
                height="28px" />
              <img
                class="hidden h-7 w-auto lg:block"
                src="../assets/images/logo.svg"
                alt="Boran Uzun's website logo"
                width="28px"
                height="28px"
            /></a>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                  'rounded px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-800 hover:bg-gray-700 hover:text-white',
            'block rounded px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
