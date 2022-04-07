<template>
  <div>
    <h2 class="font-sans text-xl mt-2">Search For Your favorite images</h2>
      <input type="text" placeholder="Type in a keyword and press enter to search" v-model="query" class="mt-4 border-2 p-4 w-96"/>
      <button @click="showPhotos" class="bg-blue-300 p-4">Search</button>
    <div v-for="(image, index) in images" :key="index">
      <img :src="image"  alt="dog pictures"/>
    </div>
  </div>
</template>

<script>
import { createApi } from 'unsplash-js'
export default {
  name: 'PhotoDisplay',
  data () {
    return {
      images: [],
      query: ''
    }
  },
  methods: {
    async getPhotos () {
      const unsplash = createApi({
        accessKey: '9i6gZ0RMJr235tpYq5JXbbbGJnPRGDaWnhR_4nBuUpw',
        headers: { 'X-Custom-Header': 'foo' }
      })
      await unsplash.search.getPhotos({
        query: this.query,
        page: 1,
        perPage: 10,
        orientation: 'portrait'
      })
        .then(result => {
          if (result.errors) {
            console.log('There was an error fetching the photos')
          } else {
            result.response.results.forEach((img) => {
              this.images.push(img.urls.regular)
            })
          }
        })
    },
    showPhotos () {
      if (this.images) {
        this.images = []
        return this.getPhotos()
      }
      return this.getPhotos()
    }
  }
}
</script>

<style scoped>

</style>
