<template>
  <div class="ani-list">
    <div class="yoga-list-item" v-for="item in yogaList.data">
      <img :src="item.img_url" >
      <div>{{ item.english_name }}</div>
      <div>{{ item.sanskrit_name }}</div>
    </div>
    <!--    <div class="ani-list-item" v-for="item in aniList">-->
    <!--      <vue-lottie-->
    <!--          width="12.5vw"-->
    <!--          height="12.5vw"-->
    <!--          :renderer="item.renderer"-->
    <!--          :path="`./ani/${item.name}.json`"-->
    <!--      />-->
    <!--    </div>-->
  </div>
</template>
<script lang="ts">
import VueLottie from "./components/Ani.vue"
import {defineComponent, reactive} from 'vue'
import {getYogaList} from './api/getYogaList'

export default defineComponent({
  name: 'App',
  components: {
    VueLottie
  },
  setup() {
    interface IYoga {
      img_url: string
      english_name: string
      sanskrit_name: string
    }

    const aniList = reactive([
      {
        name: 'cloudy',
        renderer: 'canvas'
      },
      {
        name: 'alert-setting',
        renderer: 'canvas'
      },
      {
        name: 'blockchain',
        renderer: 'canvas'
      },
      {
        name: 'blue-success',
        renderer: 'canvas'
      },
      {
        name: 'green-success',
        renderer: 'canvas'
      },
      {
        name: 'red-success',
        renderer: 'canvas'
      },
      {
        name: 'pink-success',
        renderer: 'canvas'
      },
      {
        name: 'yellow-success',
        renderer: 'canvas'
      },
      {
        name: 'bookmark',
        renderer: 'canvas'
      },
      {
        name: 'character',
        renderer: 'canvas'
      },
      {
        name: 'check',
        renderer: 'canvas'
      },
      {
        name: 'data-analysis',
        renderer: 'canvas'
      },
      {
        name: 'error-404',
        renderer: 'canvas'
      },
      {
        name: 'fingerScan',
        renderer: 'canvas'
      },
      {
        name: 'gift',
        renderer: 'canvas'
      },
      {
        name: 'image-loading',
        renderer: 'canvas'
      },
      {
        name: 'loading-book',
        renderer: 'canvas'
      },
      {
        name: 'loading-brochure',
        renderer: 'canvas'
      },
      {
        name: 'medal',
        renderer: 'canvas'
      },
      {
        name: 'successfully-added',
        renderer: 'canvas'
      },
      {
        name: 'swimming-pool',
        renderer: 'canvas'
      },
      {
        name: 'train',
        renderer: 'canvas'
      },
      {
        name: 'van',
        renderer: 'svg'
      },
      {
        name: 'walkProcesses',
        renderer: 'canvas'
      },
      {
        name: 'working',
        renderer: 'canvas'
      },
      {
        name: 'network-broken',
        renderer: 'canvas'
      },
      {
        name: 'not-found',
        renderer: 'canvas'
      }
    ])
    const yogaList = reactive({
      data: []
    })
    getYogaList().then(res => yogaList.data = res.data)
    return {
      aniList,
      yogaList
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

.yoga-list-item {
  text-align: center;
  padding: 8px 0;

  img {
    width: 5vw;
  }
}
</style>

