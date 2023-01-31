import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProductItem () {
    const {query: {id}} = useRouter();
    const [product, setProduct] = useState()

    useEffect(()=>{
        if(typeof id !== 'undefined'){
            window.fetch(`/api/avo/${id}`)
                .then(res => res.json())
                .then((data) => {
                    setProduct(data);
                })
        }
    },[id])

    return (    
        <div>
            <p>Esta es la página del producto: {id}</p>
            {
                product && (
                    <h3>{product.name}</h3>
                )
            }
        </div>
    )
}