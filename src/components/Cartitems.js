import Cartitem from "./Cartitem"

function Cartitems({cartitems}) {
  return (
    <div>Cartitems:
    {cartitems.map(cartitem => <Cartitem key={cartitem.id} cartitem={cartitem}/>)}
    </div>
  )
}

export default Cartitems