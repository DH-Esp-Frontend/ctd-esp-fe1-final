# ctd-esp-fe1-final
Examen Final de Frontend IV

## Indice
* [Requisitos](#requisitos)
  * [Condiciones mínimas de aprobación](#condiciones-mínimas-de-aprobación)
  * [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
* [Funcionalidades](#funcionalidades)
  * [Funcionalidades obligatorias](#funcionalidades-obligatorias)
  * [Funcionalidades extras](#funcionalidades-extras)
  * [Resultado final](#resultado-final)
* [Desarrollo](#desarrollo)
  * [Iniciando la App](#iniciando-la-app)
  * [Dependencias](#dependencias)
  * [Dependencias de Desarrollo](#dependencias-de-desarrollo)
  * [Componentes de UI](#componentes-de-ui)
* [Entrega](#entrega)
  * [Fecha de Entrega](#fecha-de-entrega)
  * [Formato de Entrega](#formato-de-entrega)
* [Guía para comenzar](#guía-para-comenzar)
  * [Paso 0 - Instalación](#paso-0---instalación)
  * [Paso 1 - Configuración de Redux](#paso-1---configuración-de-redux)
  * [Paso 2 - Configuración de Thunk](#paso-2---configuración-de-thunk)
  * [Paso 3 - Configuración de Saga](#paso-3---configuración-de-saga)
  * [Paso 4 - Tipado de los componentes existentes](#paso-4---tipado-de-los-componentes-existentes)
  * [Paso 5 - Modelado](#paso-5---modelado)
  * [Paso 6 - Creación del estado y el/los reducer](#paso-6---creación-del-estado-y-ellos-reducer) 
  * [Paso 7 - Armado de la UI](#paso-7---armado-de-la-ui)
  * [Paso 8 - Integración](#paso-8---integración) 


## Requisitos

Es indispensable clonar este proyecto en un repositorio privado, para poder trabajar de forma *individual*. No se aceptarán proyectos que se hayan realizado sin partir de este template. Para eso deberás crear un repositorio con el nombre "ctd-esp-fe1-final" en tu cuenta de Github y luego seguir los siguientes pasos en tu terminal

```
# clona el repositorio del final en tu computadora
git clone https://github.com/DH-Esp-Frontend/ctd-esp-fe1-final 

# ingresa al directorio del final
cd ctd-esp-fe1-final

# elimina los links al repositorio de DH
git remove rm origin

# Agrega el link al repositorio de tu cuenta de github, reemplaza <tuusuario> por tu cuenta
git remote add origin https://github.com/<tuusuario>/ctd-esp-fe1-final

# Sube el template inicial a tu repositorio de github
git push -u origin main
```
No olvides agregar los permisos a las cuentas mencionadas en el [Formato de Entrega](#formato-de-entrega) antes de la [Fecha de Entrega](#fecha-de-entrega)!

### Condiciones mínimas de aprobación

Las siguientes condiciones son requisitos mínimos necesarios para la aprobación del final:

    * **Cumplir con todas las funcionalidades obligatorias**
    * Solo se podrán utilizar las librerías que se detallan en este README.
    * No se considerará realizada cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas.
    * Deberá ser desarrollada utilizando Typescript como lenguaje. Como mínimo, se espera que se utilice el tipado de props en los componentes de React.
    * Toda la información de los elementos, deberá provenir de la API de [Rick and Morty](https://rickandmortyapi.com/). No se admiten datos duros (hardcodeados) en el frontend. Para ello, se deberá implementar la lógica para manejar el pedido a dicha API.
    * Deberá ser desarrollada utilizando **Redux** junto con **Thunk** o **Saga**. Se otorga la posibilidad de elegir entre una de las dos. Como mínimo se espera el uso correcto de un reducer, más el uso de una ThunkAction (Thunk) o función generadora (Saga)
    * Se deberá documentar correctamente al menos 7 funciones (Puede o no ser componentes de React)

### Aspectos que modifican la valoración final de la nota

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su implementación sea correcta:

    TypeScript
      * Será tenido en cuenta uso de Typescript más allá del tipado de las props de componentes, en especial para el caso de funciones que desarrollen lógica reutilizable, de las actions y de los reducers.
      * Se valorará la reutilización de tipos comunes que se repiten a lo largo del proyecto, especialmente mediante la reutilización de interfaces.

    Documentación
      * Se valorará el correcto uso de la documentación en todas las funciones y componentes.

    Validaciones
      * Se valorará el agregado de validaciones de flujos alternativos al normal y el manejo de errores en las distintas funcionalidades implementadas.

    Redux
      * Se valorará el uso correcto de Redux para el almacenamiento del estado completo de la aplicación.

    Thunk o Saga
      * Se valorará el uso correcto de Thunk o Saga para la utilización de cada función asincrónica dentro de cada funcionalidad.

    Buenas Prácticas
      * Se prestará especial atención al uso de buenas prácticas, reutilización de componentes y funcionalidades comunes, y renderizado dinámico.

## Funcionalidades

### Funcionalidades obligatorias

Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del final y es fundamental que funcionen correctamente.
 
* La aplicación deberá contar con dos páginas:

  1 - La página de inicio que debe contar con:

          * Panel de filtros:
            * Contendrá un input en donde el usuario pueda ingresar cualquier texto que desee para hacer un filtro sobre los personajes.
            * Si el usuario borra el texto ingresado, se deberá mostrar el estado inicial, es decir la búsqueda sin filtro.
            * Se deberá incluir un boton de "Limpiar filtros", el cual deberá borrar el texto dentro del input y mostrar el estado inicial, es decir la búsqueda sin filtro.

          * Listado de personajes
            * Deberá mostrar los personajes, que estarán representados por tarjetas con información sobre cada uno de ellos.
            * Como máximo se deben mostrar en pantalla 20 tarjetas de personajes por página.
            * Se deberá poder marcar y desmarcar a cada personaje como favorito desde su tarjeta individual, teniendo que persistir ese estado en la aplicación.
            * Se deberá poder diferenciar si un personaje se encuentra marcado como favorito o no.

  2 - La página de favoritos que deberá cumplir con los siguientes requisitos:

            *  Todos los personaje marcados como favoritos, deberán aparecer dentro del listado de favoritos en la segunda página de la aplicación.
            *  Si el usuario desmarca un personaje como favorito el mismo deberá desaparecer del listado de favoritos.
            *  Un personaje que haya sido desmarcado de los favoritos, podrá ser marcado nuevamente desde la pantalla de inicio y deberá aparecer en el listado otra vez.
    

### Funcionalidades extras

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su funcionamiento sea correcto:

    * La página de favoritos:
      * Podrá contar con un botón de "Eliminar todos", que deberá desmarcar todos los personajes del listado de favoritos y los mismos no deberán aparecer marcados como favoritos en la página principal.

    * Realización de una tercer página de vista de cada personaje:
    Al hacer click sobre un personaje deberá redirigirnos a está página.
        * Va a requerir de la invocación de la API de [Episodios](https://rickandmortyapi.com/documentation/#get-multiple-episodes) de Rick and Morty.
        * Dentro de la vista de cada personaje:
           * Se mostrará un listado de los episodios en los cuales aparece.
           * También podríamos indicar si el personaje está marcado como favorito o no, y junto con la posibilidad de marcarlo o desmarcarlo.

### Resultado final

    Te dejamos un video como ejemplo de cómo debería funcionar tu aplicación, en la carpeta public
    
## Desarrollo

### Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run start`

### Dependencias

Se utilizara la version de React 17.0.2, junto con la version 5 de React Scripts. React-Router ya se encuentra instalado y configurado para la navegación.

Solo se podrán instalar las siguientes dependencias:
* Redux (incluida @reduxjs/toolkit)
* Typescript
* Thunk
* Saga (Si no queremos usar Thunk)

**NOTA: El uso de React Query y de la API de Context (React) no esta permitido**

### Dependencias de Desarrollo

Se podrán hacer uso de las siguientes dependencias adicionales para desarrollo (devDependencies), pero las mismas *no* modificaran la nota en forma positiva, ni son requisitos para la aprobación. Solo se brinda la posibilidad de usarlas, para aquel que sabe lo que esta haciendo y se siente cómodo con ellas.

* Redux Devtools Extension
  * Esta herramienta fue utilizada en clase, para visualizar el estado de Redux. Puede ser útil para debuggear y solucionar algunos problemas de nuestro código. 
  
* Prop-Types
  * Esta herramienta fue utilizada en clase, para validar el tipo de las propiedades en tiempo de ejecución. Puede ser para evitar algunos problemas de nuestro código.
  
* ESLint
  * Esta herramienta NO fue utilizada en clase, y se verá en Frontend V. Pero si se encuentran cómodos utilizandola, se encuentra permitida la configuración de eslint. 
  
* Jest y Testing Library
  * El uso de Testing esta permitido para verificar las funcionalidades. Testing es un tema de Frontend V, pero se abre la posibilidad de entregar el código final con casos de prueba. 

### Componentes de UI

El proyecto cuenta con componentes desarrollados en JavaScript, que **solo** deberán ser convertidos y tipados a TypeScript si son importados y utilizados.
La finalidad de los mismos es facilitar el desarrollo, otorgando componentes que se encuentran correctamente estileados.

Lista de componentes:
* [src/componentes/layout/encabezado.componente.jsx](src/componentes/layout/encabezado.componente.jsx) - Encabezado requerido para cada una de las páginas. Facilita la navegación
* [src/componentes/personajes/filtros.componente.tsx](src/componentes/personajes/filtros.componente.tsx) - Componente con el input text para realizar el filtrado
* [src/componentes/personajes/grilla-personajes.componente.jsx](src/componentes/personajes/grilla-personajes.componente.jsx) - Grilla de personajes para la pagina de inicio
* [src/componentes/personajes/tarjeta-personaje.componente.tsx](src/componentes/personajes/tarjeta-personaje.componente.tsx) - Tarjeta para cada personaje dentro de la grilla de personajes.
* [src/componentes/botones/boton-favorito.componente.jsx](src/componentes/botones/boton-favorito.componente.jsx) - Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
* [src/componentes/episodios/tarjeta-episodio.componente.tsx](src/componentes/episodios/tarjeta-episodio.componente.tsx) - Tarjeta para cada episodio dentro de la vista de personaje.

## Entrega

### Fecha de Entrega

Solo se admitirán entregas recibidas hasta el cierre de la clase 24, clase de Evaluación Final. 

### Formato de Entrega

Se aceptará la entrega mediante la submisión de la URL de un repositorio de Github Privado, que haya compatido acceso a las siguientes cuentas: 
* Camada 1 - Profesor: Humberto Rivero - Cuenta de Github [@danieldamian09](https://github.com/danieldamian09)
* Camada 2 - Profesor: Joan Gil - Cuenta de Github [@joandvgv](https://github.com/joandvgv)

El link al Google Form para la submisión será enviado por el profesor a cargo de la comisión.

## Guía para comenzar

Ahora que ya vimos cuáles son los requerimientos y funcionalidades que deberás llevar a cabo en este proyecto, haremos un recorrido por los principales pasos a seguir para poder completar el desarrollo de tu aplicación.

### Paso 0 - Instalación

Instalar Typescript

`npm install typescript@4.6.3`

Instalar Tipos de React

`npm install --dev @types/node@16.11.26 @types/react@17.0.43 @types/react-dom@17.0.14`

Instalar Redux

`npm install react-redux@7.2.6 @types/react-redux@7.1.23 @reduxjs/toolkit`

Y finalmente instalar Thunk

`npm install redux-thunk@2.4.1`

o Saga (Si lo preferis en vez de Thunk)

`npm install redux-saga@1.1.3`

### Paso 1 - Configuración de Redux 

Configuracion de la Store

``` store.ts
import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";



const rootReducer = combineReducers({
   
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools() // Aqui aplicaremos los middlewares
)

```

Luego en el App.jsx deberás configurar el Provider
```
  import {Provider} from "react-redux";

  <Provider store={store}>
    ... 
  </Provider>
```

### Paso 2 - Configuración de Thunk

Si vas a usar Saga, este paso lo podes saltear

``` store.ts
// Importamos el thunk de redux-thunk
import thunk from 'redux-thunk'

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) // 
)

```


### Paso 3 - Configuración de Saga

Este paso es opcional, solo lo necesitamos si vamos a utilizar Saga y no Thunk.

``` store.ts
// Importamos el thunk de redux-thunk
import createSagaMiddleware from "redux-saga";

... 

const sagaMiddleware = createSagaMiddleware()

...

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Levanta los observadores, es decir corre los Saga
// sagaMiddleware.run(tusSaga)  Una vez que crees tu archivo con los Sagas, deberas ejecutarlos acá

```

### Paso 4 - Tipado de los componentes existentes

### Paso 5 - Modelado

Con Redux, TypeScript y Thunk (o Saga!) ya configurados, podes proceder al armado de las interfaces del modelo. Es decir, crear las interfaces de los objetos que vas a usar en el proyecto. 
Para esto, te recomendamos que visualizas el diseño final, e identifiques los campos, variables y tipos que vas a necesitar en tus objetos para tiparlos correctamente. 
No hace falta que sean perfectos en esta etapa, los podrás ajustar después, pero van a ser de gran ayuda para arrancar a trabajar! 

### Paso 6 - Creación del estado y el/los reducer

Es importante poder abstraernos un poco de la creación de la UI, y del HTML, para pensar en que funcionalidades queremos construir. 
En esta etapa podemos identificar los eventos que muestra aplicación debe gestionar y que valores deben ser almacenados en el estado. 
Por ejemplo, vamos a necesitar almacenar los personajes que nos retorne la API, junto con el estado de la petición. 

Nota: No olvides agregar tu o tus reducers a la store dentro del combineReducers!

### Paso 7 - Armado de la UI 
Con el modelo ya creado, y nuestro reducer listo para ser utilizado, podemos proceder al armado de la UI básica. 
Cómo te mencionamos anteriormente, el proyecto cuenta con algunos componentes que te recomendamos utilizar, pero recordar que debes tiparlos con TypeScript.
Ya estarías en condiciones de armar la página principal, colocando el buscador, y armar una grilla que utilize las Tarjetas del personaje y el componente de paginacion. 

Para probar esta pantalla, podes llamar a la API, directamente desde tu componente, mediante useEffect y utilizando useState, pero no olvides que deberás utilizar al menos una vez una llamada asíncronica por medio de Thunk o Saga como condición mínima para aprobar. 
Te recomendamos dejar un //TODO para no olvidar modificar está función. 

Con la grilla funcionando adecuadamente, podes proceder al armado del listado de favoritos. Para ello, te recomendamos utilizar la misma API, para probar el renderizado de la UI. 
Una vez que muestres personajes en el listado de favoritos, ya podes colocar un //TODO para acordarte de integrar esto con el estado de Redux correspondiente. 

### Paso 8 - Integración 
Ahora sí, podemos ir componente a componente integrando con Redux por medio de los hooks de useSelector y dispatch, para interactuar con el estado 

*Tip: Recordá que podes visualizar que está sucediendo en el estado a través de la extensión del Chrome ReduxDevTools y si es necesario debuggear para encontrar los posibles errores.*

Mucha suerte y éxitos! 

