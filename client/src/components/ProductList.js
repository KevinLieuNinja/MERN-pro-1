import React from 'react';
import { Link } from "@reach/router";
import axios from 'axios';

export default props => {

    const { removeFromDom } = props;
    const deleteProduct =(productid) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productid)
            .then(res => {
            removeFromDom(productid)
        })
    }

    return(
        <div>
            {props.product.map((product, i)=> {
            return(
                <p key={i}>
                    <Link to={'/product/' + product._id}>
                        {product.title}
                    </Link>
                    |
                    <button onClick = {() => deleteProduct(product._id)}>
                        Delete
                    </button>
                </p>
            )
            })}
        </div>
    )
}