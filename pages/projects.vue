<script setup>
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('project').order('date', 'DESC').all();
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-8 text-center">
      Meus Projetos 🚀
    </h1>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Aqui estão alguns dos projetos que desenvolvi, desde aplicações web até ferramentas de
      terminal.
      Todos feitos com muito carinho e aprendizado contínuo.
    </p>
    <div class="grid gap-8 md:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.id || project.title" :title="project.title"
        :description="project.description" :link="project.link" :link-text="project.linkText" :link2="project.link2"
        :link-text2="project.linkText2" :image="project.image" :tags="project.tags" />
    </div>
  </div>
</template>
