<script setup>
import { ref, watch, computed } from 'vue';
const leNombre = ref(0);
const msg = ref('');
const ajouterPoint = (points) => {
    leNombre.value += points;
};
const indice = computed(() => {
    if (leNombre.value < 7) {
        return 'ESSAIE ENCORE !';
    } else if (leNombre.value === 7) {
        return '7... BINGO !';
    } else {
        return 'tu as dépassé le nombre';
    }
});
watch(leNombre, (newValue) => {
    if (newValue > 30) {
        msg.value = 'BCP BCP mais alors bcp TROP';
        setTimeout(() => {
            leNombre.value = 0;
            msg.value = '';
        }, 7000);
    }
})
</script>

<template>
    <div class="flex justify-center p-8">
        <div class="card w-full max-w-lg bg-base-100 shadow-xl overflow-hidden">

            <!-- Bandeau titre -->
            <div class="bg-primary text-primary-content py-6 text-center">
                <h2 class="text-2xl font-black uppercase">TP REACTIVITE: LE NUMERO GAGNANT</h2>
            </div>

            <div class="card-body items-center text-center gap-6">

                <!-- Boîte du nombre -->
                <div class="bg-base-200 rounded-box shadow px-24 py-4 flex flex-col items-center">
                    <span class="text-xs">Le numéro :</span>
                    <span class="text-5xl font-black text-primary">{{ leNombre }}</span>
                </div>

                <!-- Messages -->
                <p class="text-xl font-bold text-secondary">{{ indice }}</p>
                <p class="bg-error font-bold text-error-content text-sm rounded-box px-4 py-2 shadow empty:hidden">{{ msg }}</p>

                <!-- Boutons collés -->
                <div class="join">
                    <button @click="ajouterPoint(1)" class="btn btn-success join-item">+1</button>
                    <button @click="ajouterPoint(5)" class="btn btn-error join-item">+5</button>
                </div>
            </div>
        </div>
    </div>
</template>