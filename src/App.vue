<template>
  <div class="ani-list">
<!--        <div class="yoga-list-item" v-for="item in yogaList.data">-->
    <!--          <img :src="item.img_url">-->
    <!--          <div>{{ item.english_name }}</div>-->
    <!--          <div>{{ item.sanskrit_name }}</div>-->
    <!--        </div>-->
    <div class="ani-list-item" v-for="item in aniList.data">
      <vue-lottie
          width="12.5vw"
          height="12.5vw"
          :renderer="item.renderer"
          :path="`./ani/${item.name}.json`"
      />
    </div>
  </div>
</template>
<script lang="ts">
import VueLottie from "./components/Ani.vue"
import {defineComponent, reactive} from 'vue'
import {getList} from './api/getList'

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

    interface IAni {
      name: string
      renderer: string
    }

    const aniList = reactive({
          data: []
        }
    )
    const yogaList = reactive({
      data: []
    })
    getList('yoga.json').then((res: { data: IYoga[] }) => yogaList.data = res.data)
    getList('ani.json').then((res: { data: IAni[] }) => aniList.data = res.data)
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

