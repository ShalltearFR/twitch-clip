<template>
  <div class="text-center">
    <h3 class="mb-2 text-xl font-semibold">Filtrer par date</h3>
    <div class="flex justify-center gap-5">
      <div class="text-center">
        <h4 class="mb-2">Du</h4>
        <input
          type="date"
          placeholder="Du"
          class="border border-gray-300 rounded-md text-black p-1"
        />
      </div>
      <div class="text-center">
        <h4 class="mb-2">Jusqu'au</h4>
        <input
          type="date"
          placeholder="Au"
          class="border border-gray-300 rounded-md text-black p-1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
