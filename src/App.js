import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { Header } from './components';
import { Cart, CategoryPage, Main, ProductPage } from './pages';


function App() {

    const [disposablePods, setDisposablePods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then( ({ data }) => {
            setDisposablePods(data.disposablePods)
        })
    }, [])

    return (
        <div className="">
            <Header numbers={['+380 (50) 300 00 00', '+380 (50) 200 00 00','+380 (50) 200 00 00','+380 (50) 200 00 00']}/>
            <Routes>
                <Route exact path="/" element={<Main items={disposablePods}/>}/>
                <Route exact path="/cart" element={<Cart />}/>
            </Routes>
                
            {/* <CategoryPage /> */}
            {/* <Main /> */}
            {/* <ProductPage /> */}
            {/* <Cart />    */}
        </div>
        )
    }

export default App;



