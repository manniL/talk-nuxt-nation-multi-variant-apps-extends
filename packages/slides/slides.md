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

<VClicks class="space-y-8 mt-16">

* ...wanted to use theming and configs as base of multiple Nuxt projects?
* ...had to work on a project that had a designated version per customer?
* ...tried to use Domain Driven Design in their Nuxt projects?

</VClicks>

<!--

* Panel reference

-->

---

# A whitelabeled / multi-variant app

<div class="flex flex-col items-center">
<img class="h-90 mx-auto" src="https://user-images.githubusercontent.com/36924392/179032453-d1590033-f7bb-4128-99ac-950c1f3341ef.png" alt="Two version of an app with different layouts, branding and slightly different functionalities">
<a href="https://github.com/nuxt/framework/issues/3222#issuecomment-1184656628" target="_blank" class="text-xs">Source</a>
</div>

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

* Totally possible via Nuxt's hooks and module system ([already with Nuxt 2](https://vueschool.io/articles/vuejs-tutorials/domain-driven-design-in-nuxt-apps/))
* Fighting "against" Nuxt's default "flat" folder structure
* Somewhat tedious setup
* Has to be repeated for **every project**

</VClicks>

<img class="h-65 mx-auto" v-click src="https://media2.giphy.com/media/wqbAfFwjU8laXMWZ09/giphy.gif" alt="Stanley from the office rolling his eyes">

<!--

Note: Filip who spoke before wrote a blog post about applying DDD

Wouldn't it be better if could just build an application
-->

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

<div class="flex justify-center items-center h-100 w-full">

# It **was** difficult!

</div>

<style>

h1 {
  @apply !text-9xl;
}

</style>

---

<div class="flex justify-center items-center h-100 w-full">

# `extends`

</div>

<style>

h1 {
  @apply !text-9xl;
}

</style>

---

# `extends` - An overview

<VClicks>

* Extend your Nuxt application *based* on other (partial) applications
* Can be from local folders, NPM packages or even git repositories*
* Uses [unjs/c12](https://github.com/unjs/c12) under the hood

</VClicks>

<VClick>

```ts
// Single base app, e.g. a theme!
export default defineNuxtConfig({
  extends: 'content-wind'
})
```

</VClick>

<VClick>

```ts
// Use multiple sources
export default defineNuxtConfig({
  extends: [
    '../base-app',
    'github:manniL/nuxt-extends-test',
    '../feature-ecommerce-shopify',
    '../feature-tracking-plausible'
  ]
})
```

</VClick>


<!--

*Limitation for Git repos: No deps will be installed

Info: Pooya's talk tomorrow about UnJS

-->

---

# `extends` - Layers

<VClicks>

* Each source will be transformed into a *layer*
* Supports all benefits of the *special* Nuxt folders
* Full IntelliSense, HMR and TS support
* Auto imports also just work!
* Layers can override previous layers

</VClicks>

---

<div class="flex justify-center items-center h-100 w-full">

# Demo?!

</div>

<style>

h1 {
  @apply !text-9xl;
}

</style>


---

# `app.config.{ts,js}`

<VClicks>

* Exposes reactive config for your app
* Can be updated during *runtime*
* Will be added to the client (only) - don't add secrets!
* Full HMR support
* `useAppConfig` composable to retrieve app config
* Infers types based on the provided config 
    * But be typed manually too

</VClicks>

<!--

`app.config.ts` vs runtime config:

Full power of "JavaScript"
Can be changed without touching business logic - "nuxt.config.ts"

-->

---

# `app.config.{ts,js}` - Example

<Code file="app.config.js">

```ts
export default defineAppConfig({
  socials: {
    twitter: 'TheAlexLichter'
  }
})
```

</Code>

<Code v-click file="SomeComponent.vue">

```vue
<script setup lang="ts">
const appConfig = useAppConfig()

console.log(appConfig.socials.twitter) // TheAlexLichter
</script>
```

</Code>

<VClicks>

* Can be used for anything you can imagine!
* e.g.: design tokens, social links, branding texts and more

</VClicks>

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
* Hooks from `nuxt.config.{ts,js}` are not yet merged - use modules instead.
* Documentation - will come up in the next days 🙌

</VClicks>

<!--

* Examples as Sebastien announced
* Working on Docs for extends

-->

---

# Outlook

<VClicks>
  
* Named layers - access files from layers via named alias
    * e.g. `~layerName` - `~layerName/assets/logo.png`
* *Your use cases and creations* - let us know what you are missing, and how you utilize `extends`!
* Follow [#3222](https://github.com/nuxt/framework/issues/3222) for updates of `extends`

</VClicks>

---

# Outro

<VClicks>

* `extends` is a powerful way to supercharge your Nuxt application
* It can be used for lots of different use cases, i.e., themes, DDD and more!
* `app.config.{js,ts}` can be used for runtime

</VClicks>

<img v-click class="h-80 mx-auto" src="/extends-meme.png" alt="Nuxt Extends Meme nut button">

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
