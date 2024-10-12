<script lang="ts" setup>
const route = useRoute();
console.log(route.params.user);

// Utilisation de useFetch pour récupérer les données
const { data, pending, error } = await useFetch(`/api/test`);

// Gestion des erreurs
if (error.value) {
  console.error("Erreur lors de la récupération des données :", error.value);
}
</script>

<template>
  <title>{{ data }}</title>

  <h1 v-if="pending">Chargement des données...</h1>
  <h1 v-else-if="error">Erreur : {{ error.message }}</h1>
  <h1 v-else>{{ data }}</h1>

  <div v-for="data2 in data" :key="data2">
    {{ data2 }}
    <!-- Adapte cela en fonction de la structure de tes données -->
  </div>
</template>
