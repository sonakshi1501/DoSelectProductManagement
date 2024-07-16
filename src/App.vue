<template>
  <div id="app">
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
