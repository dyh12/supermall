<template>
    <div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
    </div>
</template>

<script>
export default {
    props:{
        banners:{
            type:Array,
        }
    }
}
</script>

<style lang="less" scoped>


.my-swipe .van-swipe-item img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>