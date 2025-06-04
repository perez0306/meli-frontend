# Quick Start - Meli Frontend

## ⚙️ Requisitos

- **React 19**
- **Next.js 15**
- **Node.js 21** (preferentemente)

## 🚀 Levantar el proyecto en local

1. **Clona el repositorio:**

   ```bash
   git clone <URL_DEL_REPO>
   cd melifrontend
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   ```
   El proyecto estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Construir el proyecto para producción

1. **Construye el proyecto:**

   ```bash
   npm run build
   # o
   yarn build
   ```

2. **Inicia el servidor en modo producción:**
   ```bash
   npm start
   # o
   yarn start
   ```

---

## 📜 ¿Qué hace cada script?

- **dev**: Levanta el servidor de desarrollo con hot reload usando Next.js y Turbopack.
- **build**: Compila y optimiza el proyecto para producción.
- **start**: Inicia el servidor en modo producción (debe ejecutarse después de `build`).
- **lint**: Ejecuta ESLint para analizar el código y detectar errores o malas prácticas.
- **lint:fix**: Ejecuta ESLint y corrige automáticamente los problemas que puede solucionar.
- **type-check**: Verifica los tipos de TypeScript sin generar archivos de salida.
- **format**: Formatea todo el código usando Prettier.
- **format:check**: Verifica si el código está correctamente formateado con Prettier.
- **test**: Ejecuta los tests con Jest.
- **test:watch**: Ejecuta los tests en modo watch (vuelve a correrlos al detectar cambios).
- **test:coverage**: Ejecuta los tests y muestra el reporte de cobertura.

---

> **Tip:** Antes de hacer un commit, se ejecutan automáticamente los linters y el formateo gracias a Husky y lint-staged.
