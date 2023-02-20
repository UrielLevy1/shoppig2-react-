function Cartitem({cartitem}) {
    return (
      <div>
          <h5 style={{color: '#27B3C4'}}>SKU: {cartitem.product}</h5>
          <h5 style={{color: '#80D102'}}>Quantity: {cartitem.quantity}</h5>
          <br></br>
      </div>
    )
  }
  
  export default Cartitem