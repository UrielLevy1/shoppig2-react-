import Product from "./Product"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Products({ products}) {
  return (
    <div><h3 style={{backgroundColor: '#27B3C4'}}>Our products:</h3>
    <br></br>
      {/* for product in products:
             return '<Product ' */}

      <Container fluid>
        <Row>
          {products.map(product => <Col><Product key={product.id} product={product} /></Col>)}
        </Row>
      </Container>


    </div>
  )
}

export default Products
