<script setup>
const unLivre = 'Les mémoires de Steven Seagal'
const isOnline = true
const unNombre = 8888
const unTableau = ['du texte', 99]
const unObjet = { "name": "COOL", "tel": "0605030303" }
const fonctionTest = () => {
    return 'Hello World'
}
const html = '<h1>Du HTML</h1>'

</script>

<template>
    <div class="card bg-base-100 shadow max-w-4xl mx-auto mt-10">
        <div class="card-body">
            <h1>Exercice Text Interpolation</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Variable</th>
                        <th>Valeur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>unLivre</td>
                        <td><span class="badge badge-primary">{{ unLivre }}</span></td>
                    </tr>
                    <tr>
                        <td>isOnline</td>
                        <td><span class="badge badge-secondary">{{ isOnline }}</span></td>
                    </tr>
                    <tr>
                        <td>unNombre</td>
                        <td><span class="badge badge-success">{{ unNombre }}</span></td>
                    </tr>
                    <tr>
                        <td>unTableau</td>
                        <td><span class="badge badge-warning">{{ unTableau }}</span></td>
                    </tr>
                    <tr>
                        <td>unTableau[0]</td>
                        <td><span class="badge badge-warning">{{ unTableau[0] }}</span></td>
                    </tr>
                    <tr>
                        <td>unObjet</td>
                        <td><span class="badge badge-accent">{{ unObjet }}</span></td>
                    </tr>
                    <tr>
                        <td>unObjet.name</td>
                        <td><span class="badge badge-accent">{{ unObjet.name }}</span></td>
                    </tr>
                    <tr>
                        <td>unObjet['name']</td>
                        <td><span class="badge badge-accent">{{ unObjet['name'] }}</span></td>
                    </tr>
                    <tr>
                        <td>unObjet.tel</td>
                        <td><span class="badge badge-accent">{{ unObjet.tel }}</span></td>
                    </tr>
                    <tr>
                        <td>fonctionTest</td>
                        <td><span class="badge badge-secondary">{{ fonctionTest() }}</span></td>
                    </tr>
                    <tr>
                        <td>Une ternaire pour la route</td>
                        <td>
                            <span class="badge badge-secondary">{{ $route.path === '/exercice-text-interpolation' ?
                                'Cool' :
                                'Pas cool' }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>On affiche du HTML</td>
                        <td><span class="badge badge-secondary">{{ html }}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>