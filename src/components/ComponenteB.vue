<template>
    <div>
        <h1>Componente BBB</h1>
        <h2>Mia Variabile : {{ myVar }}</h2>
        <hr>
    </div>
</template>


<script>
export default {
    name : 'MioPrimoComponente',
    data() {
        return {
            myVar : 'Bianco'
        }
    }
}
</script>

