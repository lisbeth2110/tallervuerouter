<template>
  <div id="app">

    <nav>
      <router-link to="/">Home</router-link> 
      <br>|
      <router-link to="/about">About</router-link>
       <br>
       <router-link to="/Inicio">Inicio</router-link>
       <br>
       <router-link to="/DashBoardAdm">DashBoardAdm</router-link>
       <br>
       <router-link to="/create">create</router-link>
       <br>
       <router-link to="/index">index</router-link>
       <br>
       <router-link to="/update">update</router-link>
       <br>
       <router-link to="/DashBoardUsuario">DashBoardUsuario</router-link>
       <br>
       <router-link to="/rol">rol</router-link>
       <br>
       <router-link to="/inicioSesion">inicioSesion</router-link>
       <br>
       <sidebar></sidebar>
       <br>
       <router-link to="/Mostrar">Mostrar</router-link>


    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>


import sidebar from '../src/components/sidebar.vue'


    export default {

        name: 'Principal',
        components: {

                sidebar,

        },

    }
  </script>