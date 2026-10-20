<script setup>
import { ref } from 'vue'

const styleCarte1 = ref({
    backgroundColor: 'white',
})

const styleCarte2 = ref({
    backgroundColor: 'white',
})

function changerCouleurCarte1() {
    styleCarte1.value.backgroundColor = styleCarte1.value.backgroundColor === 'white' ? 'cyan' : 'white'
}

function changerCouleurCarte2() {
    styleCarte2.value.backgroundColor = styleCarte2.value.backgroundColor === 'white' ? 'violet' : 'white'
}

const carte3Active = ref(false)
const carte4Active = ref(false)

function toggleCarte3() {
    carte3Active.value = !carte3Active.value
}

function toggleCarte4() {
    carte4Active.value = !carte4Active.value
}
</script>

<template>
    <div class="card bg-base-100 shadow max-w-4xl mx-auto mt-10">
        <div class="card-body">
            <h2 class="card-title text-2xl">Dynamic Styling</h2>

            <div class="grid grid-cols-2 gap-6">
                <div class="p-4 rounded-lg shadow" :style="styleCarte1" @click="changerCouleurCarte1">
                    Carte 1 via style
                </div>

                <div class="p-4 rounded-lg shadow" :style="styleCarte2" @click="changerCouleurCarte2">
                    Carte 2 via style
                </div>

                <div class="p-4 rounded-lg shadow" :class="{ 'bg-warning': carte3Active, 'bg-base-100': !carte3Active }"@click="toggleCarte3">
                    Carte 3 via class
                </div>

                <div class="p-4 rounded-lg shadow" :class="{ 'bg-warning': carte4Active, 'bg-base-100': !carte4Active }"@click="toggleCarte4">
                    Carte 4 via class
                </div>
            </div>
        </div>
    </div>
</template>