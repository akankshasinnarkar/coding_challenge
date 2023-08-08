import React from 'react'

const TradeDetail = (props) => {
    // const fetchTicket = async()=>{
    //   const response = await fetch(`http://localhost:5000/api/project/get-ticket/${ticketId}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'auth-token' : localStorage.getItem('token')
    //     }
    //   });
    //   const tick = await response.json();
    //   tick.createdBy = userIdToName(tick.createdBy);
    //   tick.assignedTo = userIdToName(tick.assignedTo);
    //   const date = new Date(tick.date);
    //   tick.date = `Created on: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    //   setTicket(tick);
    //   setSprintId(tick.currentSprint);
    // }

    const trade = props.trade;
    const tradeDate = new Date(props.trade.tradeDate);
    const settlementDate = new Date(props.trade.settlementDate);
  
  return (
    <div className="container">
      
      <div className="card">
      <div className="card-header">
        {trade.id}
        <a href={`/modify-trade/${trade.id}`} className="btn btn-primary float-end">MODIFY TRADE</a>

      </div>
      <div className="card-body">
        
        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Book Id</h5>
        <div className="card-text">
          {trade.bookId}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Counterparty Id</h5>
        <div className="card-text">
          {trade.counterpartyId}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Security Id</h5>
        <div className="card-text">
          {trade.securityId}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Quantity</h5>
        <div className="card-text">
          {trade.quantity}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Trade Status</h5>
        <div className="card-text">
        <span className="badge text-bg-light mx-1">{trade.status}</span>
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Price</h5>
        <div className="card-text">
          {trade.price}
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Buy/Sell</h5>
        <div className="card-text">
        <span className="badge text-bg-light mx-1">{trade.buy_sell}</span>
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Trade Date</h5>
        <div className="card-text">
        <span className="badge bg-warning text-dark">{tradeDate.getDate()}/{tradeDate.getMonth()}/{tradeDate.getFullYear()}</span>
        </div>
        </div>

        <div className="border border-1 rounded m-3 p-3">
        <h5 className="card-title">Settlement Date</h5>
        <div className="card-text">
        <span className="badge bg-warning text-dark">{settlementDate.getDate()}/{settlementDate.getMonth()}/{settlementDate.getFullYear()}</span>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default TradeDetail;