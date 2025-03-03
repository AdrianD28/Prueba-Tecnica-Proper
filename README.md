# Prueba Técnica Proper

## Descripción

Este proyecto es una prueba técnica diseñada para demostrar habilidades avanzadas en desarrollo de software. Incluye la implementación de diversas funcionalidades y el uso de buenas prácticas de programación, asegurando un código limpio, eficiente y mantenible.

## Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/AdrianD28/Prueba-Tecnica-Proper.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd Prueba-Tecnica-Proper
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para iniciar la aplicación, ejecuta:
```sh
npm run start
```

## Tareas Resueltas

1. **Agregar un registro nuevo en la tabla.**
    - Que pertenezca a la familia de Gato.
    - Que pertenezca a la familia de Fido.
2. **Existe un registro que no coincide con la interpretación esperada, indique cual y por qué.**
    - El registro incorrecto es el que tiene `Id: 6` porque no coincide con la estructura esperada.
3. **En pseudocódigo o en el lenguaje de su preferencia. Proponga una función, de preferencia recursiva, que permita entregar un listado en consola como se muestra en la Interpretación esperada.**
    - Se implementó la función `printTree` en JavaScript para imprimir la estructura en forma de árbol.
    - La función toma en cuenta que la tabla puede crecer en n cantidad de registros y n cantidad de niveles anidados.

### BONO

4. **Si tiene alguna idea en la que se puede trabajar de forma diferente la estructura o lógica de la tabla, explíquela.**
    - Una posible mejora sería utilizar una base de datos relacional para manejar las relaciones entre los registros de manera más eficiente y escalable.
