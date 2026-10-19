<script setup>
import { ref } from 'vue'
const leLien = ref('https://vuejs.org/')
const laImg = ref('https://picsum.photos/400/300')
</script>

<template>
    <div class="card bg-base-100 shadow max-w-4xl mx-auto mt-10">
        <div class="card-body gap-6">
            <h2 class="card-title text-2xl">Attribute Binding</h2>

            <section class="bg-base-200 rounded-box p-4 flex flex-col items-center gap-3">
                <h3 class="text-lg font-semibold self-start">Lien dynamique</h3>
                <a :href="leLien" target="_blank" class="btn btn-primary">Lien vers Vue.js</a>
            </section>

            <section class="bg-base-200 rounded-box p-4 flex flex-col items-center gap-3">
                <h3 class="text-lg font-semibold self-start">Image dynamique</h3>
                <img :src="laImg" alt="Image picsum" class="rounded-box shadow">
            </section>
        </div>
    </div>
</template>