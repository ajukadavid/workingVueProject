<template>
  <div class="home">
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src

import HomePage from '@/components/HomePage'
export default {
  name: 'HomeView',
  components: {
    HomePage
  }
}
</script>
