import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./product.module.css";
import { GetStaticProps } from "next";

// Función obligatorio en las páginas dinámicas para que Next sepa qué páginas se van 
// a volver estáticas. Ya que esta página es dinámica, porque el [id] determina qué 
// se va a mostrar, se debe especificar cuales son las posible direcciones que se 
// renderizarán.

// Problema
//Genera problemas en el build porque intenta reconstruir la página con la información 
//solicitada por el servicio, pero como el servicio se encuentra justamente en el mismo 
//proyecto, y el proyecto está parado, entonces tira un error
/*
export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/avo'); // Genera el mismo problema que el static Props
  const {data: productList }: {data: [TProduct]} = await response.json(); // rename data to productList
  const paths = productList.map( ({id}) => {
    params: {
      id  // se usa id porque lo que recibe la página son [id]
    }
  })
  return {
    paths,
    fallback: false // Cualqueir página que no se incluya en los paths va a dar 404
  }
}

// Permite precargar datos a la página consultada. Pero estos datos se construyen en 
// el build, osea que si los datos de la fuente cambian, no se verá reflejado en la
// página, a no ser que se configura el parámetro -revalidate- 
// return: { props:{  data, }, revalidate: 60 // segundos }
export const getStaticProps: GetStaticProps = async ({params}) => {
  const response = await fetch(`http://localhost:3000/api/avo/${params?.id}`);
  const product = await response.json();
  return {
    props:{
      product,
    }
  }
}
*/

// getServerSideProps permite que el servidor consulte los datos que require la página
// para ser renderizada y enviarlos ya organizados a el cliente junto con la página ya
// construida. Estos datos son consultados cada vez que se consulta la página.

// getServerSideProps se ejecuta del lado del servidor, por lo que no se puede acceder
// a los datos la query usando  'const {query: {id}} = useRouter()', en cambio, el
// método recibe como parámetro el 'context' que tiene el atributo params, donde se
// encuentra los datos de la query.
export const getServerSideProps: GetStaticProps = async ({params}) => {
  const response = await fetch(`http://localhost:3000/api/avo/${params?.id}`);
  const product = await response.json();
  return {
    props: {
      product,
    }
  };
};

export default function ProductItem({ product }: {product: TProduct}) {
  return (
    <div>
      {product && (
        <>
          <p>Esta es la página del producto: {product.id}</p>
          <div>
            <img src={product.image} className={styles.productImage} />
            <h3>{product.name}</h3>
          </div>
          <div>
            <p>About this avocado</p>
            <p>{product.attributes.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
