<script lang="ts" setup>
import { BarsArrowDownIcon } from "@heroicons/vue/24/solid";
import { BarsArrowUpIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="container">
    <div class="lang">
      <img src="/img/lang/FR.webp" alt="FR lang" />
      <img src="/img/lang/EN.webp" alt="EN lang" />
    </div>
    <div class="globalSearch">
      <div class="searchTitle">
        <h3>Rechercher par titre</h3>
        <input type="text" placeholder="Recherche" />
      </div>

      <div>
        <h3>Filtrer par date</h3>
        <div class="globalDate">
          <div class="date">
            <h4>Du</h4>
            <input type="date" placeholder="Du" />
          </div>
          <div class="date">
            <h4>Jusqu'au</h4>
            <input type="date" placeholder="Au" />
          </div>
        </div>
      </div>

      <div>
        <h3>Filtrer par jeu</h3>
        <div class="gamePresentation">
          <img src="" alt="game" width="82" height="82" />
          <input type="text" placeholder="Jeu" />
        </div>
      </div>

      <div>
        <div class="sortTitle">
          <h3>Trier par</h3>
          <span>
            <BarsArrowDownIcon
              class="icon size-6"
              aria-hidden="true"
              style="width: 24px"
            />
          </span>
        </div>
        <div class="radio-group">
          <label class="radio-label">
            <input
              type="radio"
              name="options"
              value="option1"
              class="radio-input"
            />
            Option 1
          </label>
          <label class="radio-label">
            <input
              type="radio"
              name="options"
              value="option2"
              class="radio-input"
            />
            Option 2
          </label>
          <label class="radio-label">
            <input
              type="radio"
              name="options"
              value="option3"
              class="radio-input"
            />
            Option 3
          </label>
        </div>
      </div>
    </div>

    <footer>
      <p>Creation par ShalltearFR</p>
      <p>
        Twitch Clip n'est pas affilié à Twitch ou Amazon. Toutes les marques
        commerciales mentionnées sont la propriété de leurs propriétaires
        respectifs.
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.sortTitle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sortTitle span,
h3 {
  margin-left: auto;
}

/* Style du label */
.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer; /* Pointeur sur le label */
}

.container {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  padding-inline: 20px;
}

.searchTitle {
  text-align: center;
}

.menu-item {
  size: 30px;
}

.globalSearch {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 50px;
}

.globalDate {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

.date {
  text-align: center;
}

h3 {
  margin-block: 5px;
  text-align: center;
}
h4 {
  margin-block: 5px;
}

.lang {
  display: flex;
  padding-block: 15px;
  width: 100%;
  gap: 30px;
  justify-content: end;
}

.lang img {
  height: 35px;
}

footer {
  margin-top: auto;
  text-align: center;
}
</style>
