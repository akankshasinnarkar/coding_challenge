import React, {useEffect} from 'react'
import TradeItem from './TradeItem';
import TradeDetail from './TradeDetail';

function Home() {
  useEffect(() => {
    // eslint-disable-next-line
  }, [])

  
    const trades= [
      {
        "id": "trade001",
        "bookId": "book001",
        "counterpartyId": "counterparty001",
        "securityId": "security001",
        "quantity": 100,
        "status": "completed",
        "price": 50.25,
        "buy_sell": "buy",
        "tradeDate": "2023-08-08T10:00:00Z",
        "settlementDate": "2023-08-15"
      },
      {
        "id": "trade002",
        "bookId": "book002",
        "counterpartyId": "counterparty002",
        "securityId": "security002",
        "quantity": 50,
        "status": "pending",
        "price": 75.50,
        "buy_sell": "sell",
        "tradeDate": "2023-08-08T14:30:00Z",
        "settlementDate": "2023-08-16"
      },
      {
        "id": "trade003",
        "bookId": "book003",
        "counterpartyId": "counterparty003",
        "securityId": "security001",
        "quantity": 200,
        "status": "completed",
        "price": 40.75,
        "buy_sell": "sell",
        "tradeDate": "2023-08-07T16:45:00Z",
        "settlementDate": "2023-08-14"
      },
      {
        "id": "trade004",
        "bookId": "book001",
        "counterpartyId": "counterparty004",
        "securityId": "security003",
        "quantity": 75,
        "status": "completed",
        "price": 60.80,
        "buy_sell": "buy",
        "tradeDate": "2023-08-08T11:20:00Z",
        "settlementDate": "2023-08-15"
      },
      {
        "id": "trade005",
        "bookId": "book002",
        "counterpartyId": "counterparty005",
        "securityId": "security002",
        "quantity": 150,
        "status": "pending",
        "price": 78.25,
        "buy_sell": "sell",
        "tradeDate": "2023-08-08T15:45:00Z",
        "settlementDate": "2023-08-16"
      },
      {
        "id": "trade006",
        "bookId": "book003",
        "counterpartyId": "counterparty006",
        "securityId": "security001",
        "quantity": 300,
        "status": "completed",
        "price": 38.90,
        "buy_sell": "sell",
        "tradeDate": "2023-08-07T18:10:00Z",
        "settlementDate": "2023-08-14"
      },
      {
        "id": "trade007",
        "bookId": "book001",
        "counterpartyId": "counterparty007",
        "securityId": "security003",
        "quantity": 120,
        "status": "completed",
        "price": 62.10,
        "buy_sell": "buy",
        "tradeDate": "2023-08-08T11:45:00Z",
        "settlementDate": "2023-08-15"
      },
      {
        "id": "trade008",
        "bookId": "book002",
        "counterpartyId": "counterparty008",
        "securityId": "security002",
        "quantity": 80,
        "status": "pending",
        "price": 76.90,
        "buy_sell": "sell",
        "tradeDate": "2023-08-08T16:15:00Z",
        "settlementDate": "2023-08-16"
      },
      {
        "id": "trade009",
        "bookId": "book003",
        "counterpartyId": "counterparty009",
        "securityId": "security001",
        "quantity": 250,
        "status": "completed",
        "price": 37.50,
        "buy_sell": "sell",
        "tradeDate": "2023-08-07T19:30:00Z",
        "settlementDate": "2023-08-14"
      },
      {
        "id": "trade010",
        "bookId": "book001",
        "counterpartyId": "counterparty010",
        "securityId": "security003",
        "quantity": 90,
        "status": "completed",
        "price": 64.75,
        "buy_sell": "buy",
        "tradeDate": "2023-08-08T12:30:00Z",
        "settlementDate": "2023-08-15"
      }
    ]
  

  return (
    <div className="container my-5">
        This is home from vatsal
        <TradeItem trade={trades[0]}/>
        <TradeItem trade={trades[1]}/>
        <TradeDetail trade={trades[0]}/>
        <TradeDetail trade={trades[1]}/>
    </div>
  )
}

export default Home