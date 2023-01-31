# Proyecto de Práctica NextJS 13
Práctica de NextJS 13 basada en el curso de Platzi

## Creación de API con NextJS
A pesar de ser una herramienta para Frontend, se puede crear un API con el sistema de rutas de NextJS.

Se estableció un API en `pages/api/avo` que permite traer todos los datos de _aguacates_ desde una base de datos simulada. También es posible acceder a un elemento puntal de esta base de datos. 

Estos enpoint solo se encargan de hacer la "conexión" a la _base de datos_ y retornar la información encontrada. Esto se logra usando las clases `IncomingMessage` y `ServerResponse` de la librería nativa de node `http`. Igualmente NextJS entrega un par de interfaces que extienden la funcionalidad de las clases de _http_, y por lo tanto, son más completas:  `NextApiRequest` y `NextApiResponse`.

Con estas dos últimas interfaces, se puede permitir que el objeto _request_ y _response_ tengan un tipado y un comportamiento que facilita la configuración del API.

## Extendiendo el Document 
Ref.: [Custom Document](https://nextjs.org/docs/advanced-features/custom-document)

La extructura jerárquica de NextJS está compuesta por:
- Document
    - App
        - Nuestra Aplicación

## Extendiendo el App
Ref.: [Custom App](https://nextjs.org/docs/advanced-features/custom-app)

## Path alias
Para evitar los `import hell` o también llamados los `dot hell`.
```javascript
import MiComponente from '../../../../componentes/MiComponenteFile/MiComponente'

// Ese tipo de import es reemplazado por:
import MiComponente from '@components/MiComponenteFile/MiComponente'
```

Se modifica el archivo `tsconfing.json` (o en JavaScript creando el archivo `jsconfig.json`) agregando la siguiente información:
```json
{
    ...
    "baseUrl": "./", 
    "paths": {
        "@components/*": ["components/*"],
        "@database": [
        "database/db.ts"
        ]
    },
    ...
}
```

## Explora las soluciones de CSS en NextJS y su flexibilidad
1. Global CSS (.css): Se agrega en el root del proyecto. Puede tener cualquier nombre. Se importa desde cualquier parte.
```javascript
import '../../styles.css';
```

2. Module CSS (.module.css): Es particular a cada componente y está en la carpeta correspondiente de cada componente. Se acostumbra a nombrar igual que el componente, seguido de .module.css.
```javascript
import style from './miComponente.module.css'
...
<div className={styles.container}>

```

3. CSS-in-JS Styled JSX (NextJS - Vercel): Se usa dentro de un componente de Reac por medio de la etiqueta `style`, se acompaña la etiqueta con la propiedad `jsx`.
```javascript
<style jsx>{` 
    .container {
        background: salmon;
    }
`}
</style>
```