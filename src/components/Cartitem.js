function Cartitem({cartitem}) {
    return (
      <div>
          <h1>{cartitem.product}</h1>
          <h3>{cartitem.quantity}</h3>
      </div>
    )
  }
  
  export default Cartitem