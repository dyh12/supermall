<template>
        <div class="tabbar">
            <slot></slot>
        </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style scoped>
    .tabbar {
      display: flex;
      align-items: center;
      height: 49px;
      background-color:#ffffff;
      position: fixed;
      width: 100%;
      bottom: 0;
      box-sizing: border-box;
      color: #777;
      box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.05);
    }
</style>