<template>
  <div class="common-header">
    <div class="container">
      <router-link to="/">
        <font-awesome-icon :icon="['fas', 'house']"/>
        Kola Market
      </router-link>
      <router-link to="/payment">
        <font-awesome-icon :icon="['fas', 'arrow-right-arrow-left']"/>
        Payment
      </router-link>
      <router-link to="/shopping-cart">
        <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
        Shopping Cart
        <div class="alert">
          2
        </div>
      </router-link>
    </div>
    <div class="right-side">
      <div class="item">
        지갑 연결
      </div>
    </div>
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

  > .container,
  > .right-side {
    > a, > .item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 8px 12px;
      border-radius: 8px;
      background: #363636;
      color: #fff;
      font-size: 13px;
      text-decoration: none;
      cursor: pointer;

      > svg {
        margin-right: 5px;
      }

      > .alert {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin-left: 6px;
        padding: 0 6px 2px;
        border-radius: 500rem;
        background: red;
        color: #fff;
        font-size: 11px;
        font-weight: bold;
      }
    }
  }

  > .container {
    display: flex;
    flex: 1;
    margin-left: 20px;

    > a, > .item {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  > .right-side {
    display: flex;
    margin-right: 20px;

    > a, > .item {
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "CommonHeader",
  data: () => ({})
}
</script>
