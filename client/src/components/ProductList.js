import React from 'react';
import axios from 'axios';

export default props => {
    return(
        <div>
            {props.product.map((product, i)=> {
                return <p key={i}>{product.title}, {product.price}, {product.description}</p>
            })}
        </div>
    )
}