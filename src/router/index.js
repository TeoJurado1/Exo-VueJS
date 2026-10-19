// Dans ce fichier on va lister tout les routes de notre application

import { createRouter, createWebHistory } from 'vue-router'
//! Cette route HOME (qui est un composant vue) on importe ici et on va l'utiliser dans notre routeur
import Home from '../views/Home.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Cette route n'est pas en lazy loading, elle est directement importée en haut du fichier
        {
            path: '/home',
            component: Home
        },
        // ! Ces routes sont en lazy loading, elle sera chargée uniquement quand on ira sur la page /about
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/exercice-text-interpolation',
            component: () => import('../views/exercices/ExerciceTextInterpolation.vue')
        },
        {
            path: '/exercice-attribute-binding',
            component: () => import('../views/exercices/ExerciceAttributeBinding.vue')
        },
        {
            path: '/exercice-event-binding',
            component: () => import('../views/exercices/ExerciceEventBinding.vue')
        }
    ]
})
export default router