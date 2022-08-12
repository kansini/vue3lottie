<template>
  <Ani
      :width="160"
      :height="160"
      renderer="canvas"
      path="./ani/cloudy.json"
  />
</template>
<script lang="ts">
import Ani from "@/components/Ani.vue"
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {Ani}
})
</script>

