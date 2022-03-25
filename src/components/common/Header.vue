<template>
  <div class="common-header">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss" scoped>
.common-header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, .8);
}
</style>

<script>
export default {
  name: "CommonHeader",
  data: () => ({
  })
}
</script>
