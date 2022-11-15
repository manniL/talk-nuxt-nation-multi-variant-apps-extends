<script setup>
defineProps({
  file: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="relative">
  <slot />
  <span v-if="file" class="absolute right-1 top-1">{{file}}</span>
</div>
</template>