<template>
  <div>
    <h1>Padre Deportes</h1>
    <h3 style="color:red" v-if="fav">
        {{fav}}
    </h3>
    <ul>
        <li v-for="depor in deportes" :key="depor">
            <!-- RECOGEMOS LOS PROPS DEL HIJO nombredeporte -->
            <HijoDeportes :nombredeporte="depor" 
            v-on:seleccionarFavPadre="seleccionarFavPadre"/>
           
        </li>

    </ul>
  </div>
</template>

<script>
import HijoDeportes from './HijoDeportes.vue';

export default {
    name:"PadreDeportes",
    components:{
        HijoDeportes
    },
    methods:{
        seleccionarFavPadre(nombre){
            console.log(nombre);

            this.fav = nombre;
        }
    },
    data(){
        return{
            deportes:["surf","futbol","squirtin","padel","peonza"],
            fav:null
        }
    }
}
</script>

<style>

</style>