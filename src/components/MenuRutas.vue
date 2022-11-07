<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/padreNum">Padre Num</router-link>
        </li>

        <li>
          <router-link to="/padreComic">Padre Comic</router-link>
        </li>
        <li>
          <router-link to="/nuevoDoble/16">Doble 16</router-link>
        </li>
        <li>
          <router-link to="/nuevoDoble/23">Doble 23</router-link>
        </li>
        <li>
          <router-link to="/nuevoDoble/88">Doble 88</router-link>
        </li>
        <li>
          <router-link to="/nuevoDoble">Doble sin numeros</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuRutas",
};
</script>

<style>
    ul {
    list-style-type: none;

    margin: 0;

    padding: 0;

    overflow: hidden;

    background-color: #333;
    }
    li {
    float: left;

    }
    li a {
    display: block;

    color: white;

    text-align: center;

    padding: 14px 16px;

    text-decoration: none;
    }
    li a:hover:not(.active) {
    background-color: #111;
    }
    .active {
    background-color: #04aa6d;
    }
</style>
