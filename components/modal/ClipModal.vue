<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-30"
    @click="closeModal"
  >
    <div class="relative flex flex-col justify-center items-center" @click.stop>
      <transition name="fade">
        <div
          v-if="isVisible"
          class="absolute bg-blue-200/50 -right-8 -top-20 z-50 w-40 p-2 text-center text-lg font-semibold rounded-full"
        >
          Lien copié
        </div>
      </transition>
      <div class="absolute flex gap-5 -top-5 right-0">
        <a
          :href="`https://clips.twitch.tv/${data.id}`"
          target="_blank"
          class="bg-[#A970FF] text-white px-4 py-2 rounded hover:bg-[#af84f0] transition-colors duration-200"
        >
          Lien du clip
        </a>
        <button
          class="bg-[#A970FF] text-white px-4 py-2 rounded hover:bg-[#af84f0] transition-colors duration-200"
          @click="copyToClipboard"
        >
          Partager
        </button>
      </div>
      <iframe
        class="rounded-xl"
        :src="`https://clips.twitch.tv/embed?clip=${data.id}&parent=https://clip-twitch.vercel.app&autoplay=true&width=960&height=540`"
        width="960"
        height="540"
        scrolling="no"
        frameborder="0"
        allow="fullscreen"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ClipData } from "~/types/Clips";
import { ref, defineProps, defineEmits } from "vue";

const isVisible = ref(false);

const props = defineProps<{
  data: ClipData;
}>();

const emit = defineEmits();

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(`https://clips.twitch.tv/${props.data.id}`)
    .then(() => {
      isVisible.value = true;
      setTimeout(() => {
        isVisible.value = false;
      }, 2000);
    })
    .catch((err) => {
      console.error("Erreur lors de la copie : ", err);
    });
};

const closeModal = () => emit("close");
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
