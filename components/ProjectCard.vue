<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
})
</script>

<template>
  <div class="border rounded-lg overflow-hidden shadow-md">
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-sm text-gray-600">{{ description }}</p>
      <a :href="link" target="_blank" class="mt-4 inline-block text-blue-500 hover:underline">
        Ver Projeto →
      </a>
    </div>
  </div>
</template>
