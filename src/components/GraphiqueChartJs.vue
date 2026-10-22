<script setup>
import { ref, computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const ventes = ref([1200, 1500, 900, 2000, 1800])

const chartData = computed(() => {
    return {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
        datasets: [
            { label: 'Ventes (€)', data: ventes.value, backgroundColor: '#3b82f6' }
        ]
    }
})

const chartOptions = {
    plugins: {
        title: { display: true, text: 'Evolution des ventes par mois' }
    }
}

const ajouter50 = () => {
    const nouvellesVentes = []
    for (let i = 0; i < ventes.value.length; i++) {
        nouvellesVentes.push(ventes.value[i] + 50)
    }
    ventes.value = nouvellesVentes
}

const valeursAleatoires = () => {
    const nouvellesVentes = []
    for (let i = 0; i < ventes.value.length; i++) {
        nouvellesVentes.push(Math.round(Math.random() * 2000))
    }
    ventes.value = nouvellesVentes
}
</script>

<template>
    <Bar :data="chartData" :options="chartOptions" />

    <div class="flex gap-2 mt-4">
        <button @click="ajouter50" class="btn btn-primary">Ajouter +50</button>
        <button @click="valeursAleatoires" class="btn btn-outline">Valeur aléatoire</button>
    </div>
</template>