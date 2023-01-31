# Proyecto de Práctica NextJS 13
Práctica de NextJS 13 basada en el curso de Platzi

## Creación de API con NextJS
A pesar de ser una herramienta para Frontend, se puede crear un API con el sistema de rutas de NextJS.

Se estableció un API en `pages/api/avo` que permite traer todos los datos de _aguacates_ desde una base de datos simulada. También es posible acceder a un elemento puntal de esta base de datos. 

Estos enpoint solo se encargan de hacer la "conexión" a la _base de datos_ y retornar la información encontrada. Esto se logra usando las clases `IncomingMessage` y `ServerResponse` de la librería nativa de node `http`. Igualmente NextJS entrega un par de interfaces que extienden la funcionalidad de las clases de _http_, y por lo tanto, son más completas:  `NextApiRequest` y `NextApiResponse`.

Con estas dos últimas interfaces, se puede permitir que el objeto _request_ y _response_ tengan un tipado y un comportamiento que facilita la configuración del API.