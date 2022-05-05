import blockChainType from './types';


export function registerWallet() {
  return {
    type: blockChainType.REGISTER
  };
}

export function detailWallet(payload) {
  return {
    type: blockChainType.DETAIL,
    payload: payload
  };
}

export function sendTransaction(payload) {
  return {
    type: blockChainType.SEND_TRANSACTION,
    payload: payload
  };
}

export function getHistory(payload) {
  return {
    type: blockChainType.HISTORY,
    payload: payload
  };
}

export function getMiningCoin(payload) {
  return {
    type: blockChainType.MINING,
    payload: payload
  };
}