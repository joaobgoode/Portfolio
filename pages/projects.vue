<script setup>
import ProjectCard from '~/components/ProjectCard.vue'

const projects = [
  {
    title: 'Kanban TUI',
    description: 'Aplicativo de Kanban no terminal usando Go e Bubble Tea.',
    image: '/images/kanban.png',
    link: 'https://github.com/seuusuario/kanban-tui'
  },
  {
    title: 'Blog com Nuxt',
    description: 'Blog estático construído em Nuxt 3 e hospedado no GitHub Pages.',
    image: '/images/blog.png',
    link: 'https://seuusuario.github.io/blog'
  },
  {
    title: 'Portfolio Site',
    description: 'Portfólio pessoal responsivo feito com Nuxt 3.',
    image: '/images/portfolio.png',
    link: 'https://seuusuario.github.io/portfolio'
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Aplicativo web simples para gerenciar tarefas do dia a dia.',
    image: '/images/tarefas.png',
    link: 'https://github.com/seuusuario/tarefas-app'
  }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-20">

    <h1 class="text-4xl font-bold mb-8 text-center">
      Meus Projetos 🚀
    </h1>

    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Aqui estão alguns dos projetos que desenvolvi, desde aplicações web, projetos open-source até ferramentas de
      terminal.
      Todos feitos com muito carinho e aprendizado contínuo.
    </p>

    <div class="grid gap-8 md:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>

  </div>
</template>
