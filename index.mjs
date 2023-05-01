import express from 'express';
import fs from 'fs';

const app = express();

// Configuración de body-parser para procesar las peticiones JSON
app.use(express.json());

const USERS_FILE_PATH = 'users.json';

// CRUD de usuarios
let users = [];

// Verificar si el archivo existe antes de leer los usuarios
if (fs.existsSync(USERS_FILE_PATH)) {
  readUsersFromFile();
} else {
  console.log(`El archivo ${USERS_FILE_PATH} no existe.`);
}

// Guardar los usuarios en el archivo
function saveUsersToFile() {
  try {
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error(err);
  }
} 

function readUsersFromFile() {
  try {
    const data = fs.readFileSync(USERS_FILE_PATH);
    users = JSON.parse(data);
  } catch (err) {
    console.error(err);
    users = [];
  }
}

// Obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// Obtener un usuario por su ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  res.json(user);
});

// Crear un usuario
app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,

  };
  users.push(user);
  saveUsersToFile();
  res.json({
    message: 'Usuario creado exitosamente',
    user: user,
  });
});

// Actualizar un usuario
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index < 0) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  const user = users[index];
  user.name = req.body.name;
  user.email = req.body.email;
  users[index] = user;
  saveUsersToFile();
  res.json({
    message: 'Usuario actualizado exitosamente',
    user: user,
  });
});

// Eliminar un usuario
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index < 0) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  users.splice(index, 1);
  saveUsersToFile();
  res.json({ message: 'Usuario eliminado exitosamente' });
});

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
