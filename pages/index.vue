<script setup>
import ProjectCard from '~/components/ProjectCard.vue'
import PostCard from '~/components/PostCard.vue'
import SocialLinks from '~/components/SocialLinks.vue'

const projects = [
  {
    title: 'Kanban TUI',
    description: 'Aplicativo de Kanban feito em terminal usando Go e Bubble Tea.',
    image: '/images/kanban.png',
    link: 'https://github.com/seuusuario/kanban-tui'
  },
  {
    title: 'Blog em Nuxt',
    description: 'Blog pessoal construído com Nuxt 3 e hospedado no GitHub Pages.',
    image: '/images/blog.png',
    link: 'https://seuusuario.github.io/blog'
  }
]

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
        <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
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
