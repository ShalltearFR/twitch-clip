<template>
  <div class="w-96 h-64 bg-[#3E3E3E]/25 rounded-lg text-white">
    <div class="relative p-2">
      <div
        class="absolute bg-black/85 px-3 py-1 rounded-tl-lg rounded-br-lg left-4 top-4"
      >
        {{ data.duration.toFixed(0) }}s
      </div>
      <div
        class="absolute bg-black/85 px-3 py-1 rounded-tr-lg rounded-bl-lg top-4 right-4"
      >
        {{ date.toLocaleDateString() }}
      </div>
      <div
        class="absolute bg-black/85 px-3 py-1 rounded-tr-lg rounded-bl-lg left-4 bottom-4"
      >
        {{ data.views }} vues
      </div>
      <img
        :src="data.thumbnailUrl"
        alt="clip"
        class="w-full h-full rounded-lg"
      />
    </div>
    <p class="text-center font-semibold">
      {{ data.title }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { ClipData } from "~/types/Clips";

const props = defineProps<{
  data: ClipData; // Spécifiez le type ici
}>();

const date = new Date(props.data.creationDate);

// console.log(date);
// console.log(props.data.embedUrl);
</script>
