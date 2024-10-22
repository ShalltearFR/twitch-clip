<template>
  <div class="flex bg-gray-900">
    <Menu />
    <div class="mx-auto">
      <NavBar v-if="user?.success && user.data" :user="user.data" />

      <div
        v-if="loading"
        class="text-white text-2xl h-[calc(100vh-154px)] flex justify-center items-center flex-col"
      >
        <LoadingSpin />
        <p>Veuillez patienter, cela peut prendre du temps...</p>
      </div>

      <div
        v-else
        class="flex items-center justify-center gap-12 mt-10 flex-wrap"
      >
        <div v-for="clip in clipsData?.data" :key="clip.id">
          <Clip :data="clip" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from "~/components/menu/Menu.vue";
import NavBar from "~/components/nav/NavBar.vue";
import Clip from "~/components/cards/Clip.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { UserResponse } from "~/types/UserResponse";
import type { Clips } from "~/types/Clips";

// Route pour obtenir les informations de l'utilisateur
const route = useRoute();
const userParams = route.params.user;

// Variables pour stocker l'état utilisateur et clips
const user = ref<UserResponse | null>(null);
const clipsData = ref<Clips | null>(null);
const loading = ref(true); // Gérer l'état de chargement

// Charger les données utilisateur sans attendre le résultat

useFetch<UserResponse>(`/api/user/${userParams}`).then((response) => {
  user.value = response.data.value;

  // Une fois que l'utilisateur est chargé, charger les clips
  useFetch<Clips>(`/api/clips/${user.value?.data?.id}`).then((clipResponse) => {
    clipsData.value = clipResponse.data.value;
    loading.value = false; // Terminer le chargement une fois les clips récupérés
  });
});
</script>
