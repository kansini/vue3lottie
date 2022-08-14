<template>
  <div class="ani-list">
    <vue-lottie
        v-for="item in aniList"
        width="12.5vw"
        height="12.5vw"
        renderer="svg"
        :path="`./ani/${item}.json`"
    />
  </div>
</template>
<script lang="ts">
import VueLottie from "./components/Ani.vue"
import {defineComponent, reactive} from 'vue'

export default defineComponent({
  name: 'App',
  components: {VueLottie},
  setup() {
    const aniList = reactive([
      'cloudy',
      'alert-setting',
      'blockchain',
      'blue-success',
      'green-success',
      'red-success',
      'pink-success',
      'yellow-success',
      'bookmark',
      'character',
      'check',
      'data-analysis',
      'error-404',
      'fingerScan',
      'gift',
      'image-loading',
      'loading-book',
      'loading-brochure',
      'medal',
      'successfully-added',
      'swimming-pool',
      'train',
      'van',
      'walkProcesses',
      'working'
    ])
    return {
      aniList
    }
  }
})
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.ani-list {
  display: flex;
  flex-wrap: wrap;
}
</style>

