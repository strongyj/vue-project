<template>
  <nav>
    <router-link to="/">Home</router-link><br>
    <router-link to="/databinding">Data Binding</router-link> | 
    <router-link to="/databindinghtml">Data Binding HTML</router-link> |
    <router-link to="/databindingInputText">Data Binding InputText</router-link><br>
    <router-link to="/databindingTextarea">Data Binding Textarea</router-link> |
    <router-link to="/databindingselect">Data Binding Select</router-link>
  </nav>
  <router-view/>
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
