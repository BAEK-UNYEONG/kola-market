<template>
  <div class="backdrop" @click.self="close">
    <div class="pay-popup-container">
      <div class="close" @click="close">
        X
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);

  > .pay-popup-container {
    display: flex;
    position: fixed;
    width: 480px;
    min-height: 360px;
    border-radius: 20px;
    background-color: rgba(150, 155, 160, .95);
    box-shadow: 0 0 60px rgba(0, 0, 0, .5);
  }
}
</style>

<script>
export default {
  name: "PayPopup",
  methods: {
    close() {
      this.$emit("close")
    }
  }
}
</script>
