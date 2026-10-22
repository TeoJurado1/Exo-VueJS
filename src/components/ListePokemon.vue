<script setup>
import { ref, onMounted } from 'vue'

const pokemons = ref([])

onMounted(async () => {
    const reponse = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await reponse.json()
    pokemons.value = data.results
})
</script>

<template>
    <h2 class="text-xl font-semibold text-secondary mb-2">Les Pokémon :</h2>
    <div class="flex flex-wrap gap-2">
        <span v-for="pokemon in pokemons" :key="pokemon.name" class="badge badge-primary badge-lg">
            {{ pokemon.name }}
        </span>
    </div>
</template>