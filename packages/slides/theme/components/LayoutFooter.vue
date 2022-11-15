<template>
  <footer class="flex flex-col justify-between w-full mt-auto text-blue-500 dark:text-white">
    <div class="flex justify-between w-full text-blue-500 dark:text-white">
      <a v-if="handle || $slidev.configs.handle" :href="'https://twitter.com/' + (handle || $slidev.configs.handle)"
        target="_blank" class="mb-0 text-blue-500 dark:text-blue-200 !border-b-0">@{{ handle || $slidev.configs.handle }}</a>
      <span>{{ $slidev.nav.currentPage }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">

defineProps({
  website: {
    type: String,
  },
  handle: {
    type: String
  }
})

</script>