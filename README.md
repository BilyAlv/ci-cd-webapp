# CI/CD WebApp

Este proyecto implementa una aplicación web simple utilizando **Node.js** y configura un pipeline CI/CD con **GitHub Actions**. El objetivo es automatizar las pruebas y el despliegue a **GitHub Pages**.

## Descripción

La aplicación es un servidor web simple construido con **Express** que responde con un mensaje de "¡Hola, mundo!" cuando se accede a la raíz de la aplicación.

El proyecto incluye:
- **Pruebas unitarias** con **Jest**.
- **Pipeline CI/CD** configurado con **GitHub Actions**.
- **Despliegue automático** a **GitHub Pages**.

## Requisitos

Para ejecutar el proyecto localmente, asegúrate de tener instalados los siguientes requisitos:
- [Node.js](https://nodejs.org/) (Versión 18 o superior)
- [Git](https://git-scm.com/)

## Instalación y Ejecución

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu_usuario/ci-cd-webapp.git
    ```

2. Instala las dependencias:

    ```bash
    cd ci-cd-webapp
    npm install
    ```

3. Ejecuta el servidor:

    ```bash
    npm start
    ```

    La aplicación estará corriendo en `http://localhost:3000`.

4. Para ejecutar las pruebas:

    ```bash
    npm test
    ```

## Pruebas

El proyecto utiliza **Jest** para las pruebas unitarias. La prueba principal verifica que la ruta `/` responda con el mensaje "¡Hola, mundo!".

### Cobertura de pruebas

Las pruebas están configuradas para ejecutar una prueba básica de integración con Jest y **Supertest**. La cobertura de código se puede expandir a medida que se agregan nuevas funcionalidades.

## CI/CD Pipeline

Este proyecto está configurado con **GitHub Actions** para automatizar el proceso de integración y despliegue.

### Flujo de trabajo de GitHub Actions

El archivo `.github/workflows/ci-cd-pipeline.yml` contiene la configuración del flujo de trabajo. El pipeline realiza las siguientes acciones:

1. **Checkout** del código desde el repositorio.
2. **Instalación de dependencias** utilizando `npm install`.
3. **Ejecución de pruebas automatizadas** con `npm test`.
4. **Construcción de la aplicación** y generación de archivos estáticos.
5. **Despliegue a GitHub Pages** usando la acción `peaceiris/actions-gh-pages`.

El pipeline se activa cuando se realiza un `push` a la rama `main` o se crea un `pull request` hacia la misma rama.

### Despliegue a GitHub Pages

El pipeline automáticamente despliega la aplicación en **GitHub Pages** después de que las pruebas pasen. La página de la aplicación estará disponible en:


## Guía de Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva característica:
    ```bash
    git checkout -b nueva-caracteristica
    ```
3. Realiza tus cambios y haz un commit:
    ```bash
    git commit -am 'Agrega nueva característica'
    ```
4. Haz push de tu rama:
    ```bash
    git push origin nueva-caracteristica
    ```
5. Crea un Pull Request.

## Instrucciones de Despliegue

El despliegue se realiza automáticamente a **GitHub Pages** después de pasar todas las pruebas. Para que GitHub Pages funcione correctamente, asegúrate de tener configurada la opción de **GitHub Pages** en el repositorio de GitHub, con la rama `gh-pages` como fuente.

---

## Créditos

Este proyecto fue creado como parte de una tarea de implementación de CI/CD utilizando GitHub Actions y Node.js.

