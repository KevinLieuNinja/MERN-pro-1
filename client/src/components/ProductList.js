import React from 'react';
import { Link } from "@reach/router";




export default props => {
    return(
        <div>
            {props.product.map((product, i)=> {
                return(
                    <ul>
                        <li>
                            <Link to={"/product/" + product._id } key={i} > {product.title} </Link> 
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}