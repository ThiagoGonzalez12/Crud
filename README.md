PROYECTO CRUD
Este proyecto es un crud basico usando las librerias de Nodejs Express y Fyle System.

Instalación
Para instalar el crud, sigue los siguientes pasos:

Clona el repositorio del Crud en tu equipo.
Ejecuta npm install para instalar todas las dependencias.
Ejecuta npm start para iniciar la aplicación.

Uso
Para usar la aplicacion se le recomienda usar POSTMAN asi podemos crear las peticiones y comprobarlas.
Entre en postman y genere una nueva peticion.
ingrese la url http://localhost:3000/users en postman para generar la peticion a la aplicacion
a la izquierda de la url seleccione la operacion que quiera hacer, a continuacion le dejo una explicacion para cada operacion:

Get: Para consultar todos los usuarios en una sola peticion ponga GET en la izquierda de la url y aprete el boton de send para enviar la consulta, a continuacion abajo aparecera la respuesta a nuestra peticion.

Get: Para consultar un usuario por su id ingrese http://localhost:3000/users/(aqui ingrese el numero del id del usuario sin los parentesis) luego aprete el boton de send para enviar la peticion y saldra la respuesta a nuestra peticion en la parte inferior, a continuacion le dejo un ejemplo de como seria la url:

 Ejemplo: http://localhost:3000/users/3

Post: Para crear un usuario ingese la url http://localhost:3000/users en postman y seleccione en la parte izquierda la operacion POST, en las opciones inferiores de la url, aprete en la opcion body y luego en raw, en la izquierda de estas opciones veremos que tenemos la posibilidad de poner el formato de la peticion, pondremos JSON para generar la peticion y a continuacion escribiremos en la caja de texto la informacion de nuestro usuario, le dejare un ejemplo:

{
        "name": "Thiago Gonzalez",
        "email": "Thiago.gonzalez@example.com"
    }

luego de escribir esto apretaremos el boton de send para enviar nuestra operacion, en la parte inferior saldra si la operacion fue exitosa o si hubo algun error.

Put: Para actualizar un usuario ingrese la url http://localhost:3000/users/(aqui ingrese el numero del id del usuario sin los parentesis) en postman y a continuacion con la misma configuracion de la operacion anterior iremos a la caja de texto para poner la informacion que queremos que se reemplace, a continuacion le dejare un ejemplo:

 Ejemplo: http://localhost:3000/users/2

{
        "name": "Actualizar usuario",
        "email": "UsuarioActualizado@example.com"
    }

luego de escribir esto apretaremos el boton de send para enviar nuestra operacion, en la parte inferior saldra si la operacion fue exitosa o si hubo algun error.