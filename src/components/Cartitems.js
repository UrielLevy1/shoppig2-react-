import Cartitem from "./Cartitem"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cartitems({ cartitems }) {
  return (
    <div><h4 style={{backgroundColor: '#27B3C4'}}>Here's your items in cart:</h4>
    <br>
    </br>
      <Container>
        <Row>
          {cartitems.map(cartitem => <Row> <Cartitem key={cartitem.id} cartitem={cartitem} /></Row>)}
        </Row>
      </Container>
    </div>
  )
}

export default Cartitems