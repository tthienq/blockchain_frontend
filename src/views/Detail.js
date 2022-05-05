import React, { useState, useEffect } from 'react';
import BlockInfo from 'components/BlockInfo';
import { useDispatch, useSelector } from 'react-redux'
import { detailWallet, getMiningCoin } from 'redux/blockChain/action'

export default function Detail() {
  const dispatch = useDispatch()
  const [address, setAddress] = useState();
  const getDetail = () => {
    let pk = localStorage.getItem('pk');
    const params = {
      pk: pk,
      address: address
    }
    dispatch(detailWallet(params))
  }

  const getMining = () => {
    const params = {
      address: address
    }
    dispatch(getMiningCoin(params))
  }


  let addressState = useSelector(state => state.blockchain.detail)
  let loading = useSelector(state => state.blockchain.loading)
  let mining = useSelector(state => state.blockchain.mining)

  useEffect(() => {
    if (mining && mining.status === 'success') {
      alert('Bạn vừa đào được ' + mining.coin)
    }
    console.log(mining)
  }, [mining])
  
  return (
    <div className="detail-container">
      <div className="tmp-form-group">
        <div className="tmp-form-control">
          <label className="tmp-form-control__label">My Address</label>
          <input type="text" placeholder="0xCD124" onChange={e => setAddress(e.target.value)} className="tmp-form-control__input" />
        </div>
      </div>
      <div className="d-flex flex-row">
        <button className="detail__btn" onClick={getDetail}>Detail</button>
        <button className="detail__btn" onClick={getMining}>Mining Coin</button>

      </div>
      <BlockInfo address={address} balance={addressState || {}}/>
      {loading > 0 && <div className="d-flex p-5">Đang đào coin xin vui lòng đợi</div>}
    </div>
  )
}