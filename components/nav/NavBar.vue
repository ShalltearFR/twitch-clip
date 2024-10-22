<template>
  <nav
    class="w-[1200px] mx-auto p-3 bg-gray-800 rounded-b-lg border-b-2 border-black"
  >
    <div class="flex justify-between items-center text-white">
      <div class="flex items-center gap-5">
        <div class="relative w-24 h-24">
          <div
            class="w-24 h-24 bg-black absolute top-1 left-1 rounded-full"
          ></div>
          <a
            :href="`https://twitch.tv/${user.displayName.toLowerCase()}`"
            target="_blank"
          >
            <img
              :src="user.profilePictureUrl"
              alt="profil"
              class="w-24 h-24 rounded-full absolute z-10"
            />
          </a>
        </div>
        <a
          :href="`https://twitch.tv/${user.displayName.toLowerCase()}`"
          target="_blank"
        >
          <h2 class="text-4xl font-semibold">
            {{ user.displayName }}
          </h2>
        </a>
      </div>
      <div class="flex items-center gap-10">
        <NuxtLink
          class="w-40 text-center py-1 bg-[#A970FF] font-bold text-lg rounded-tl-lg rounded-br-lg"
          :to="`/u/${user.displayName.toLowerCase()}/videos`"
          >Videos</NuxtLink
        >
        <NuxtLink
          class="w-40 text-center py-1 bg-[#A970FF] font-bold text-lg rounded-bl-lg rounded-tr-lg"
          :to="`/u/${user.displayName.toLowerCase()}/clips`"
          >Clips</NuxtLink
        >
      </div>

      <div class="flex gap-2 items-center">
        <span>SEARCH</span>
        <MagnifyingGlassCircleIcon class="h-10 w-10" />
      </div>
    </div>
    <p class="text-white italic text-center mt-2">
      {{ user.description }}
    </p>
  </nav>
</template>

<script lang="ts" setup>
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/24/outline";
import type { UserData } from "~/types/UserResponse";
// defineProps(["user"]);
defineProps<{
  user: UserData; // Spécifiez le type ici
}>();

// const route = useRoute();
// const userPath = route.params.user;
</script>
