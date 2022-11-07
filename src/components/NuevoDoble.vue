<template>
  <div>
    <h1>Numeero doble parametros</h1>
    <button @click="redirectToHome()">Go to Home</button>
    <h1 style="color: orange" v-if="mensaje">
      {{ mensaje }}
    </h1>
    <div v-else>
      <h2>El numero recibido es: {{ numero }}</h2>
      <h2>El doble es {{ doble }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuevoDoble",
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
    mostrarDoble() {
      this.numero = this.$route.params.numero;
      this.doble = parseInt(this.numero) * 2;
    },
  },
  watch: {
    //EL CONTROL DE LA VARIABLE SE REALIZA
    //MEDIANTE STRING Y NO SE UTILIZA LA PALABRA this
    "$route.params.numero"(nextVal, oldVal) {
      //SI HA CAMBIADO REALIZAMOS ACCIONES
      if (nextVal != oldVal) {
        //ACCIONES
        this.mostrarDoble();
      }
    },
  },
  mounted() {
    //VAMOS A CAPTURAR LOS PARAMETRO EM ESTE METODO
    if (this.$route.params.numero == "") {
      this.mensaje = "No tenemos parametros";
    } else {
      this.mostrarDoble();
      // this.$router.push('/nuevoDoble/16');
    }
  },
  data() {
    return {
      mensaje: null,
      numero: 0,
      doble: 0,
    };
  },
};
</script>

<style scoped></style>
