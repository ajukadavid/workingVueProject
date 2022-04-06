<template>
  <div>
    <button @click="getPhotos">Lets see</button>
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
      images: []
    }
  },
  methods: {
    async getPhotos () {
      const unsplash = createApi({
        accessKey: '9i6gZ0RMJr235tpYq5JXbbbGJnPRGDaWnhR_4nBuUpw',
        headers: { 'X-Custom-Header': 'foo' }
      })
      await unsplash.search.getPhotos({
        query: 'dogs',
        page: 1,
        perPage: 10,
        color: 'green',
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
    }
  }
}
</script>

<style scoped>

</style>
