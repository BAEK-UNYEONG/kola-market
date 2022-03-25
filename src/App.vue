<template>
  <div>
    <common-header/>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: rgb(110, 119, 124);
}
</style>

<script>
import CommonHeader from "@/components/common/Header";

export default {
  name: "App",
  components: {
    CommonHeader
  }
}
</script>
