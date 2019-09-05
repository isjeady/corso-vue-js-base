<template>
    <div>
        <h1>Componente BBB</h1>
        <h2>Mia Variabile : {{ myVar }}</h2>
        <hr>
    </div>
</template>


<script>
import {eventBus} from '../main.js';
export default {
    name : 'MioPrimoComponente',
    created(){
        eventBus.$on('cambioColore',(v)=>{this.myVar = v;});
    },
    data() {
        return {
            myVar : 'Bianco'
        }
    }
}
</script>

