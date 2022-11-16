---
theme: ./theme
title: "Multi-variant apps with Nuxt 3"
website: lichter.io
handle: TheAlexLichter
favicon: https://lichter.io/img/me@2x.jpg
highlighter: shiki
lineNumbers: true
layout: intro
---

# Multi-<span class="text-[#80eec0]">variant</span> apps

## with <span class="text-[#00dc82]">Nuxt</span> 3 <logos-nuxt-icon class="text-xl" />

### NuxtNation 2022

<style>
  h1 {
    @apply !text-5xl !mt-16;
  }

  h2 {
    @apply !text-3xl !mt-8;
  }

  h3 {
    @apply !text-lg !mt-16;
  }
</style>

---
layout: two-cols
heading: About me
---

<template #default>
<div class="flex flex-col justify-center items-center h-full">
<img
  class="w-75 rounded-full"
  src="https://lichter.io/img/me@2x.webp"
  />
  <h2 class="mt-4">Alexander Lichter</h2>
</div>
</template>

<template #right>
<VClicks class="space-y-2 mt-10 text-xl h-full">

* <mdi-account-check class="text-green-100" /> **Web Development Consultant**
* <mdi-microphone /> Speaker & Instructor
* <logos-nuxt-icon /> Nuxt.js Maintainer
* <mdi-twitter class="text-blue-400" /> @TheAlexLichter
* <mdi-web /> [https://lichter.io](https://lichter.io)
* <mdi-github /> [manniL](https://github.com/manniL)

</VClicks>
</template>

---

# Hook/Intro

* 

# Problem
  * Difficult scenarios:
  * White-labeling applications
    * Branding, text, etc.
  * Features for different clients that shouldn't be included in all deploys
    * different Tracking/CRM/eCommerce integration
    * different business-logic in Frontend in general
  * Reuse themes / config(s) in multiple projects
  * Applying DDD design - grouping in modules around domains
# Solution

* Idea: "Manual" integration via Nuxt hooks (pages:extend, auto import components etc.)
* Better: `extends`
  * Extend your app by using
    * other projects locally
    * NPM packages
    * GitHub repos (limitation: no deps install)
  * Can be multiple!
* Works for all nuxt-related files
  * Config
  * Components
  * Pages
  * Modules
  * ...
* Layers!
  * Override support
  * Referencing each layer
  * Full HMR and TS support
  * Auto imports are kept too
* Caveats
  * Better use relative aliases when building base (no @/~ because it will be resolved to the actual app path)
  * Unexplored - only a few usage examples out there, e.g.:
    * https://github.com/Atinux/content-wind https://github.com/Atinux/content-wind-demo-online
    * https://github.com/nuxt/framework/tree/main/examples/advanced/config-extends


# Outro

---

---
layout: intro
---

# Thanks a lot to my sponsors!

<img src="/sponsors.svg" class="h-70 mx-auto" alt="My GitHub sponsors">

---
layout: two-cols
heading: Thank you for your attention!
---

<template #default>
<div class="flex flex-col justify-center items-center h-full">
<img
  class="w-75 rounded-full"
  src="https://lichter.io/img/me@2x.webp"
  />
  <h2 class="mt-4">Alexander Lichter</h2>
</div>
</template>

<template #right>

* <mdi-account-check class="text-green-100" /> **Web Development Consultant**
* <mdi-microphone /> Speaker & Instructor
* <logos-nuxt-icon /> Nuxt.js Maintainer
* <mdi-twitter class="text-blue-400" /> @TheAlexLichter
* <mdi-web /> [https://lichter.io](https://lichter.io)
* <mdi-github /> [manniL](https://github.com/manniL)

</template>

<style>
  ul {
    @apply space-y-2 mt-10 text-xl h-full;
  }
</style>

---
layout: intro
---

# Slides / Repo

* Slides: [https://lichter.link/nuxt-nation-2022-slides/](https://lichter.link/nuxt-nation-2022-slides/)
* Repo: [https://lichter.link/nuxt-nation-2022-repo/](https://lichter.link/nuxt-nation-2022-repo/)
