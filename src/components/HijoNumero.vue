<template>
  <div>
    <h1>NUMERO HIJO</h1>
    <h2>
        {{numeroelegido}}
    </h2>
    <button @click="metodoHijo">
        Numero {{numeroelegido}}
    </button>
  </div>
</template>

<script>
export default {
    name:"HijoNumero",
    props:["numeroelegido"],
    methods:{
        metodoHijo(){
            this.$emit("metodoPadreRespuesta",this.numeroelegido);
        }
    }
}
</script>

<style>

</style>