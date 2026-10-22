<script setup>
import { ref, onMounted } from 'vue'

const meteo = ref(null)

onMounted(async () => {
    const reponse = await fetch('https://www.prevision-meteo.ch/services/json/toulouse')
    const data = await reponse.json()
    meteo.value = data
})
</script>

<template>
    <h2 class="text-xl font-semibold text-secondary mb-2">Météo Toulouse :</h2>

    <ul v-if="meteo" class="flex flex-col gap-2">
        <li class="bg-base-100 shadow-sm rounded p-2">Température max : <strong>{{ meteo.fcst_day_0.tmax
                }}°C</strong></li>
        <li class="bg-base-100 shadow-sm rounded p-2">Température min : <strong>{{ meteo.fcst_day_0.tmin
                }}°C</strong></li>
        <li class="bg-base-100 shadow-sm rounded p-2">Température actuelle : <strong>{{ meteo.current_condition.tmp
                }}°C</strong></li>
        <li class="bg-base-100 shadow-sm rounded p-2">Condition météo : <strong>{{ meteo.current_condition.condition
                }}</strong></li>
    </ul>

    <p v-else>Chargement de la météo...</p>
</template>