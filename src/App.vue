<template>
  <NavBar />
  <router-view/>
<FooterComp />
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterComp from '@/components/Footer'
export default {
  components: {
    FooterComp,
    NavBar
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@500&display=swap');
#app {
  font-family: 'Akshar', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
