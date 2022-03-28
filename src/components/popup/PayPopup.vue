<template>
  <div class="backdrop" @click.self="close">
    <div class="pay-popup-container">
      <div class="close" @click="close">
        <font-awesome-icon :icon="['fas', 'xmark']"/>
      </div>
      <div class="content">
        <div class="item-info">
          <div class="image">
            <img :src="itemInfo.image" alt="image">
          </div>
          <div class="content">
            <div class="name">
              {{ itemInfo.name }}
            </div>
            <div class="count">
              <select v-model='count' id='units'>
                <option v-for="n in 20" v-bind:key="n">{{ n }}</option>
              </select>
              개
            </div>
          </div>
        </div>
        <div class='receiver-info'>
          보내기
          <input v-model="receiver" placeholder="0x69f57ccEF1C2c26d2B328F2EB1BD4377742f90F3"/>
        </div>
        <div class='pay-info'>
          <img :src="icon" alt="icon">
          TOTAL
          <span>
            {{ totalCount }}
          </span>
          ETH
        </div>
      </div>
      <div class="bottom">
        <div class="item cart">
          <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
          장바구니 담기
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fas', 'coins']"/>
          바로 결제하기
        </div>
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
    flex-direction: column;
    position: fixed;
    width: 480px;
    min-height: 320px;
    border-radius: 20px;
    background-color: rgba(150, 155, 160, .95);
    box-shadow: 0 0 60px rgba(0, 0, 0, .5);

    > .close {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -20px;
      right: -20px;
      width: 48px;
      height: 48px;
      border-radius: 500rem;
      background-color: #fff;
      color: #1a1a1b;
      font-size: 24px;
      box-shadow: 0 0 60px rgba(0, 0, 0, .5);
      cursor: pointer;
      opacity: .8;

      &:hover {
        opacity: 1;
      }
    }

    > .content {
      flex: 1;
      padding: 20px 20px 0 20px;

      > .item-info {
        display: flex;

        > .image {
          display: flex;
          width: 180px;
          height: 180px;
          margin-right: 10px;

          > img {
            display: flex;
            align-items: center;
            justify-content: center;
            width: inherit;
            height: inherit;
            background-color: #888;
            background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444), linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
            background-position: 0 0, 10px 10px;
            background-size: 20px 20px;
            border-radius: 5px;
          }
        }

        > .content {
          display: flex;
          flex: 1;
          flex-direction: column;

          > .name {
            font-size: 24px;
            font-weight: bold;
            word-break: keep-all;
          }

          > .count {
            margin-top: 10px;

            > select {
              padding: 5px 10px;
              border: 1px solid #000;
              outline: none;
            }
          }
        }
      }

      > .receiver-info,
      > .pay-info {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 20px 0 0;
        line-height: 20px;
        font-size: 16px;

        > img {
          width: 48px;
          height: 48px;
        }

        > span {
          margin: 0 10px 4px;
          color: #ffe804;
          font-size: 36px;
          font-weight: bold;
        }
      }

      > .receiver-info {
        > input {
          width: 320px;
          margin-left: 10px;
          padding: 5px 10px;
          border: 1px solid #000;
          outline: none;
        }
      }
    }

    > .bottom {
      display: flex;
      justify-content: space-between;
      height: 50px;
      margin: 20px;

      > .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 210px;
        height: inherit;
        border-radius: 10px;
        background: #1a1a1b;
        color: #fff;
        cursor: pointer;

        &.cart {
          background: #146EBE;
        }

        &:active {
          background: #ffe804;
          color: #1a1a1b;
        }

        > svg {
          font-size: 24px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "PayPopup",
  props: {
    icon: {
      type: String,
      default: () => null,
    },
  },
  data: () => ({
    count: 1,
    receiver: null,
    itemInfo: {
      id: 0,
      image: null,
      name: null,
      price: 0
    },
  }),
  computed: {
    totalCount() {
      const len = this.itemInfo.price.toString().length - 2
      return len > 0 && (this.itemInfo.price * this.count).toFixed(len)
    }
  },
  methods: {
    show(item) {
      this.itemInfo = item;
    },
    close() {
      this.$emit("close")
    }
  }
}
</script>
