<template>
  <div class="flex flex-wrap w-full justify-evenly">
    <div v-for="(image, index) in images" :key="index" class="m-2">
      <img :src="image"  alt="dog pictures"  class="sm:w-64 w-40" @click="toggleModal"/>
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
