<template>
  <div>
    <van-nav-bar class="nav-bar" title="购物街"/>
    <homeSwiper :banners="banner" />
    <HomeRecommend :recommends="recommend" />
  </div>
</template>

<script>
import homeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'

import { getHomeMultidata, getHomeListData, AddApi} from "network/home";
export default {
  data() {
    return {
      banner: null,
      recommend:null,
      newList:{}
    };
  },
  components:{
    homeSwiper,
    HomeRecommend
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
    getHomeListData().then(res=>{
      this.newList = new AddApi(res.data.banner, res.data.keywords)

    })
  },
};
</script>
