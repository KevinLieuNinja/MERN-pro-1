import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Axios from 'axios';


export default ()=> {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        Axios.get('http://localhost:8000/api/product')
            .then(res => 
                {setProduct(res.data)
                setLoaded(true)})
            .catch(err => console.log('fucked up', err))
    },[])
    return (
        <div>
            <ProductForm/>
            {loaded &&<ProductList product ={product}/>}
        </div>
    )
}