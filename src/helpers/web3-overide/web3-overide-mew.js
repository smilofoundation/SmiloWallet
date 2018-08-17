export default function web3OverideMew (web3, wallet, eventHub) {
  if (!wallet) return web3

  const methodOverides = {
    signTransaction (tx, privateKey) {
      return new Promise((resolve, reject) => {
        eventHub.$emit('showTxConfirmModal', tx, wallet.isHardware, wallet.signTransaction.bind(this), (res) => {
          resolve(res)
        })
      })
    },
    signMessage (message) {
      return new Promise((resolve, reject) => {
        eventHub.$emit('showMessageConfirmModal', message, wallet.isHardware, wallet.signMessage, (res) => {
          resolve(res)
        })
      })
    }
  }
  web3.defaultAccount = wallet.getAddressString().toLowerCase()
  web3.eth.defaultAccount = wallet.getAddressString().toLowerCase()
  web3.eth.sendTransaction.method.accounts = {
    wallet: {
      length: 1,
      [wallet.getAddressString().toLowerCase()]: {
        privateKey: true
      }
    },
    ...methodOverides
  }

  web3.eth.signTransaction = methodOverides.signTransaction
  web3.eth.sign = methodOverides.signMessage
}
