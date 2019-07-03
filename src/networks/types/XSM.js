import tokens from '@/tokens/tokens-xsm.json';
import contracts from '@/contracts/contract-abi-eth.json';
import xsm from '@/assets/images/networks/xsm.svg';
// import { EthAbi } from '../ensAbis';

export default {
  name: 'XSM',
  name_long: 'Smilo',
  homePage: 'https://smilo.io',
  blockExplorerTX: 'https://explorer.smilo.network/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.smilo.network/addr/[[address]]',
  chainID: 20080914,
  tokens: tokens,
  contracts: contracts,
  ensResolver: '0x314159265dd8dbb310642f98f50c066173c1259b',
  // ensAbi: EthAbi,
  icon: xsm,
  currencyName: 'XSM'
};
