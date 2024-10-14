<template>
  <div class="flex bg-gray-900">
    <Menu />
    <div class="mx-auto">
      <NavBar />
      <div class="flex items-center justify-center gap-12 mt-10 flex-wrap">
        <div v-for="n in cards" :key="n">
          <Clip />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from "~/components/menu/Menu.vue";
import NavBar from "~/components/nav/NavBar.vue";
import Clip from "~/components/cards/Clip.vue";
const cards = ref(10);
</script>
