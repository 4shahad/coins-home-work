import React from 'react'

const coins=({coinName,priceCoint,symbolCoin})=> {
  return (
    <div className="col">
    <div className="card h-100">
      <img src= {"https://cryptoflash-icons-api.herokuapp.com/svg/color/"+symbolCoin} className="card-img-top "height="90px" width="90px"  alt="ImagePhoto"/>
      <div className="card-body">
        <h5 className="card-title">{coinName}</h5>
        <p className="card-text">price : {priceCoint}</p>
      </div>
    </div>
  </div>
  )
}

export default coins