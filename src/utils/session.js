export const METAMASK_ADDRESS = '___METAMASK_ADDRESS___'

export function getMetamaskAddress() {
  return localStorage.getItem(METAMASK_ADDRESS)
}

export function saveMetamaskAddress(metamaskAddress) {
  localStorage.setItem(METAMASK_ADDRESS, metamaskAddress)
}

export function removeMetamaskAddress() {
  localStorage.removeItem(METAMASK_ADDRESS)
}
