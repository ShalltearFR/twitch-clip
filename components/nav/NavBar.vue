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
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/70066a45-404c-4faf-874e-fcc13f161496-profile_image-70x70.png"
            alt="profil"
            class="w-24 h-24 rounded-full absolute z-10"
          />
        </div>
        <h2 class="text-4xl font-semibold">
          {{ route.params.user }}
        </h2>
      </div>
      <div class="flex items-center gap-10">
        <NuxtLink
          class="w-40 text-center py-1 bg-[#A970FF] font-bold text-lg rounded-tl-lg rounded-br-lg"
          to="/u/user/videos"
          >Videos</NuxtLink
        >
        <NuxtLink
          class="w-40 text-center py-1 bg-[#A970FF] font-bold text-lg rounded-bl-lg rounded-tr-lg"
          to="/u/user/clips"
          >Clips</NuxtLink
        >
      </div>

      <div class="flex gap-2 items-center">
        <span>SEARCH</span>
        <MagnifyingGlassCircleIcon class="h-10 w-10" />
      </div>
    </div>
    <p class="text-white italic text-center mt-2">
      ze suis un text fdfsfsdfsdfds fsdf sf sdf sdf sdf sd fds f fff
      ffsdfdsfdsfsfsdfsdfs fsdfsdf dsf dsfdsfdsfdsfdsf sdfsdfdsfdsf fdsfdsfds
      fds fdsf dsf ds fdsf dsf sd
    </p>
  </nav>
</template>

<script lang="ts" setup>
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/24/outline";
const route = useRoute();
</script>
