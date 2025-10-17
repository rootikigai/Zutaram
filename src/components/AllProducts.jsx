import React from 'react';
import { useGetAllProductsQuery } from '../apis/productApi';

const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductsQuery();
    console.log(data);
    console.log("I have gotten here");
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error loading products.</p>;
    }
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {data?.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt="" />
                        <h1><strong>{product.title}</strong></h1>
                        <h3>{product.description}</h3>
                        {/* <p>{product.category}</p> */}
                        <h4>Price: ${product.price}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )

    // return (
    //     <div>AllProducts</div>
    // );
}

export default AllProducts;