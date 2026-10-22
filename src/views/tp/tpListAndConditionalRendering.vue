<script setup>
import { ref, computed } from 'vue'

const nouvelArticle = ref('')
const courses = ref(['pommes (800kg)', 'Yaourt'])
const listeVisible = ref(true)

const ajouter = () => {
    if (nouvelArticle.value !== '') {
        courses.value.push(nouvelArticle.value)
        nouvelArticle.value = ''
    }
}

const supprimer = (index) => {
    courses.value.splice(index, 1)
}

const basculerListe = () => {
    listeVisible.value = !listeVisible.value
}

const texteBouton = computed(() => {
    if (listeVisible.value) {
        return "Masquer Liste"
    } else {
        return "Afficher Liste"
    }
})
</script>

<template>
    <div class="card bg-base-100 shadow max-w-xl mx-auto mt-10">
        <div class="card-body">
            <h1 class="text-3xl text-center">TP : Conditional / List Rendering</h1>
            <h2 class="text-2xl">La liste des courses</h2>

            <input v-model="nouvelArticle" type="text" class="input input-bordered w-full" />

            <button @click="ajouter" class="btn btn-success w-fit">Ajouter à votre Liste de Courses</button>

            <div class="divider"></div>

            <ul v-if="listeVisible" class="list-disc pl-6">
                <li v-for="(article, index) in courses" :key="index" @click="supprimer(index)" class="cursor-pointer">
                    {{ index }} - {{ article }}
                </li>
            </ul>

            <button @click="basculerListe" class="btn btn-info w-fit">{{ texteBouton }}</button>
        </div>
    </div>
</template>