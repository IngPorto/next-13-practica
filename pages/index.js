import React, { useState, useEffect } from 'react';

const Home = () => {
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        window.fetch('/api/avo')
            .then(response => response.json())
            //.then(console.log)
            .then(({data, length}) => {
                setProductList(data)
            })
    }, [])
    return (
        <div>
            <h1>Hola mundo</h1>
            {
                productList.map(avo => {
                    return(
                        <div>{avo.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Home;