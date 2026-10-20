<template>
    <div class="navbar bg-base-100 shadow-sm">
  <a class="btn btn-ghost text-xl">Teo.vue</a>
  <router-link to="/home" class="btn btn-ghost">Home</router-link>
  <router-link to="/about" class="btn btn-ghost">About</router-link>
  <router-link to="/contact" class="btn btn-ghost">Contact</router-link>
  <router-link to="/exercice-text-interpolation" class="btn btn-ghost">Exercice Text Interpolation</router-link>
  <router-link to="/exercice-attribute-binding" class="btn btn-ghost">Exercice Attribute Binding</router-link>
  <router-link to="/exercice-event-binding" class="btn btn-ghost">Exercice Event Binding</router-link>
  <router-link to="/exercice-dynamic-styling" class="btn btn-ghost">Exercice Dynamic Styling</router-link>
  <router-link to="/tp-style-dynamic" class="btn btn-ghost">TP Style Dynamic</router-link>
</div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
import router from '../router';
</script>