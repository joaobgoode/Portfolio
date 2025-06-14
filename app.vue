<template>
  <div
    class="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
    <header class="py-4 border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto flex justify-between items-center px-4">
        <NuxtLink to="/" class="text-2xl font-bold">Meu Portfólio</NuxtLink>
        <nav class="flex gap-4 sm:gap-6">
          <NuxtLink to="/projects" class="hover:text-gray-600 dark:hover:text-gray-300">Projetos</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-gray-600 dark:hover:text-gray-300">Blog</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-600 dark:hover:text-gray-300">Sobre</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <NuxtPage />
    </main>

    <footer class="py-4 border-t border-gray-200 dark:border-gray-700 text-center">
      © {{ new Date().getFullYear() }} João Victor. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const isDarkModePreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  applyTheme(isDarkModePreferred);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    applyTheme(e.matches);
  });
});
</script>

<style global>
@import "tailwindcss";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
