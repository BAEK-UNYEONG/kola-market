import {createStore} from 'vuex'
import Web3 from '@/domain/web3'
import {getMetamaskAddress, removeMetamaskAddress, saveMetamaskAddress} from '@/utils/session'

const {ethereum} = window

export default createStore({
  state: {
    web3: null,
    account: null,
    balance: 0,
  },
  actions: {
    async loadApplication({dispatch}) {
      const address = getMetamaskAddress()
      if (!address) return
      await dispatch("connectWallet")
    },
    async connectWallet({dispatch, commit}) {
      const web3 = await Web3()
      const accounts = await web3.eth.getAccounts()
      const balance = await dispatch("getBalance")
      commit("SET_WEB3", web3)
      commit("SET_ACCOUNT", accounts[0])
      commit("SET_BALANCE", balance)
      saveMetamaskAddress(accounts[0])
    },
    async disconnectWallet({commit}) {
      commit("SET_WEB3")
      commit("SET_ACCOUNT")
      removeMetamaskAddress()
    },
    async getBalance({getters}, unit = 'ether') {
      const web3 = await Web3()
      const balance = await web3.eth.getBalance(getters.account || ethereum?.selectedAddress)
      return web3.utils.fromWei(balance, unit)
    },
    async pay({dispatch, commit, getters}, data) {
      const sender = getters.account || ethereum?.selectedAddress
      const value = `0x${Number(getters.web3.utils.toWei(data.price.toString(), 'ether')).toString(16)}`
      const transactionParameters = {
        from: sender,
        to: data?.receiver || sender,
        value,
        data: '0x504159204954454d2046524f4d204b4f4c4120544f4b414e2057495448204d4554414d41534b',
        chainId: '0x3',
      }
      const estimateGas = await getters.web3.eth.estimateGas({...transactionParameters})
      const gas = `0x${Number(getters.web3.utils.toWei(String(estimateGas * (data?.gasRate || 1)), 'wei')).toString(16)}`
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          gas,
          ...transactionParameters,
        }],
      })
      const balance = await dispatch("getBalance")
      commit("SET_BALANCE", balance)
      return txHash
    },
  },
  mutations: {
    SET_WEB3: (state, web3 = null) => state.web3 = web3,
    SET_ACCOUNT: (state, account = null) => state.account = account,
    SET_BALANCE: (state, balance = 0) => state.balance = balance,
  },
  getters: {
    web3: state => state.web3,
    account: state => state.account,
    balance: state => state.balance,
  },
})
