# ctd-esp-fe1-final
Examen Final de Frontend IV

## Indice
* [Requisitos](#requisitos)
  * [Condiciones minimas de aprobación](#condiciones-minimas-de-aprobación)
  * [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
* [Funcionalidades](#funcionalidades)
  * [Funcionalidades Obligatorias](#funcionalidades-obligatorias)
  * [Funcionalidades Adicionales o Extras](#funcionalidades-adicionales-o-extras)
* [Desarrollo](#desarrollo)
  * [Iniciando la App](#iniciando-la-app)
  * [Dependencias](#dependencias)
  * [Dependencias de Desarrollo](#dependencias-de-desarrollo)
  * [Componentes de UI](#componentes-de-ui)
* [Guía para comenzar](#guía-para-comenzar)
  * [Paso 0 - Instalación](#paso-0---instalación)
  * [Paso 1 - Configuración](#paso-1---configuración)
  * [Paso 2](#paso-2)
  * [Paso 3](#paso-3)
  * [Paso 4](#paso-4)
  * [Paso 5](#paso-5)

## Requisitos

Es indispensable realizar un Fork de este proyecto, para poder trabajar de forma *individual*. No se aceptarán proyectos que se hayan realizado sin partir de este template.

### Condiciones minimas de aprobación

* **Cumplir con todas las funcionalidades obligatorias**
* Solo se podrán utilizar las librerías que se detallan en este README. 
* No se considerará realizada cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas.
* Deberá ser desarrollada utilizando Typescript como lenguaje. Como mínimo, se espera que se utilice el tipado de props en los componentes de React.
* Toda la información de los elementos, deberá provenir de la API de [Rick anb Morty](https://rickandmortyapi.com/). No se admiten datos duros (hardcodeados) en el frontend. Para ello, se deberá implementar la lógica para manejar el pedido a dicha API.
* Debera ser desarrollada utilizando **Redux** junto con **Thunk** o **Saga**. Se otorga la posibilidad de elegir entre una de las dos. Como mínimo se espera el uso correcto de un reducer, mas el uso de una ThunkAction (Thunk) o funcion generadora (Saga)


### Aspectos que modifican la valoración final de la nota

Los siguientes aspectos, si bien no constituyen requisitos para aprobar el trabajo, serán tenidos en cuenta al momento de determinar la nota final de cada trabajo:

TypeScript
  * Será tenido en cuenta uso de Typescript más allá del tipado de las props de componentes, en especial para el caso de funciones que desarrollen lógica reutilizable, de las actions y de los reducers.
  * Se valorará la reutilización de de tipos comunes que se repiten a lo largo del proyecto, especialmente mediante la reutilización de interfaces.

Validaciones
  * Se valorará el agregado de validaciones de flujos alternativos al normal, el manejo de errores en las distintas funcionalidades implementadas.

Redux
  * Se valorará el uso correcto de Redux, para el almacenamiento del estado completo de la aplicación. 

Thunk o Sagas
  * se valorará el uso correcto de Thunk o Saga para la utilización de cada función asincronica dentro de cada funcionalidad. 

Funcionalidades adicionales o extras
  * se valorará el agregado de las funcionalides extras detalladas anterioremente.

Buenas Practicas
  * Se prestará especial atención al uso de buenas prácticas, reutilización de componentes y funcionalidades comunes, renderizado dinámico, entre otros.

## Funcionalidades

### Funcionalidades Obligatorias
 
Las siguientes funcionalidades son requisitos necesarios para la aprobación del final y deben funcionar correctamente. 
 
* La aplicación deberá contar con dos páginas
  * La página de inicio presentará un panel de filtros en la parte superior y un listado de personajes en la parte inferior.
  * La página de favoritos presentará un listado de los personajes que hayan sido marcado como favoritos

* La pagina de inicio
  * Panel de filtros
    * Contendrá un input en donde una persona usuaria puede ingresar cualquier texto en base al cual desee filtrar los personajes
    * Si el usuario borra el texto, se deberá mostrar el estado inicial, es decir la búsqueda sin filtro.
    * Se debera incluir un boton de "Limpiar filtros", el cual debera borrar el texto dentro del input y mostrar el estado inicial, es decir la búsqueda sin filtro.

  * Listado de personajes 
    * Debera mostrar los personajes, que estaran representados por tarjetas con información sobre cada uno de ellos
    * Como máximo se deben mostrar en pantalla 9 tarjetas por página de personajes.
    * Se deberá poder marcar y desmarcar cada personaje como favorito desde su tarjeta individual, teniendo que persister ese estado en la aplicación.
    * Se deberá poder diferenciar si un personaje se encuentra marcado como favorito o no. 
  
* La pagina de favoritos
  *  Todo personaje marcados como favoritos, deberán aparecer dentro del listado de favoritos en la segunda página de la aplicación.
  *  El usuario podrá desmarcar cada personaje, en cuyo caso deberán desaparecer de este listado.
  *  Un elemento que haya sido desmarcado de los favoritos, podrá ser marcado nuevamente desde la pantalla de inicio.
    

### Funcionalidades Adicionales o Extras 

Las siguientes funcionalidades no son requisito para la aprobación, pero si influyen en la nota final, siempre que se encuentren funcionando de forma correcta.

* La pagina de favoritos
  * Podrá contar con un boton "Eliminar Todos", que deberá desmarcar todos los personajes del listado de favoritos, y los mismos no deberán aparecer marcados en la pagina principal

* La vista de personajes 
   * Esta es una tercer pagina, no obligatoria, que va a requerir de la invocación de la API de [Episodios](https://rickandmortyapi.com/documentation/#get-multiple-episodes) de Rick and Morty
   * Al hacer clic en uno de los personajes, deberemos redigirnos a la tercer pagina, donde se mostrara el personaje seleccionado junto con un listado de tarjetas de cada episodio en el que aparece el personaje. 
   * Podemos indicar si el personaje esta marcado como favorito o no, y junto con la posibilidad de marcarlo o desmarcarlo



## Desarrollo

### Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run start`

### Dependencias

Se utilizara la version de React 17.0.2, junto con la version 5 de React Scripts

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
* [src/componentes/personajes/personaje-tarjeta.componente.js]()
* [src/componentes/episodios/episodio-tarjeta.componente.js]()
* [src/componentes/botones/boton.componente.js]()
* [src/componentes/botones/boton-favorito.componente.js]()
* [src/componentes/paginacion/paginacion.componente.js]()

## Guía para comenzar

Ahora que ya vimos cuales son los requerimientos y funcionalidades que deberás llevar a cabo en este proyecto, haremos un recorrido por los principales pasos a seguir para poder completar el desarrollo de tu aplicación.

### Paso 0 - Instalación

Instalar Typescript

`npm install typescript`

Instalar Tipos de React

`npm install @types/react @types/react-dom`

Instalar Redux

`npm install react-redux @types/react-redux`

Y finalmente instalar Thunk

`npm install redux-thunk`

o Saga (Si lo preferis en vez de Thunk)

`npm install redux-saga`

### Paso 1 - Configuración

```
import { createStore } from 'redux';

```

### Paso 2

### Paso 3

### Paso 4

### Paso 5
