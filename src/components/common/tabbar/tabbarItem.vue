<template>
  <div class="barItem" @click="linkTarget" :style="isActive">
      <div>
        <slot>首页</slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'barItem',
    data() {
        return {
        }
    },
    props:{
        path:String,
        isActiveColor:{
            type:String,
            default:'red'
        }
    },
    methods:{
        linkTarget(){
            this.$router.replace(this.path)
        },
        
    },
    computed:{
        isActive(){
         return this.$route.path.indexOf(this.path) !==-1 ? {color:this.isActiveColor} : {}
        }
    }
};
</script>

<style scoped>
.barItem {
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 49px;
  font-size: 14px;
}
</style>