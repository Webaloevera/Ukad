import React from 'react'
import {Card} from '../components';
import '../styles/product.scss'

const Product = (props) => {
    return (
        <div>
            <h1>Product Page</h1>
            <div className="cards">
            {(props.store || []).map((item) => <Card items={item} key={item.id}/>)}
            </div>
        </div>
    )
}


export default Product;
