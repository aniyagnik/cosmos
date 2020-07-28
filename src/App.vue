<template>
  <div id="app" >
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link class="nav-items" to="/">Home</router-link>
      </b-navbar-brand>
      <b-navbar-brand>
        <router-link class="nav-items" to="/solarSystem">Solar System</router-link>
      </b-navbar-brand>
      <b-navbar-brand>
        <router-link class="nav-items" to="/cosmicBodies">Cosmic Bodies</router-link>
      </b-navbar-brand>
      <b-navbar-brand>
        <router-link class="nav-items" to="/galaxies">Galaxies</router-link>
      </b-navbar-brand>
      <b-navbar-brand>
        <router-link class="nav-items" to="/news">News</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items 4a6590ea9dc7457eaf1d8ad6f6751b60-->
      </b-collapse>
    </b-navbar>
  </div>
  <!-- end of navbar -->
  <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-items{
  color:lightgrey;
}
.nav-items:hover{
  color: white;
  text-decoration: none;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
