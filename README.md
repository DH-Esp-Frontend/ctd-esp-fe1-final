# ctd-esp-fe1-final
Examen Final de Frontend IV

## Indice
* [Requisitos](#requisitos)
  * [Condiciones minimas de aprobación](#condiciones-minimas-de-aprobación)
  * [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
* [Funcionalidades](#funcionalidades)
  * [Funcionalidades Obligatorias](#funcionalidades-obligatorias)
  * [Funcionalidades Adicionales o Extras](#funcionalidades-adicionales-o-extras)
  * [Resultado Final](#resultado-final)
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
  * [Paso 4](#paso-4)
  * [Paso 5 - Modelado](#paso-5---modelado)
  * [Paso 6 - Creación del estado y el/los reducer](#paso-6---creación-del-estado-y-ellos-reducer) 
  * [Paso 7 - Armado de la UI](#paso-7---armado-de-la-ui)
  * [Paso 8 - Integración](#paso-8---integración) 


## Requisitos

Es indispensable realizar un Fork de este proyecto, para poder trabajar de forma *individual*. No se aceptarán proyectos que se hayan realizado sin partir de este template.

### Condiciones minimas de aprobación

* **Cumplir con todas las funcionalidades obligatorias**
* Solo se podrán utilizar las librerías que se detallan en este README. 
* No se considerará realizada cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas.
* Deberá ser desarrollada utilizando Typescript como lenguaje. Como mínimo, se espera que se utilice el tipado de props en los componentes de React.
* Toda la información de los elementos, deberá provenir de la API de [Rick and Morty](https://rickandmortyapi.com/). No se admiten datos duros (hardcodeados) en el frontend. Para ello, se deberá implementar la lógica para manejar el pedido a dicha API.
* Debera ser desarrollada utilizando **Redux** junto con **Thunk** o **Saga**. Se otorga la posibilidad de elegir entre una de las dos. Como mínimo se espera el uso correcto de un reducer, mas el uso de una ThunkAction (Thunk) o funcion generadora (Saga)
* Se deberá documentar correctamente al menos 7 funciones (Puede o no ser componentes de React)

### Aspectos que modifican la valoración final de la nota

Los siguientes aspectos, si bien no constituyen requisitos para aprobar el trabajo, serán tenidos en cuenta al momento de determinar la nota final de cada trabajo:

TypeScript
  * Será tenido en cuenta uso de Typescript más allá del tipado de las props de componentes, en especial para el caso de funciones que desarrollen lógica reutilizable, de las actions y de los reducers.
  * Se valorará la reutilización de de tipos comunes que se repiten a lo largo del proyecto, especialmente mediante la reutilización de interfaces.

Documentación
  * Se valorará el correcto uso de la documentación en todas las funciones y componentes.

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

### Resultado Final

Te dejamos un Gif para que veas como deberia funcionar tu aplicación.

#### Resultado Final - Funcionalidades Obligatorias

#### Resultado Final - Funcionalidades Extras

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

## Entrega

### Fecha de Entrega

Solo se admitirán entregas recibidas hasta el cierre de la clase 24, clase de Evaluación Final. 

### Formato de Entrega

Se aceptará la entrega mediante la submisión de la URL de un repositorio de Github Privado, que haya compatido acceso a las siguientes cuentas: 
* Camada 1 - Profesor: Tomás de Priede - Cuenta de Github [@tomiito](https://github.com/tomiito)
* Camada 2 - Profesor: Matías Rivas - Cuenta de Github [@TODO](https://github.com/)

El link al Google Form para la submisión sera enviado por el profesor a cargo de la comisión.

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

### Paso 1 - Configuración de Redux 

```
import { createStore } from 'redux';

```

### Paso 2 - Configuración de Thunk

Si vas a usar Saga, este paso lo podes saltear

### Paso 3 - Configuración de Saga

Este paso es opcional, solo lo necesitamos si vamos a utilizar Saga y no Thunk.

### Paso 4 -

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

