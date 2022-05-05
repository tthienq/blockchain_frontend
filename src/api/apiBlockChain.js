import API from './api';

const createWallet = () => {
  return API.post('/create-wallet').then(res => res.data)
}

const getDetail = (params) => {
  return API.get('/my-wallet', { params: params }).then(res => res.data)
}

const sendTransaction = (params) => {
  return API.post('/send-transaction', params).then(res => res.data)
}

const getMiningCoin = (params) => {
  return API.post('/mining', params).then(res => res.data)
}

const getHistory = (params) => {
  return API.get('/history-transaction', { params: params }).then(res => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createWallet,
  getDetail,
  sendTransaction,
  getHistory,
  getMiningCoin
}