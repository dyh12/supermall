<template>
  <div class="home-recommend">
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in recommends" :key="index">
        <van-image round :src="item.image" />
        <span class="recommend-title">{{item.title}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less">
.home-recommend {
    border-bottom: 8px solid  #ccc;
.recommend-title {
    line-height: 26px;
    color: #777;
}
}

</style>