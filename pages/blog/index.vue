<script setup>
import PostCard from '~/components/PostCard.vue'

const { data: posts } = await useAsyncData('home-posts', () => {
  return queryCollection('post').order('date', 'DESC').all();
})

</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-20">

    <h1 class="text-4xl font-bold mb-8 text-center">Blog ✍️</h1>

    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Escrevo sobre desenvolvimento, tecnologia, projetos, e o que estou aprendendo no caminho.
    </p>

    <div class="grid gap-8 md:grid-cols-2">
      <PostCard v-for="post in posts" :key="post.path" :title="post.title" :description="post.description"
        :date="post.date" :slug="post.path.substring(6)" :tags="post.tags" />
    </div>

  </div>
</template>
