<template>
  <div class="main-page">
    <section class="title-label">
      <p>Kola Market</p>
      <p>Trading Protocol</p>
      <p>for Web3</p>
    </section>
    <section class="logo-image">
      <div class="backdrop"/>
      <img :src="ImageLogo" alt="logo">
    </section>
    <section class="buttons">
      <div class="item" @click="goToApp">
        Go to App
      </div>
      <div class="item" @click="goToApp">
        Go to Docs
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 200px);

  > section.title-label {
    line-height: 10px;
    color: #fff;
    font-size: 64px;
    font-weight: bold;
    text-align: center;
  }

  > section.logo-image {
    width: 250px;
    height: 250px;
    margin-top: -80px;
    z-index: -1;

    > .backdrop, img {
      width: inherit;
      height: inherit;
    }

    > .backdrop {
      position: absolute;
      background: linear-gradient(transparent, rgb(110, 119, 124));
    }
  }

  > section.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    > .item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 220px;
      height: 60px;
      border-radius: 14px;
      background: rgba(0, 0, 0, .8);
      color: #fff;
      font-size: 24px;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 50px;
      }

      &:hover {
        background: #ffe804;
        color: #1a1a1b;
      }
    }
  }
}
</style>

<script>
import ImageLogo from "@/assets/images/kola.png"

export default {
  name: "MainPage",
  data: () => ({
    ImageLogo,
  }),
  methods: {
    goToApp() {
      this.$router.push("/payment")
    }
  }
}
</script>
