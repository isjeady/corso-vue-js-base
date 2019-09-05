<template>
    <div>
        <h1>Componente AAA</h1>
        <h2>Mia Variabile : {{ colore }}</h2>
        <hr>
        <h2>{{ firstChar(1)}}</h2>
        <h2>{{ firstChar(2)}}</h2>
        <h2>{{ firstChar(3)}}</h2>
        <hr>
    </div>
</template>


<script>
export default {
    name : 'MioPrimoComponente',
    data() {
        return {
            //myVar : 'Bianco'
        }
    },
    methods : {
        firstChar(n){
            return this.colore.substring(0,n);
        }
    },
    props : {
        'colore' : {
            type : String,
            default : 'Celeste'
        }
    }
}
</script>

