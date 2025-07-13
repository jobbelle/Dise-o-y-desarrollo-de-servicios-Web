# Proyecto: Servicio Web de Registro e Inicio de Sesión

**Evidencia de desempeño:** GA7-220501096-AA5-EV01  
**Componente formativo:** Construcción de API   

---

 Descripción

Este proyecto simula un **servicio web de autenticación** (registro e inicio de sesión) utilizando tecnologías del lado del cliente:

- HTML
- CSS
- JavaScript
- Almacenamiento en `localStorage`

El objetivo es demostrar la codificación básica de un sistema de autenticación que valide el ingreso de un usuario y proporcione mensajes según el resultado.

---

## ✅ Funcionalidades implementadas

- Registro de nuevos usuarios.
- Inicio de sesión para usuarios ya registrados.
- Validación de credenciales.
- Mensajes claros de éxito o error.
- Uso de `localStorage` como base de datos simulada.
- Código estructurado y **comentado** para fácil comprensión.
- Proyecto versionado con **Git**.

---

## 🗂️ Estructura del proyecto

│
├── index.html → Pantalla de inicio de sesión
├── register.html → Pantalla de registro
├── css/
│ └── styles.css → Estilos compartidos
├── js/
│ └── auth.js → Lógica de autenticación
├── README.md → Descripción del proyecto


---

## 💻 Instrucciones de uso

1. Clona el repositorio o descarga el proyecto.
2. Abre `index.html` para iniciar sesión o `register.html` para registrarte.
3. Los usuarios se almacenan localmente en el navegador con `localStorage`.
4. Puedes verificar los datos guardados en el inspector del navegador → pestaña "Aplicación" → "Local Storage".

---

## 🧪 Pruebas

- Regístrate con un nuevo usuario.
- Intenta iniciar sesión con un usuario correcto: obtendrás un mensaje satisfactorio.
- Intenta iniciar sesión con datos incorrectos: se mostrará un error.

---

## 🛠️ Herramientas de versionamiento

Se utilizó **Git** para el control de versiones y documentación del proceso de desarrollo.

---

## 📌 Observaciones

Este proyecto es una versión básica sin conexión a una base de datos externa ni servidor backend. Su objetivo es demostrar los principios fundamentales de validación de usuarios en el navegador.

