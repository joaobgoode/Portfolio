<script setup>
import PostCard from '~/components/PostCard.vue'

const { data: posts } = await useAsyncData('home-posts', () => {
  return queryCollection('post').order('date', 'DESC').limit(2).all();
})

const { data: projects } = await useAsyncData('home-projects', () => {
  return queryCollection('project').where("starred", "=", "true").limit(2).all();
})

</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-20">

    <h1 class="text-4xl font-bold mb-8 text-center">Blog ✍️</h1>

    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Escrevo sobre desenvolvimento, tecnologia, projetos, e o que estou aprendendo no caminho.
    </p>

    <div class="grid gap-8 md:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.id || project.title" :title="project.title"
        :description="project.description" :link="project.link" :link-text="project.linkText" :link2="project.link2"
        :link-text2="project.linkText2" :image="project.image" :tags="project.tags" />
    </div>

  </div>
</template>
