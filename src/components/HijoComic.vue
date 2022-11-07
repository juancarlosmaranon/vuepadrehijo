<template>
    <div>
        <h1 style="color:blue">{{comic.titulo}}</h1>
        <h3>{{comic.descripcion}}</h3>
        <h3 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">
            {{comic.year}}
        </h3>
        <img :src="comic.imagen" :title="comic.titulo"/>
        <div v-if="!isFav">
            <button @click="seleccionarFavoritoHijo()">Seleccionar Favorito</button>
        </div>
        <div>
            <button @click="borrarComicHijo()" style="background-color:red">Borrar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HijoComic',
    props:["comic","isFav","index"],
    methods:{
        seleccionarFavoritoHijo(){
            this.$emit("seleccionarFavorito",this.comic)
        },
        borrarComicHijo(){
            this.$emit("eliminarComic",this.index)
        }
    }
};
</script>

<style scoped>
    @import './../assets/css/estilocomic.css';
</style>