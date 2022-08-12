<template>
  <vue-lottie
      :width="160"
      :height="160"
      renderer="canvas"

  />
</template>
<script lang="ts">
import VueLottie from "./components/Ani.vue"
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {VueLottie}
})
</script>

