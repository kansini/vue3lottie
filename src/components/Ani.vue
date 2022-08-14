<template>
  <div
      :id="id"
      :style="{width:width ,height:height,background:background}"
      @click="toggleAni"></div>
</template>

<script>
import * as lottie from 'lottie-web'
import {uuid} from "./uuid"
import {defineComponent, ref, onMounted} from 'vue'

export default defineComponent({
  props: {
    path: {
      type: String,
      default: "./ani/character.json"
    },
    height: {
      type: String,
      default: '200px'
    },
    width: {
      type: String,
      default: '200px'
    },
    renderer: {
      type: String,
      default: 'svg'
    },
    background: {
      type: String,
      default: 'transparent'
    },
    AniOption: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const isPlay = ref(true)
    const speed = ref(1)
    const id = uuid('ani-')
    const init = () => {
      let cv = document.getElementById(id)
      lottie.loadAnimation({
        container: cv, // the dom element that will contain the animation
        renderer: props.renderer,
        loop: true,
        autoplay: true,
        path: props.path, // the path to the animation json
      })
      // lottie.setDirection(0);
    }
    const toggleSpeed = () => {
      if (speed.value === 1) {
        lottie.setSpeed(2)
        speed.value = 2
      } else {
        lottie.setSpeed(1)
        speed.value = 1
      }
    }
    const toggleAni = () => {
      if (!isPlay.value) {
        lottie.play()
        isPlay.value = true
      } else {
        lottie.pause()
        isPlay.value = false
      }
    }
    onMounted(() => {
      init()
    })
    return {
      isPlay,
      speed,
      id,
      toggleSpeed,
      toggleAni
    }
  }
})
</script>
