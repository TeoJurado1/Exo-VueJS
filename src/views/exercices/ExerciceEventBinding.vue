<script setup>
import { ref } from 'vue'
const compteur = ref(0)
const incrementer = () => {
    compteur.value += 1000
}
const decrementer = () => {
    compteur.value -= 77
}
</script>

<template>
    <div class="card bg-base-100 shadow max-w-4xl mx-auto mt-10">
        <div class="card-body">
            <h2 class="card-title text-2xl">Event Binding</h2>

            <div class="flex items-center justify-center gap-4 py-8">
                <button @click.right="decrementer" class="btn btn-secondary">-</button>
                <span class="text-2xl font-bold">le nombre : {{ compteur }}</span>
                <button @click.left="incrementer" class="btn btn-primary">+</button>
            </div>
        </div>
    </div>
</template>