<script setup>
import { ref, onMounted } from 'vue'

const digimon = ref({})

onMounted(async () => {
    const reponse = await fetch('https://digimon-api.vercel.app/api/digimon')
    const data = await reponse.json()
    digimon.value = data[7]
})
</script>

<template>
    <h2 class="text-xl font-semibold text-secondary mb-2">Digimons :</h2>
    <div v-if="digimon" class="card bg-base-100 shadow-sm max-w-sm">
        <figure>
            <img :src="digimon.img" :alt="digimon.name" />
        </figure>
    </div>
</template>