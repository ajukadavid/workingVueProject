<template>
  <div>
    <h2 class=" text-xl mt-2">Search For Your favorite images</h2>
      <input @keydown.enter="showPhotos" type="text" placeholder="Type in a keyword and press enter to search" v-model="query" class="m-4 border-2 p-4 w-96 focus:outline-none focus:border-amber-500 focus:ring-amber-500"/>
    <button @click="showPhotos" class="bg-amber-300 p-4 hover:bg-amber-500 hover:rounded-lg">Search</button>
    <p v-if="errorMsg" class="text-red-700">Please input a query value</p>
   <PhotoView :images="images"/>
  </div>
</template>

<script>
import { createApi } from 'unsplash-js'
import PhotoView from '@/components/PhotoView'
export default {
  name: 'PhotoDisplay',
  components: { PhotoView },
  data () {
    return {
      images: [],
      query: '',
      errorMsg: null
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
              console.log(img)
              this.images.push(img)
            })
            this.query = ''
          }
        })
    },
    showPhotos () {
      if (this.query === '') {
        this.errorMsg = true
      }
      if (this.images) {
        this.images = []
        return this.getPhotos()
      }
      this.errorMsg = false
      return this.getPhotos()
    }
  },

}
</script>

<style scoped>

</style>
