<!--
  Usage:

```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

-->

<script setup lang="ts">
import Default from './default.vue'
defineProps({
  class: {
    type: String,
  },
  heading: {
    type: String,
  }
})
</script>

<template>
  <Default class="two-columns">
    <h1 class="text-center" v-if="heading">{{ heading }}</h1>
    <div class="grid grid-cols-2">
      <div class="col-left" :class="class">
        <slot />
      </div>
      <div class="col-right" :class="class">
        <slot name="right" />
      </div>
    </div>
  </Default>
</template>