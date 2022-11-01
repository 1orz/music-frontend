<template>
  <div class="yin-footer">
    <p>
      <a @click="goHome()">首页</a> | <a @click="goSongList()">歌单</a> |
      <a @click="goSinger()">歌手</a>|
      <a href="https://github.com/1orz/music-frontend">Github开源地址</a>
    </p>

    <p v-for="(item, index) in footerList" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, readonly } from "vue";
import mixin from "@/mixins/mixin";

export default defineComponent({
  setup() {
    const { checkStatus } = mixin();

    const currentYear = new Date().getFullYear();
    const footerList = readonly([
      "© 2021-" + currentYear + " Music Website",
      "Powered by Vue 3.0 + Mybatis-Plus + MySQL + SpringBoot",
      "辽ICP备18009435号-1",
    ]);

    return { footerList };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goSongList() {
      this.$router.push("/song-sheet");
    },
    goSinger() {
      this.$router.push("/singer");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.yin-footer {
  width: 100%;
  height: $footer-height;
  padding: 20px 10px;
  box-sizing: border-box;
  font-size: 14px;
  @include layout(center, center, column);
}

p {
  height: 30px;
}
a {
  color: $color-grey;
  border-bottom: none;
  cursor: pointer;
}
a:hover {
  color: $color-black;
  font-weight: 600;
}
</style>
