import React from 'react'

const TradeItem = (props) => {
  const {trade} = props;
  const tradeDate = new Date(trade.tradeDate);
  const settlementDate = new Date(trade.settlementDate);
  return (
    <>
    <div className="container my-1">
              <div className="d-flex justify-content-around border border-3 rounded p-2">
                <div className='mx-2'>
                    <i className="fa-sharp fa-solid fa-ticket mx-2"></i>
                    <span className="badge bg-light text-dark">{trade.id}</span>
                </div>
                <div className='mx-2'>
                    <i className="fa-sharp fa-solid fa-ticket mx-2"></i>
                    <span className="badge bg-light text-dark">{trade.securityId}</span>
                </div>
                <div className='mx-2'>
                    <i className="fa-solid fa-calendar-days mx-2"></i>
                    <span className="badge bg-warning text-dark">{tradeDate.getDate()}/{tradeDate.getMonth()}/{tradeDate.getFullYear()}</span>
                </div>
                <div className='mx-2'>
                    <i className="fa-solid fa-calendar-days mx-2"></i>
                    <span className="badge bg-warning text-dark">{settlementDate.getDate()}/{settlementDate.getMonth()}/{settlementDate.getFullYear()}</span>
                </div>
                <div className='mx-2'>
                    <span className="badge bg-info text-dark">{trade.status}</span>
                </div>
              </div>
    </div>
    </>
  )
}

export default TradeItem