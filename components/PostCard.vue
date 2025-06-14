<script setup>
defineProps({
  title: String,
  description: String,
  date: String,
  slug: String,
  tags: Array
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

</script>

<template>
  <div class="border rounded-lg p-4 hover:shadow-md transition">
    <NuxtLink :to="`/blog/${slug}`">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
    </NuxtLink>
    <p class="text-gray-500 text-sm">{{ formatDate(date) }}</p>
    <p class="mt-2">{{ description }}</p>
    <div class="flex gap-2 mt-3">
      <Tag v-for="tag in tags" :key="tag" :label="tag" />
    </div>
  </div>
</template>
