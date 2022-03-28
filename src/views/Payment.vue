<template>
  <div class='payment-container'>
    <div class='payment-box'>
      <div
          v-for='(item, index) in marketItems' :key='index'
          class='item'
          @click="onClickOpenPayPopup(item)"
      >
        <div class='image'>
          <img :src='`/${item.image}`' :alt='item.name'>
        </div>
        <div class='content'>
          <div class='title'>
            {{ item.name }}
          </div>
          <div class='description'>

          </div>
          <div class='pay-info'>
            <img :src="EthereumIcon" alt="icon">
            <span>
              {{ item.price }}
            </span>
            ETH
          </div>
        </div>
      </div>
    </div>
    <pay-popup
        v-if="isPayPopupOpened"
        ref="payPopup"
        :icon="EthereumIcon"
        @close="onClosePayPopup"
    />
  </div>
</template>

<style lang='scss' scoped>
.payment-container {
  display: flex;
  justify-content: center;
  margin-top: 100px;

  > .payment-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1020px;

    > .item {
      display: flex;
      width: 280px;
      height: 100px;
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, .5);
      box-shadow: 0 0 20px rgba(0, 0, 0, .25);
      color: #fff;
      cursor: pointer;

      &:active {
        opacity: .8;
      }

      > .image {
        position: relative;
        width: 100px;
        height: 100px;
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

        > .title {
          padding-bottom: 5px;
          font-size: 16px;
          font-weight: bold;
          word-break: keep-all;
          border-bottom: 1px solid rgba(var(--hs-dark), .1);
        }

        > .description {
          display: flex;
          flex: 1;
          padding-top: 5px;
          font-size: 12px;
        }

        > .pay-info {
          line-height: 20px;
          font-size: 14px;

          > img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            margin-bottom: -4px;
          }

          > span {
            color: #ffe804;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>

<script>
import PayPopup from "@/components/popup/PayPopup";
import EthereumIcon from "@/assets/images/ethereum.png";
import MarketItems from "@/assets/data/market-items.json"

export default {
  name: "Payment",
  components: {PayPopup},
  data: () => ({
    EthereumIcon,
    isPayPopupOpened: false,
  }),
  computed: {
    marketItems() {
      return MarketItems.items;
    }
  },
  async mounted() {
    console.log(MarketItems);
  },
  methods: {
    async onClickOpenPayPopup(item) {
      this.isPayPopupOpened = true;
      await this.$nextTick();
      this.$refs.payPopup.show(item);
    },
    onClosePayPopup() {
      this.isPayPopupOpened = false;
    }
  }
}
</script>
