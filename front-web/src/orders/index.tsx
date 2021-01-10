import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './productslist';
import StepsHeader from './stepsheader';
import './styles.css';
import { OrderLocationdata, Product } from './types';
import OrderLocation from './orderlocation';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, [])

    return(
       <div className="orders-container">
           <StepsHeader/>
           <ProductsList products={products}/>
           <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
       </div> 
    )

}

export default Orders;