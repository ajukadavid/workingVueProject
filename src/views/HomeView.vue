<template>
  <div class="home">
    <HomePage />
    <PhotoSearch />
  </div>
</template>

<script>
// @ is an alias to /src

import HomePage from '@/components/HomePage'
import PhotoSearch from '@/components/PhotoSearch'
export default {
  name: 'HomeView',
  components: {
    PhotoSearch,
    HomePage
  }
}
</script>
