<template>
  <div class="flex justify-end pb-4 w-full gap-8 mt-5">
    <img :src="`${baseURL}/img/lang/FR.webp`" alt="FR lang" class="h-9" />
    <img :src="`${baseURL}/img/lang/EN.webp`" alt="EN lang" class="h-9" />
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
</script>