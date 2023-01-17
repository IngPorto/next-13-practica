import React from 'react';
import { useRouter } from 'next/router';

export default function ProductItem () {
    const {query: {id}} = useRouter();
    return (    
        <div>
            <p>Esta es la páginal del producto: {id}</p>
        </div>
    )
}