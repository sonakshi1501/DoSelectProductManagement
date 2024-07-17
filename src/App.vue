<template>
  <div id="app">
    <h2 style="text-align: center;">Product Management Application</h2>
    <nav>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  color: #42b983;
}
</style>
