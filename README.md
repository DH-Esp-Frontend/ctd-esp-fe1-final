# ctd-esp-fe1-final
Examen Final de Frontend IV

## Indice
* [Requisitos](#requisitos)
  * [Condiciones minimas de aprobación](#condiciones-minimas-de-aprobación)
  * [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
* [Funcionalidades](#funcionalidades)
  * [Funcionalidades Obligatorias](#funcionalidades-obligatorias)
  * [Funcionalidades Adionales o Extras](#funcionalidades-adionales-o-extras)
* [Desarrollo](#desarrollo)
  * [Iniciando la App](#iniciando-la-app)
  * [Dependencias](#dependencias)
  * [Dependencias de Desarrollo](#dependencias-de-desarrollo)

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
 
La aplicación deberá contar con dos páginas. En la página principal, se presentará un panel de filtros en la parte superior y un listado de elementos en la parte inferior.
Los elementos que se mostrarán en la parte inferior, estarán representados por tarjetas que contendrán determinada información sobre cada uno de ellos. Como máximo, se mostrarán en pantalla 9 elementos.


El panel de filtros contendrá un input en donde una persona usuaria puede ingresar cualquier texto en base al cual desee filtrar los resultados. Además, existirá un input de tipo “select”, que permitirá a la persona elegir entre distintos criterios de búsqueda.

A partir de que la persona escribe 3 caracteres, los resultados que se muestran en pantalla deberán responder a los filtros aplicados por el usuario (ambos filtros en forma combinada). Si el usuario borra el texto, deberá mostrar el listado inicial.

Se deberá incluir un botón de “Limpiar filtros”, el cual deberá borrar el texto dentro del input y mostrar los elementos iniciales.

Se deberá poder marcar y desmarcar cada elemento como favorito desde la pantalla inicial, debiendo persistir ese estado en la aplicación. Se debe poder diferenciar si un elemento se encuentra marcado como favorito o no.

Los elementos marcados como favoritos, deberán aparecer dentro del listado de favoritos que se encuentran en la segunda página de la aplicación. Desde allí, el usuario podrá desmarcarlos en cuyo caso deberán desaparecer de dicho listado. Además, un elemento que haya sido desmarcado desde la página de favoritos, debe poder ser marcado nuevamente como favorito desde la pantalla principal.

### Funcionalidades Adionales o Extras 

Las siguientes funcionalidades no son requisito para la aprobación, pero si influyen en la nota final, siempre que encuentren funcionando de forma correcta.





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
