<script setup>
const { slug } = useRoute().params

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('post').where('path', '=', `/blog/${slug}`).first();
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post não encontrado' })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})

const formattedDate = new Date(post.value.date).toLocaleDateString('pt-BR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

</script>

<template>
  <article class="max-w-3xl mx-auto px-4 py-12 lg:py-20">

    <header class="mb-8">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
        {{ post.title }}
      </h1>

      <p class="text-base text-gray-500 dark:text-gray-400">
        Publicado em {{ formattedDate }}
      </p>

      <div v-if="post.tags" class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in post.tags" :key="tag"
          class="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
          {{ tag }}
        </span>
      </div>
    </header>

    <div class="prose prose-lg prose-gray dark:prose-invert max-w-none">
      <article class="[&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:mt-8 [&_h1]:mb-6
                      [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-4">
        <ContentRenderer :value="post" />
      </article>
    </div>

    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <NuxtLink to="/blog"
        class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors">
        ← Voltar para todos os posts
      </NuxtLink>
    </div>

  </article>
</template>

<style scoped>
article h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
</style>
