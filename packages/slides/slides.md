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

# Who of you ever...

<VClicks>

* ...wanted to use theming and configs as base of multiple Nuxt projects?
* ...had to work on a project that had a designated version per customer?
* ...tried to use Domain Driven Design in their Nuxt projects?

</VClicks>

---
layout: intro
---

<div class="flex justify-center items-center h-100 w-full">

# It's difficult!

</div>

<style>

h1 {
  @apply !text-9xl;
}

</style>

---

# Why?

<VClicks>

* Totally possible via Nuxt's hooks and module system
* Fighting "against" Nuxt's default "flat" folder structure
* Somewhat tedious setup
* Has to be repeated for every project

</VClicks>

---

<div class="flex justify-center items-center h-100 w-full">

# It's difficult!

</div>

---

<div class="flex justify-center items-center h-100 w-full">

# It **was** difficult!

</div>

---

# Problem
  * Difficult scenarios:
  * White-labeling applications
    * Branding, text, etc.
    * https://user-images.githubusercontent.com/36924392/179032453-d1590033-f7bb-4128-99ac-950c1f3341ef.png
  * Features for different clients that shouldn't be included in all deploys
    * different Tracking/CRM/eCommerce integration
    * different business-logic in Frontend in general
  * Reuse themes / config(s) in multiple projects
  * Applying DDD design - grouping in modules around domains

---

# A whitelabeled / multi-variant app

<div class="flex flex-col items-center">
<img class="h-90 mx-auto" src="https://user-images.githubusercontent.com/36924392/179032453-d1590033-f7bb-4128-99ac-950c1f3341ef.png" alt="Two version of an app with different layouts, branding and slightly different functionalities">
<a href="https://github.com/nuxt/framework/issues/3222#issuecomment-1184656628" target="_blank" class="text-xs">Source</a>
</div>

---

# Solution

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

---

# Caveats

<VClicks>

* Aliases are always resolved to the final app
    * Don't use `@`/`~`/..., instead use relative paths
* Unexplored - only a few usage examples out there, e.g.:
  * https://github.com/Atinux/content-wind
  * https://github.com/nuxt-themes/typography
  * https://github.com/nuxt-themes/docus
  * https://github.com/nuxt/framework/tree/main/examples/advanced/config-extends

* Hooks are not yet merged

</VClicks>

---

# Outlook

<VClicks>
  
  * Named layers - access files from layers via named alias, e.g. `~layerName` - ``~layerName/assets/logo.png`
  * 

</VClicks>

---

# Outro

* `extends` is a powerful way to supercharge your Nuxt application
* It can be used for lots of different use cases, i.e. themes, DDD and more!

---
layout: intro
---

<div class="flex justify-center items-center h-100 w-full">

# Now go <span class="text-[#00dc82]">explore</span>!

</div>

<style>

h1 {
  @apply !text-8xl;
}

</style>


---
layout: intro
---

# <span class="text-[#00dc82]">Thanks</span> a lot to my sponsors!

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
