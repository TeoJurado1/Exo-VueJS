<script setup>
import { ref } from 'vue'

const texte = ref('')

const couleur = ref('')

const afficherTitre = ref(true)

function toggleTitre() {
  afficherTitre.value = !afficherTitre.value
}
</script>

<template>
  <div>
    <h1>TP Dynamic Styling</h1>

    <input type="text" v-model="texte" class="input input-bordered" />

    <h2 :class="{ maClasseHello: texte === 'hello', maClasseWorld: texte === 'world', hidden: !afficherTitre }">HelloWorld (class dynamique)</h2>

    <input type="text" v-model="couleur" class="input input-bordered" />

    <h2 :style="{ backgroundColor: couleur }">Hello World (couleur dynamique)</h2>

    <button @click="toggleTitre">Afficher 1er Titre</button>
  </div>
</template>

<style scoped>
.maClasseHello {
  background-color: orange;
}

.maClasseWorld {
  background-color: purple;
}
</style>