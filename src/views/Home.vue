<template>
  <!--轮播图-->
  <el-carousel
    v-if="swiperList.length"
    class="swiper-container"
    type="card"
    height="25vw"
    :interval="200000"
    :pause-on-hover="true"
  >
    <el-carousel-item v-for="(item, index) in swiperList" :key="index">
      <img :src="HttpManager.attachImageUrl(item.pic)" />
      <!--在轮播图下方显示文案 -->
      <div class="swiper-text">
        <div class="swiper-text-title">{{ item.title }}</div>
        <div class="swiper-text-desc">{{ item.des }}</div>
      </div>
      
    </el-carousel-item>
  </el-carousel>
  <!--热门歌单-->
  <play-list
    class="play-list-container"
    title="歌单"
    path="song-sheet-detail"
    :playList="songList"
  ></play-list>
  <!--热门歌手-->
  <play-list
    class="play-list-container"
    title="歌手"
    path="singer-detail"
    :playList="singerList"
  ></play-list>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import PlayList from "@/components/PlayList.vue";
import { NavName } from "@/enums";
import { HttpManager } from "@/api";
import mixin from "@/mixins/mixin";

const songList = ref([]); // 歌单列表
const singerList = ref([]); // 歌手列表
const swiperList = ref([]); // 轮播图 每次都在进行查询
const { changeIndex } = mixin();
try {
  HttpManager.getBannerList().then((res) => {
    swiperList.value = (res as ResponseBody).data.sort();
  });

  HttpManager.getSongList().then((res) => {
    songList.value = (res as ResponseBody).data.sort().slice(0, 10);
  });

  HttpManager.getAllSinger().then((res) => {
    singerList.value = (res as ResponseBody).data.sort().slice(0, 10);
  });

  onMounted(() => {
    changeIndex(NavName.Home);
  });
} catch (error) {
  console.error(error);
}
</script>

<style lang="scss" scoped>
.swiper-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  border-radius: 10px 20px 0 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1vh 2vw 0 2vw;
  box-sizing: border-box;
  .swiper-text-title {
    position: relative;
    font-size: 1rem;
    font-weight: bold;
    padding: 0;
  }
  .swiper-text-desc {
    position: relative;
    font-size: 0.7rem;
    margin: 0.5vh;
    padding: 0;
  }
}
@import "@/assets/css/var.scss";

/*轮播图*/
.swiper-container {
  width: 90%;
  margin: auto;
  padding-top: 20px;
  img {
    width: 100%;
  }
}

.swiper-container:deep(.el-carousel__indicators.el-carousel__indicators--outside) {
  display: inline-block;
  transform: translateX(30vw);
}

.el-slider__runway {
  background-color: $color-blue;
}
</style>
