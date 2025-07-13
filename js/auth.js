// auth.js

// Esta función se ejecuta cuando se carga el documento
document.addEventListener('DOMContentLoaded', () => {

  // Capturamos el formulario de login si estamos en index.html
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Evitamos que se recargue la página

      const username = document.getElementById('loginUser').value;
      const password = document.getElementById('loginPass').value;

      // Obtenemos usuarios guardados en localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Buscamos si existe el usuario con esa contraseña
      const userFound = users.find(user => user.username === username && user.password === password);

      if (userFound) {
        document.getElementById('loginMessage').textContent = '✅ Autenticación satisfactoria.';
        document.getElementById('loginMessage').style.color = 'green';
      } else {
        document.getElementById('loginMessage').textContent = '❌ Usuario o contraseña incorrectos.';
        document.getElementById('loginMessage').style.color = 'red';
      }
    });
  }

  // Capturamos el formulario de registro si estamos en register.html
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Evitamos recargar la página

      const username = document.getElementById('registerUser').value;
      const password = document.getElementById('registerPass').value;

      // Obtenemos los usuarios actuales del localStorage
      let users = JSON.parse(localStorage.getItem('users')) || [];

      // Validamos que el usuario no exista ya
      const userExists = users.find(user => user.username === username);

      if (userExists) {
        document.getElementById('registerMessage').textContent = '⚠️ El usuario ya existe.';
        document.getElementById('registerMessage').style.color = 'orange';
      } else {
        // Si no existe, lo agregamos
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('registerMessage').textContent = '✅ Registro exitoso. Ya puedes iniciar sesión.';
        document.getElementById('registerMessage').style.color = 'green';

        // Limpiamos los campos
        registerForm.reset();
      }
    });
  }
});
