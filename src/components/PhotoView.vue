<template>
  <div class="flex flex-wrap w-full justify-evenly">
    <div v-for="(image, index) in images" :key="index" class="m-2 grow">
      <img :src="image.urls.regular"  alt="dog pictures"  class="sm:w-64 w-40 cursor-pointer hover:shadow-2xl hover:w-64 shadow-md" @click="toggleModal"/>
    <span class="mt-4">{{image.alt_description}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoView',
  data () {
    return {
      selectedItem: null
    }
  },
  methods: {
    toggleModal (index, item) {
      console.log(index, item)
    }
  },
  props: ['images']
}
</script>

<style scoped>
.full-image {
  width: 100vh;
  height: 100vh;
}
</style>
