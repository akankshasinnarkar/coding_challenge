import React, {useState, useEffect, useContext} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const SecurityDetail  = (props) => {
    // const location = useLocation();
    // const [securityId] = useState(location.state.id)
    // const [security, setSecurity] = useState([]);

    // const fetchSecurity = async()=>{
    //   const responce = await fetch(`http://localhost:5000/api/security/get-all-securities/${securityId}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'auth-token' : localStorage.getItem('token')
    //     }
    //   });
    //   const sec = await responce.json();
    //   setSecurity(sec);
    //   console.log("Security Fetched")
    // }

    // useEffect(() => { 
    //   fetchSecurity();
    // },[])

    const security = {
      id: 1,
      ISIN: "US1234567890",
      CUSIP: "123456789",
      MaturityDate: "8 Aug 2023",
      Coupon: 5,
      Type: "bond",
      FaceValue: 1000,
      Status: "Matured"
    };


  return (
    <>
      { security.length===0 ?
        <div className="container">Security Not Found</div>
        :
        <>
        <div className="card">
          <div className="card-header inline">
            <h5 className='float-start'>Security ID : {security.id}</h5>
          </div>

          <div className="card-body"> 
          <div className="container  p-1 d-flex flex-row">
            <h5 className="card-title">ISIN : </h5>
            <div className="card-text">
            <span className="badge text-bg-light mx-1">{security.ISIN}</span>
            </div>
            </div>

            <div className="container  p-1 d-flex flex-row">
            <h5 className="card-title">CUSIP : </h5>
            <div className="card-text">
            <span className="badge text-bg-light mx-1">{security.CUSIP}</span>
            </div>
            </div>

            <div className="container  p-1 d-flex flex-row">
            <h5 className="card-title">Maturity Date : </h5>
            <div className="card-text">
            <span className="badge text-bg-light mx-1">{security.MaturityDate}</span>
            </div>
            </div>
            
            <div className="container  p-1 d-flex flex-row">
            <h5 className="card-title">Coupon : </h5>
            <div className="card-text">
            <span className="badge text-bg-light mx-1">{security.Coupon}</span>
            </div>
            </div>
            
            <div className="container  p-1 d-flex flex-row">
            <h5 className="card-title">Type : </h5>
            <div className="card-text">
            <span className="badge text-bg-light mx-1">{security.Type}</span>
            </div>
            </div>
            <div className="container  p-1 d-flex flex-row">
            <h5 className="card-title">Face Value : </h5>
            <div className="card-text">
            <span className="badge text-bg-light mx-1">{security.FaceValue}</span>
            </div>
            </div>
            <div className="container  p-1 d-flex flex-row">
            <h5 className="card-title">Status : </h5>
            <div className="card-text">
            <span className="badge text-bg-light mx-1">{security.Status}</span>
            </div>
            </div>
            
          </div>

        </div>
      </>
      }
    </>
  
  )
}

export default SecurityDetail