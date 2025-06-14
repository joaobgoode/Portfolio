<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
  linkText: String,
  link2: String,
  linkText2: String,
  image: String,
  tags: Array,
})


</script>

<template>
  <div class="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img v-if="image" :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-sm mb-3 leading-relaxed">{{ description }}</p>

      <div v-if="tags && tags.length > 0" class="mb-4">
        <span v-for="tag in tags" :key="tag"
          class="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full mr-2 mb-1 font-medium">
          {{ tag }}
        </span>
      </div>

      <div class="flex flex-wrap gap-3">
        <a v-if="link" :href="link" target="_blank"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors duration-200">
          {{ linkText || 'Ver Projeto →' }}
        </a>
        <a v-if="link2" :href="link2" target="_blank"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors duration-200">
          {{ linkText2 || 'Link Adicional →' }}
        </a>
      </div>
    </div>
  </div>
</template>
