<script setup>
import ProjectCard from '~/components/ProjectCard.vue'
import PostCard from '~/components/PostCard.vue'
import SocialLinks from '~/components/SocialLinks.vue'

const { data: projects } = await useAsyncData('home-projects', () => {
  return queryCollection('project').where('starred', '=', '1').limit(2).all();
})

const { data: posts } = await useAsyncData('home-posts', () => {
  return queryCollection('post').order('date', 'DESC').limit(2).all();
})

</script>

<template>
  <div class="space-y-24">

    <section class="text-center py-20">
      <h1 class="text-5xl font-bold mb-4">Olá, eu sou João Victor 👋</h1>
      <p class="text-xl text-gray-600 mb-6">
        Desenvolvedor apaixonado por tecnologia, software open-source e projetos criativos.
      </p>
      <SocialLinks class="justify-center" />
    </section>

    <section class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">Projetos em Destaque</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <ProjectCard v-for="project in projects" :key="project.id || project.title" :title="project.title"
          :description="project.description" :link="project.link" :link-text="project.linkText" :link2="project.link2"
          :link-text2="project.linkText2" :image="project.image" :tags="project.tags" />
      </div>
      <div class="text-center mt-6">
        <NuxtLink to="/projects" class="text-blue-500 hover:underline">
          Ver todos os projetos →
        </NuxtLink>
      </div>
    </section>

    <section class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">Últimos Posts</h2>
      <div v-if="posts && posts.length > 0" class="grid gap-8 md:grid-cols-2">
        <PostCard v-for="post in posts" :key="post.path" :title="post.title" :description="post.description"
          :date="post.date" :slug="post.path.substring(6)" :tags="post.tags" />
      </div>
      <p v-else class="text-gray-500">
        Nenhum post encontrado. Crie seu primeiro post em `content/blog/`.
      </p>
      <div class="text-center mt-6">
        <NuxtLink to="/blog" class="text-blue-500 hover:underline">
          Ver todos os posts →
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<style scoped></style>
