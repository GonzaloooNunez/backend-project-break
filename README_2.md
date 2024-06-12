# Este es mi proyecto llamado "MI TIENDA DE ROPA", una Web con Node.js y MongoDB

Este proyecto es una aplicación web desarrollada con Node.js, Express y MongoDB, y está desplegada en `localhost:5000`.

## Estructura del Proyecto

api
├── config
│ └── db.js
├── controllers
│ ├── authController.js
│ └── productController.js
├── data
│ └── users.js
├── middlewares
│ ├── authMiddleware.js
│ └── htmlTemplate.js
├── models
│ └── Product.js
├── routes
│ ├── userRoutes.js
│ ├── adminRoutes.js
│ └── authRoutes.js
├── index.js
├── .env
└── README.md

### Descripción de las Partes

#### `config/db.js`

Este archivo contiene la configuración para conectarse a la base de datos MongoDB utilizando Mongoose. Aquí se define la URL de conexión y se maneja la lógica para conectar y gestionar la base de datos.

#### `controllers`

Los controladores contienen la lógica de la aplicación y manejan las solicitudes y respuestas HTTP.

- **`authController.js`**: Gestiona la autenticación de los usuarios, incluyendo el inicio de sesión, registro y logout.
- **`productController.js`**: Maneja las operaciones relacionadas con los productos, como añadir, editar, eliminar y listar productos.

#### `data/users.js`

Este archivo contiene datos de ejemplo para usuarios. Se puede utilizar para poblar la base de datos con usuarios de prueba.

#### `middlewares`

- **`authMiddleware.js`**: Verifica si un usuario está autenticado antes de permitir el acceso a ciertas rutas protegidas.
- **`htmlTemplate.js`**: Proporciona una plantilla HTML base para el documento.

#### `models/Product.js`

Define el modelo de Mongoose para los productos. Esquema y validaciones para los documentos de producto en la base de datos.

#### `routes`

Define las rutas de la aplicación y asigna las rutas a los controladores correspondientes.

- **`userRoutes.js`**: Rutas relacionadas con las operaciones de usuario.
- **`adminRoutes.js`**: Rutas relacionadas con las operaciones de administrador.
- **`authRoutes.js`**: Rutas relacionadas con la autenticación, como login y registro.

#### `index.js`

Punto de entrada de la aplicación. Aquí se configura y se inicia el servidor, se conectan las rutas, se aplican los middlewares y se sirve la aplicación.

## Configuración del Archivo `.env`

El archivo `.env` se utiliza para almacenar variables de entorno que son necesarias para la configuración del proyecto, aquí encontramos el:
`MONGO_URI`
`SESSION_SECRET`
`PORT`
`SECRET_KEY`
