import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Cartitems from "./components/Cartitems";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/Login";
import axios from "axios";


function App() {
    const [products, setProducts] = useState([])
    const [cartitems, setCartitems] = useState([])


    useEffect(() => {
        // fetch("http://localhost:8000/products/")
            fetch("https://shopping-site-django.onrender.com/products/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)
            });
        console.log('use effect called!')
    }, [])

    useEffect(() => {
        fetch("http://localhost:8000/cartitems/")
        // fetch("https://shopping-site-django.onrender.com/cartitems/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setCartitems(data)
            });
        console.log('use effect called!')
    }, [])

    function loginUser(user, pass){
        axios.post("http://localhost:8000/login/", {
            username : user,
            password : pass,
        })
    }

    return (
        <div className="App">

            <BrowserRouter>
                <h1>My Cart Front end</h1>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Products products={products} />} />
                    {/* <Route path="/cart" element={<Cart />} /> */}
                    <Route path="/cart" element={
                        <Cartitems cartitems={cartitems} />} />
                    <Route path="/login" element={<LoginPage loginUser={loginUser} />} />    
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
