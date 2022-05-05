import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from 'redux/blockChain/action';
import * as moment from 'moment';

export default function HistoryTransaction() {
  const dispatch = useDispatch()

  const [address, setAddress] = useState('');
  useEffect(() => {
    dispatch(getHistory({ address: address }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let historyBlock = useSelector(state => state.blockchain.history)
  const onHistory = () => {
    dispatch(getHistory({ address: address}))
  }
  return (
    <div className="history-container">
      <h3>History Transaction</h3>
      <div className="tmp-form-group">
        <div className="tmp-form-control">
          <label className="tmp-form-control__label">My Address</label>
          <input type="text" placeholder="0xCD124" onChange={e => setAddress(e.target.value)} className="tmp-form-control__input" />
        </div>
      </div>
      <div className="history__btn">
        <button onClick={onHistory}>Get Transaction</button>
      </div>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th className="cel-hash">Txn Hash</th>
            <th className="cel-age">Age</th>
            <th className="cel-from">From</th>
            <th className="cel-to">To</th>
            <th className="cel-val">Value</th>
          </tr>
        </thead>
        <tbody>
          { historyBlock && historyBlock.transactions && historyBlock.transactions.length > 0 && historyBlock.transactions.map((item, i) => <tr key={i}>
            <td className="cel-hash">{item.transactionId}</td>
            <td className="cel-age">{moment(item.timestamps).format('YYYY-MM-DD HH:mm')}</td>
            <td className="cel-from">{item.sender}</td>
            <td className="cel-to">{item.recipient}</td>
            <td className="cel-val">{item.amount}</td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  )
}