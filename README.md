# Proyecto Personal - Aplicación Web con Angular, Firebase y Manejo de Usuarios

Este es un proyecto personal desarrollado con **Angular** como frontend y **Firebase** como base de datos en la nube. La aplicación es completamente **responsive**, automatizada y sigue buenas prácticas de desarrollo mediante el uso de **routeos**, **servicios (services)**, **características específicas (features)**, y **una interfaz de usuario moderna (UI)**.

## Características

- **Base de datos en la nube con Firebase**: Utilización de Firebase para gestionar y almacenar los datos de forma segura y eficiente.
- **Frontend con Angular**: La aplicación está desarrollada en Angular, lo que asegura un desarrollo modular y escalable.
- **Diseño Responsive**: El diseño se adapta a cualquier dispositivo, ofreciendo una experiencia de usuario optimizada tanto en dispositivos móviles como en escritorio.
- **Routeos dinámicos**: Navegación fluida entre las diferentes vistas de la aplicación, con routeos implementados para garantizar una estructura ordenada.
- **Servicios (Services)**: Lógica del negocio gestionada a través de servicios reutilizables, lo que mejora la mantenibilidad del código.
- **Características específicas (Features)**: Implementación de módulos y componentes separados para diferentes funcionalidades, manteniendo el código modular.
- **Interfaz de Usuario (UI)**: Diseño moderno y atractivo, centrado en la experiencia del usuario.

## Tecnologías utilizadas

- **Angular**: Framework para el desarrollo del frontend.
- **Firebase**: Base de datos en la nube para almacenar y gestionar datos.
- **HTML5 y CSS3**: Estructura y estilo de la aplicación.
- **TypeScript**: Lenguaje principal utilizado en Angular.
- **Bootstrap**: Utilizado para la creación de una interfaz responsive.

## Instalación y uso

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/TobiasMoreno/tasks-auth-angular.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd tasks-auth-angular
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia la aplicación:
    ```bash
    ng serve
    ```

5. Abre la aplicación en tu navegador en `http://localhost:4200/`.

## Estructura del proyecto

```plaintext
public/
├──  assets/                # Recursos estáticos
|
src/
│
├── app/
│   ├── auth/  
│       ├── data-access/    
│       ├── features/  
│       ├── ui/        
│   ├── core/          
│   ├── shared/   
│   ├── tasks/                
│   ├── app.component.ts
│   
├── environments/
└── styles.css             # Estilos globales
