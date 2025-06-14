<script setup>
defineProps({
  label: String
})
</script>

<template>
  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
    #{{ label }}
  </span>
</template>
