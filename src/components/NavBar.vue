<template>
<div class="bg-amber-300 flex justify-between sm:justify-center flex-row-reverse -p-12">
    <menu class="sm:flex sm:mt-3 sm:justify-between sm:text-3xl hidden">
      <li class="p-3">
        <div class="flex">
          <a href="#">
            Re-Splash <a><img alt="camera" src="../assets/giphy-unscreen.gif"  class="w-16 relative -top-3"/> </a></a>
        </div>
          </li>
    </menu>
<!--Mobile Menu-->

</div>
  <div class="sm:hidden bg-amber-300 flex justify-center sm:justify-center -p-12">
    <img alt="camera" src="../assets/giphy-unscreen.gif"  class="w-14"/>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      mobile: null
    }
  },
  methods: {
    toggleMobileMenu () {
      this.mobile = !this.mobile
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s linear;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-40px);
}
</style>
