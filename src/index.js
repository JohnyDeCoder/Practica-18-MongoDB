const express = require('express'); // importación de modulos, express, mongoose y dotenv
const mongoose = require('mongoose');
require('dotenv').config({ path: '../config/.env' }); // importación de variables de entorno o ambiente junto con su ruta de destino

const app = express(); // inicialización de express
const port = process.env.PORT || 9000; // creamos el puerto de escucha

// routes
app.get('/', (req, res) => { // creamos la ruta inicial
    res.send('Welcome to my API!'); // enviamos un mensaje de bienvenida si la ruta es correcta
});

// MongoDB connection
mongoose // creamos una conexión a la base de datos
    .connect(process.env.MONGODB_URI) // pasamos la url de conexión de la base de datos de MongoDB Atlas como variable de entorno o ambiente
    .then(() => console.log("Connected to MondoDB Atlas!")) // si la conexión es exitosa, mostramos un mensaje de confirmación
    .catch((err) => console.log(err)); // si la conexión falla, mostramos el error

app.listen(port, () => { // creamos el servidor y le pasamos el puerto de escucha
    console.log('Server is running on port ', port); // si el servidor se inicia correctamente, mostramos un mensaje de confirmación de que el servidor está corriendo en el puerto de escucha
});