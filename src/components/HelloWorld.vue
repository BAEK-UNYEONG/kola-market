<template>
  <div class="hello">
    <button @click="sendToken">
      보내기
    </button>
  </div>
</template>

<script>
import Web3 from "web3";

const {ethereum} = window;
let web3;
export default {
  name: 'HelloWorld',
  async mounted() {
    if (typeof ethereum === 'undefined') {
      console.log('MetaMask is not installed!');
    }
    await ethereum.enable()
    // We are in the browser and web3 provider has been injected (probably by Metamask)
    // Issue: https://github.com/ethereum/web3.js/issues/2640
    // Use transactionConfirmationBlocks
    web3 = new Web3(ethereum, null, {transactionConfirmationBlocks: 1})
    const acc = await web3.eth.getAccounts();
    console.log(acc[0], "result");




    const amount = Number(1) * parseFloat('0.008')


    console.log(
        web3.utils.toWei(String(amount), 'ether'),
        "동일한가"
    );

    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    ethereum.on('accountsChanged', function (accounts2) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts2);
    });
    console.log(account);
// We currently only ever provide a single account,
// but the array gives us some room to grow.
  },
  methods: {
    async sendToken() {
      // 단위 해결만 하면 되겠는데
      const amount = Number(1) * parseFloat('0.008')


      console.log(
          (web3.utils.toWei(String(amount), 'ether')).toString()
          ,
          "동일하니???"
      )
      const a = 8000000000000000
      console.log(
          a.toString(16)
      )

      const transactionParameters = {
        // value: '0x29a2241af62c0000',
        value: `0x${Number(web3.utils.toWei("0.008", 'ether')).toString(16)}`,
        // gasPrice: '0x09184e72a000',
        // gas: `0x${Number(21000).toString(16)}`,
        to: '0x0847895602175a267Ab5b1a68D743048f2A3380F',
        from: ethereum?.selectedAddress, // must match user's active address.
        data:
            '0x504159204954454d2046524f4d204b4f4c4120544f4b414e2057495448204d4554414d41534b', // Optional, but used for defining smart contract creation and interaction.
        // chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };
      const estimateGas = await web3.eth.estimateGas({...transactionParameters});
      console.log(estimateGas, "가스비");
// txHash is a hex string
// As with any RPC call, it may throw an error
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          gas: `0x${Number(web3.utils.toWei(String(estimateGas * 5), 'wei')).toString(16)}`,
          ...transactionParameters,
        }],
      });
      console.log(txHash, "끝났다 ㅎㅎ");
    }
  }
}
</script>
