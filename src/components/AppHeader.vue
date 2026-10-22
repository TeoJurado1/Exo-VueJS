<template>
    <div class="navbar bg-base-100 shadow-sm">
  <a class="btn btn-ghost text-xl">Teo.vue</a>
  <router-link to="/exercice-text-interpolation" class="btn btn-ghost">Exercice Text Interpolation</router-link>
  <router-link to="/exercice-attribute-binding" class="btn btn-ghost">Exercice Attribute Binding</router-link>
  <router-link to="/exercice-event-binding" class="btn btn-ghost">Exercice Event Binding</router-link>
  <router-link to="/exercice-dynamic-styling" class="btn btn-ghost">Exercice Dynamic Styling</router-link>
  <router-link to="/tp-style-dynamic" class="btn btn-ghost">TP Style Dynamic</router-link>
  <router-link to="/exercice-watcher" class="btn btn-ghost">Exercice Watcher</router-link>
  <router-link to="/tp-watcher-computed" class="btn btn-ghost">TP Watcher Computed</router-link>
  <router-link to="/exercice-lifecycle-api" class="btn btn-ghost">Exercice Lifecycle API</router-link>
  <router-link to="/tp-list-and-conditional-rendering" class="btn btn-ghost">TP List and Conditional Rendering</router-link>
  <router-link to="/exercice-chart-js" class="btn btn-ghost">Exercice Chart.js</router-link>
</div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
import router from '../router';
</script>