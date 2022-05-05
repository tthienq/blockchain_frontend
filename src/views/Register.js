import React from 'react';
import 'styles/register.scss';
import 'styles/login.scss';
import icLogin from 'assets/login.svg';
import { useDispatch, useSelector } from 'react-redux'
import { registerWallet } from 'redux/blockChain/action'

export default function Register() {
  const dispatch = useDispatch()
  const register = () => {
    dispatch(registerWallet())
  }
  let address = useSelector(state => state.blockchain.wallet)
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__icon"><img src={icLogin} alt="" /></div>
        <div className="login__title">Your Mnemonic Phrase</div>
        <div className="login__footer">
          <button onClick={register} className="login__btn">Create wallet</button>
        </div>
        { address && <div className="login__wallet">
          <span>My address create</span>
          <p>{address}</p>
        </div>}
      </div>
    </div>
  )
}