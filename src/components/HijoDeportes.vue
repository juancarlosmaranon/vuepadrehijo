<template>
  <div>
    <h1 style="color:blue">
        {{nombredeporte}}
    </h1>
    <button @click="seleccionarFavHijo">
        Selccionar Favorito
    </button>
  </div>
</template>

<script>
export default {
    name:"HijoDeportes",
    props:["nombredeporte"],
    methods:{
        seleccionarFavHijo(){
            //CUANDO PULSEMOS EN EL HIJO LLAMAMOS AL METODO
            //DEL PARENT QUE NOS HAN ENVIADO POR props
            this.$emit("seleccionarFavPadre","Su fav es "+this.nombredeporte);
        }
    },
    mounted(){
        console.log(this.nombredeporte);
    }
}
</script>

<style>

</style>