<template>
  <!-- Barre latérale fixée -->
  <div
    class="fixed top-0 left-0 flex flex-col w-[300px] h-screen bg-gray-800 text-white px-5 border-black border-r-2"
  >
    <Lang />
    <div class="flex flex-col mt-8 gap-12">
      <FilterTitle />
      <FilterDate />
      <FilterGame />
      <Sort />
    </div>

    <FooterPage />
  </div>

  <!-- Espacement -->
  <div class="ml-[304px]"></div>
</template>

<script lang="ts" setup>
import Lang from "./Lang.vue";
import FilterTitle from "./FilterTitle.vue";
import FilterDate from "./FilterDate.vue";
import FilterGame from "./FilterGame.vue";
import Sort from "./Sort.vue";
import FooterPage from "./Footer.vue";
</script>
