import React from 'react';

export default function Sendoffline() {
  return (
    <div className="offline-container">
      <div className="offline">
        <div className="offline__header"><span>Send offline</span></div>
        <div className="offline__body">
          <div className="offline__form">
            <div className="offline__row group-double">
              <div className="form-control group-double__1">
                <label className="form-control__label">Type</label>
                <input type="text" placeholder="Ethereum" className="form-control__input" />
              </div>
              <div className="form-control group-double__2">
                <label className="form-control__label">Amount</label>
                <input type="number" placeholder="" className="form-control__input" />
              </div>
            </div>
            <div className="offline__row form-control">
              <label className="form-control__label">To Address</label>
              <input type="text" className="form-control__input" />
            </div>
            <div className="offline__row form-control">
              <label className="form-control__label">Data</label>
              <input type="text" className="form-control__input" />
            </div>
            <div className="offline__row form-control">
              <label className="form-control__label">Gas Limit (usually ranges from 21,000 to 500,000)</label>
              <input type="text" className="form-control__input" />
            </div>
            <div className="offline__row form-control">
              <label className="form-control__label">Nonce</label>
              <input type="text" className="form-control__input" />
            </div>
          </div>
        </div>
        <div className="offline__footer">
          <button className="btn btn-disabled">Send offline</button>
          <p className="action">Clear All</p>
        </div>
      </div>
    </div>
  )
}