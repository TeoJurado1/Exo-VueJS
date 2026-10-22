<script setup>
import { ref } from 'vue'
const nouvelArticle = ref('')
const articles = ref([])
function ajouterArticle() {
    articles.value.push(nouvelArticle.value)
    nouvelArticle.value = ''
}
</script>

<template>
    <div class="card bg-base-100 shadow max-w-4xl mx-auto mt-10">
        <div class="card-body">
            <h1>Ma liste de courses</h1>
            <input type="text" class="input input-bordered" v-model="nouvelArticle">
            <ul>
                <li v-for="(article, index) in articles" :key="index" class="badge badge-outline">{{index + 1}} - {{ article }}</li>
            </ul>
            <button class="btn btn-primary" @click="ajouterArticle">Ajouter</button>
            <p>Votre liste est vide</p>
            <button class="btn btn-secondary">Mode urgent</button>
            <button class="btn btn-accent">A+</button>
            <button class="btn btn-info">A-</button>
        </div>
    </div>
</template>