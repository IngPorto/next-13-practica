import React, { useState, useEffect } from 'react';


/* Static Side Generated:
* Genera problemas en el build porque intenta reconstruir la página con la información 
* solicitada por el servicio, pero como el servicio se encuentra justamente en el mismo 
* proyecto, y el proyecto está parado, entonces tira un error

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/avo');
    const {data: productList } = await response.json(); // rename data to productList
            
    return {
        props: {
            productList,
        }
    }
}
*/

// Server Side Render
export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:3000/api/avo');
    const {data: productList } = await response.json(); // rename data to productList
            
    return {
        props: {
            productList,
        }
    }
}

const Home = ({productList}) => {
    //useEffect(()=>{ }, []) // Siempre se ejecuta en el navegador. Client-Site Rendering
    return (
        <div>
            <h1>Hola mundo</h1>
            {
                productList.map((avo, index) => {
                    return(
                        <div key={index}>{avo.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Home;