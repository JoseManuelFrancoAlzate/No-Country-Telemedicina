# Backend Documentation

## IPORTANTE:
Deben ejecutar todos los sql que se encuentran en la carpeta `database`

---
los alter tables `solamente se deben ejecutar` en caso de que la ultima fecha de creacion de la base de datos
sea `anterior` a las fechas de los alter tables

EL QUERY DE CREACION DE LA BASE DE DATOS ESTÁ ACTUALIZADO SIEMPRE

- Esto solo es valido mientras se trabaje en local

## Framework
`Express`:
  - [Documentation](https://expressjs.com/es/)
## Dependencies

- `standard`: 
  - Requires ESLint extension.
  - [Documentation](https://standardjs.com/)
  - package.json Config: 
```Javascript
"eslintConfig": {
   "extends": "standard"
}
```

- `node-postgres`:
  - [Documentation](https://node-postgres.com/)

- `Zod`:
  - It's used for validations.
  - [Documentation](https://zod.dev/)