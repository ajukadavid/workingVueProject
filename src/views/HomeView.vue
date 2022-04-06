<template>
  <div class="home">
    <HomePage />
    <PhotoDisplay />
  </div>
</template>

<script>
// @ is an alias to /src

import HomePage from '@/components/HomePage'
import PhotoDisplay from '@/components/PhotoDisplay'
export default {
  name: 'HomeView',
  components: {
    PhotoDisplay,
    HomePage
  }
}
</script>
