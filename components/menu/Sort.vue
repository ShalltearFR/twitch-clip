<template>
  <div>
    <div class="flex items-end justify-center">
      <h3 class="ml-auto text-xl font-semibold">Trier par</h3>
      <BarsArrowDownIcon class="h-6 w-6 ml-auto" aria-hidden="true" />
    </div>
    <div class="flex flex-col mt-4">
      <label class="flex items-center cursor-pointer mb-2">
        <input
          checked
          type="radio"
          name="options"
          value="option1"
          class="mr-2"
        />
        Vues
      </label>
      <label class="flex items-center cursor-pointer mb-2">
        <input type="radio" name="options" value="option2" class="mr-2" />
        Date
      </label>
      <label class="flex items-center cursor-pointer mb-2">
        <input type="radio" name="options" value="option3" class="mr-2" />
        Noms
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BarsArrowDownIcon } from "@heroicons/vue/24/solid";
import { BarsArrowUpIcon } from "@heroicons/vue/24/solid";
</script>
