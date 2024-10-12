<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <title>Nuxt Routing</title>
  <meta name="referrer" content="no-referrer-when-downgrade" />
  <div>
    <h1>Nuxt Routing set up successfully! {{ $t("title") }}</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
