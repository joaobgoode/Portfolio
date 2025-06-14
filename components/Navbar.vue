<template>
  <header class="py-4 border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto flex justify-between items-center px-4">
      <NuxtLink to="/" class="text-2xl font-bold">Meu Portfólio</NuxtLink>
      <nav class="flex gap-4 sm:gap-6">
        <NuxtLink to="/projects" class="hover:text-gray-600 dark:hover:text-gray-300">Projetos</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-gray-600 dark:hover:text-gray-300">Blog</NuxtLink>
      </nav>
    </div>
  </header>
</template>
