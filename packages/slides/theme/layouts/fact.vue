<template>
  <Default>
    <div class="slidev-layout fact">
      <div class="my-auto">
        <slot />
      </div>
    </div>
  </Default>
</template>

<script setup lang="ts">
import Default from '../layouts/default.vue'
</script>
