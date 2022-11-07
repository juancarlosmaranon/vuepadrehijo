<template>
  <div>
    <h1>Padre Numeros</h1>
    <h1>La suma es: {{suma}}</h1>
      <button @click="crearNumero()">Nuevo Numero</button>
      <div v-for="num in numeros" :key="num">
        <h2>
          <HijoNumero :numeroelegido="num"
          v-on:metodoPadreRespuesta="metodoPadre"/>
        </h2>
        
      </div>
  </div>
</template>

<script>
import HijoNumero from "./HijoNumero.vue";

export default {
  name:"PadreNumero",
  components:{
        HijoNumero
    },
  methods:{
    metodoPadre(lasuma){
      console.log(lasuma);
      this.suma += lasuma;
    },
    crearNumero(){
      this.numeros.push(parseInt(Math.random()*(100)));
    }
  },
  data(){
    return{
      numeros:[14,22],
      suma:0
    }
  }
}
</script>

<style>

</style>