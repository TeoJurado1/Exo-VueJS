<script setup>
import ListePokemon from '../../components/ListePokemon.vue'
import MeteoToulouse from '../../components/MeteoToulouse.vue'
import ListeDigimon from '../../components/ListeDigimon.vue'
</script>

<template>
    <div class="card bg-base-100 shadow max-w-2xl mx-auto mt-10">
        <div class="card-body">
            <h1 class="text-3xl font-bold text-primary text-center">Une simple requête HTTP GET</h1>

            <ListePokemon />
            <div class="divider"></div>
            <MeteoToulouse />
            <div class="divider"></div>
            <ListeDigimon />
        </div>
    </div>
</template>