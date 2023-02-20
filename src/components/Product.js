function Product({product,addToCart}) {
 
  return (
    <div>

        <h4>Item: {product.name}</h4>
        <h5> Description: {product.description}</h5>
        <br></br>
        <h6 style={{backgroundColor: '#27B3C4'}}>Price in $: {product.price}</h6>
        <br></br>
        {/* <img src={'http://127.0.0.1:8000/static'+product.image} alt={product.name}/> */}
        <img src={'https://shopping-site-django.onrender.com/static'+product.image} alt={product.name}/>
        <br></br>
        <br></br>
        <button style={{color: '#E00A1A'}} onClick={(addToCart) =>addToCart(product.id,1) }>Add to cart</button>
    </div>
  )
}

export default Product