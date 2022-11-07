import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PadreDeportes from "./components/PadreDeportes.vue";
import PadreNumero from "./components/PadreNumero.vue";
import PadreComic from './components/PadreComic.vue';
import NuevoDoble from "./components/NuevoDoble.vue";


const misRutas = [

    {
        path:"/", component: HomeComponent
    },
    {
        path:"/padreDeportes", component: PadreDeportes
    },
    {
        path:"/PadreNum", component: PadreNumero
    },
    {
        path:"/padreComic", component: PadreComic
    },
    {
        path:"/nuevoDoble/:numero?", component: NuevoDoble
    },


]

//CREAMOS UNA CONSTANTE QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas 
});

//POR ULTIMO, EXPORTAR LA CONSTANTE ROUTER
export default router;