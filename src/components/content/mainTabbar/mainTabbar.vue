<template>
  <div>
      <tabbar>
          <barItem path="/home" isActiveColor="hotpink"><span class="iconfont icon-huaban8"></span><div>首页</div></barItem>
          <barItem path="/list" isActiveColor="hotpink"><span class="iconfont icon-huaban7"></span><div>分类</div></barItem>
          <barItem path="/car" isActiveColor="hotpink"><span class="iconfont icon-huaban5"></span><div>购物车</div></barItem>
          <barItem path="/profile" isActiveColor="hotpink"><span class="iconfont icon-huaban26"></span><div>我的</div></barItem>
      </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar";
import barItem from "@/components/common/tabbar/tabbarItem";

export default {
  components: {
    tabbar,
    barItem,
  },
};
</script>

<style >
    .iconfont{
        font-size: 18px!important;
    }
</style>