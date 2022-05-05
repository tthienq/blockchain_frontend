import { takeEvery, all, put, call } from 'redux-saga/effects';
import blockChainType from './types';
import httpBlockChain from 'api/apiBlockChain'

export default function* userSaga() {
  yield all([
    register(),
    getDetail(),
    sendTransaction(),
    getHistory(),
    getMiningCoin()
  ]);
}

function* register() {
  yield takeEvery(blockChainType.REGISTER, function*() {
    try {
      // yield put({ type: blockChainType.LOADING_SHOW});
      let res = yield call(httpBlockChain.createWallet, {}); // api call
      yield put({ type: blockChainType.REGISTER_SUCCESS, payload: res});
      // yield put({ type: blockChainType.LOADING_HIDE});
    } catch (e) { console.log(e) }
  });
}

function* getDetail() {
  yield takeEvery(blockChainType.DETAIL, function*({ payload }) {
    try {
      // yield put({ type: blockChainType.LOADING_SHOW});
      let res = yield call(httpBlockChain.getDetail, payload); // api call
      yield put({ type: blockChainType.DETAIL_SUCCESS, payload: res});
      // yield put({ type: blockChainType.LOADING_HIDE});
    } catch (e) { console.log(e) }
  });
}

function* sendTransaction() {
  yield takeEvery(blockChainType.SEND_TRANSACTION, function*({ payload }) {
    try {
      // yield put({ type: blockChainType.LOADING_SHOW});
      let res = yield call(httpBlockChain.sendTransaction, payload); // api call
      yield put({ type: blockChainType.SEND_TRANSACTION_SUCCESS, payload: res});
      // yield put({ type: blockChainType.LOADING_HIDE});
    } catch (e) { console.log(e) }
  });
}

function* getHistory() {
  yield takeEvery(blockChainType.HISTORY, function*({ payload }) {
    try {
      // yield put({ type: blockChainType.LOADING_SHOW});
      let res = yield call(httpBlockChain.getHistory, payload); // api call
      yield put({ type: blockChainType.HISTORY_SUCCESS, payload: res});
      // yield put({ type: blockChainType.LOADING_HIDE});
    } catch (e) { console.log(e) }
  });
}

function* getMiningCoin() {
  yield takeEvery(blockChainType.MINING, function*({ payload }) {
    try {
      yield put({ type: blockChainType.LOADING_SHOW});
      let res = yield call(httpBlockChain.getMiningCoin, payload); // api call
      yield put({ type: blockChainType.MINING_SUCCESS, payload: res});
      yield put({ type: blockChainType.LOADING_HIDE});
    } catch (e) { console.log(e) }
  });
}


