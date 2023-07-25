# Mantenedor de Tareas

## Contenidos de este archivo

* Introducción
* Tecnologías utilizadas
* Modelo de Base de Datos
* Cómo ejecutar la aplicación
* Documentación de la API

## Introducción

Bienvenido al repositorio del proyecto Mantenedor de Tareas. Este proyecto es una aplicación web para la gestión de tareas. La aplicación se divide en dos partes: un servidor backend y una aplicación frontend.

## Tecnologías Utilizadas

### Backend
* Java
* Spring Boot
* MongoDB
* Spring Data
* JUnit
* Mockito

### Frontend
* JavaScript
* React
* Redux
* Axios

## Modelo de Base de Datos

Utilizamos MongoDB como nuestra base de datos. Los datos de las tareas se almacenan en la colección "tareas" y los datos del contador se almacenan en la colección "counters".

El modelo de base de datos para la colección "tareas" es el siguiente:

```json
{
    "id": "long",
    "descripcion": "string",
    "fechaCreacion": "date",
    "vigente": "boolean"
}
```
La conexión a la base de datos se realiza a través de MongoDB Atlas. Los detalles de la cadena de conexión están configurados en el archivo `application.properties` del proyecto backend.

## Cómo Ejecutar la Aplicación

### Backend

1. Clone este repositorio en su máquina local.
2. Abra el proyecto en su IDE preferido (como IntelliJ IDEA o Eclipse).
3. Asegúrese de tener Java 11 o superior instalado.
4. Ejecute el proyecto backend. Esto se hace generalmente haciendo clic derecho en la clase principal (`MantenedordetareasApplication`) y seleccionando "Run".

### Backend con Maven

Si prefieres utilizar Maven para ejecutar el backend, sigue estos pasos:

1. Navega hasta el directorio del proyecto backend en la línea de comandos.
2. Ejecuta `mvn clean install` para construir el proyecto y descargar las dependencias.
3. Ejecuta `mvn spring-boot:run` para iniciar la aplicación.

Asegúrate de tener Maven instalado en tu máquina local y agregado a tu PATH. Puedes comprobarlo ejecutando `mvn -v`, lo que debería mostrar la versión de Maven. Si no está instalado, puedes encontrar instrucciones para hacerlo en la [página oficial de Apache Maven](https://maven.apache.org/install.html).

### Frontend

1. Asegúrese de tener Node.js y npm instalados en su máquina local.
2. Navegue hasta el directorio frontend en la línea de comandos.
3. Ejecute `npm install` para instalar las dependencias del proyecto.
4. Ejecute `npm start` para iniciar la aplicación. Esto debería abrir una nueva pestaña en su navegador predeterminado y cargar la aplicación.

## Documentación de la API

La documentación de la API está disponible a través de Swagger. Puede acceder a ella en http://localhost:8080/swagger-ui.html (asegúrese de que el backend esté en funcionamiento).


