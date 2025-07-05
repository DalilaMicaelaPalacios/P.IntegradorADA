/* TRABAJO INTEGRADOR ADA: Sistema de Gestión de Biblioteca

Consignas:

Punto 1: Estructura de Datos
 a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe 
tener las siguientes propiedades:
 ✔ id (número)
 ✔ título (string),
 ✔autor (string),
 ✔año (número),
 ✔género (string),
 ✔disponible (booleano).

  b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
 ✔id (número)
 ✔nombre (string)
 ✔email (string)
 ✔librosPrestados (array de ids de 
libros).

 Punto 2: Funciones de Gestión de Libros
a) Implementar una función 
agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
 b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por 
título, autor o género utilizando el algoritmo de búsqueda lineal.
 c) Desarrollar una función 
ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego 
muestre los libros ordenados en la consola.
 d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por 
parámetro

Punto 3: Gestión de Usuarios
 a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
 b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el 
array completo de usuarios
 c) Crear una función buscarUsuario(email) que devuelva la información de un 
usuario dado su email.
 d) Implementar una función borrarUsuario(nombre, email) que elimine el 
usuario seleccionado.

Punto 4: Sistema de Préstamos
 a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de 
 libros prestados del usuario.
 b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros 
prestados del usuario

 Punto 5: Sistema de Préstamos
 a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para 
 generar un reporte con la siguiente información:
 ✔ Cantidad total de libros.
 ✔ Cantidad de libros prestados.
 ✔ Cantidad de libros por género.
 ✔ Libro más antiguo y más nuevo

 Punto 6: Identificación Avanzada de libros
 a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos 
que contengan números ni otros caracteres). La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
 En este punto además de colocar los métodos, tendrán que pensar muy bien la forma de filtrar para que solo sean letras. 
Piensen muy bien su lógica

Punto 7: Cálculos Estadísticos
 a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para 
calcular y mostrar:
 ✔Promedio de años de publicación de los libros.
 ✔Año de publicación más frecuente.
 ✔Diferencia en años entre el libro más antiguo y el más nuevo

Punto 8: Manejo de Cadenas
 a) Crear una función normalizarDatos() que utilice métodos de strings para:
 ✔Convertir todos los títulos a mayúsculas.
 ✔Eliminar espacios en blanco al inicio y final de los nombres de 
autores.
 ✔Formatear los emails de los usuarios a minúsculas

  Punto 9: Interfaz de Usuario por Consola
 a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
 El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica
 Pueden utilizar la estructura que gusten, sin embargo les recomiendo el uso de 
switch ya que hace al codigo mas limpio y claro a la hora de escribirlo.

Punto 10: Comentando mi código
 a) Se tomará como último punto a evaluar la 
correcta utilización de comentarios explicando paso por paso su código.
 b) Deberán seccionar el código punto por punto y con una explicación corta y simple de que 
hicieron en cada punto.
 Ejemplo: 
//Punto 1:
 // a). Consigna
 // código y comentarios de lo que crean 
necesario explicar
*/




//DESARROLLO DEL TRABAJO INTEGRADOR ADA: Sistema de Gestión de Biblioteca

// Punto 1: Estructura de Datos

// a) Crear un array de objetos llamado 'libros' que contenga al menos 10 libros.
// Cada libro debe tener las siguientes propiedades:    
// - id (número)
// - título (string)
// - autor (string)
// - año (número)
// - género (string)
// - disponible (booleano)

// Se crea un Array de libros de fantasía, entre otros géneros, que representa la colección de libros de una biblioteca.
// Cada libro tiene un ID único, título, autor, año de publicación, género y un estado de disponibilidad.
// Este array se utilizará para gestionar los libros en el sistema de biblioteca.

const libros = [
    { id: 1, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", anio: 1954, genero: "Fantasía épica", disponible: true },
    { id: 2, titulo: "El Hobbit", autor: "J.R.R. Tolkien", anio: 1937, genero: "Fantasía", disponible: true },
    { id: 3, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", anio: 1997, genero: "Fantasía", disponible: true },
    { id: 4, titulo: "Crónicas de Narnia", autor: "C.S. Lewis", anio: 1950, genero: "Fantasía", disponible: true },
    { id: 5, titulo: "El nombre del viento", autor: "Patrick Rothfuss", anio: 2007, genero: "Fantasía épica", disponible: true },
    { id: 6, titulo: "La historia interminable", autor: "Michael Ende", anio: 1979, genero: "Fantasía", disponible: true },
    { id: 7, titulo: "Juego de Tronos", autor: "George R.R. Martin", anio: 1996, genero: "Fantasía épica", disponible: true },
    { id: 8, titulo: "El ciclo de la Puerta de la Muerte", autor: "Margaret Weis y Tracy Hickman", anio: 1990, genero: "Fantasía épica", disponible: true },
    { id: 9, titulo: "La brújula dorada", autor: "Philip Pullman", anio: 1995, genero: "Fantasía", disponible: true },
    { id: 10, titulo: "El ciclo de Terramar", autor: "Ursula K. Le Guin", anio: 1968, genero: "Fantasía", disponible: true },
];

// b) Crear un array de objetos llamado 'usuarios' con al menos 5 usuarios.
// Cada usuario debe tener:
// - id (número)
// - nombre (string)
// - email (string)
// - librosPrestados (array de ids de libros).
// Se crea un Array de usuarios que representa a los miembros de la biblioteca.
// Cada usuario tiene un ID único, nombre, email y un array de libros prestados.

const usuarios = [
    { id: 1, nombre: "Juan Perez", email: "juan.perez@gmail.com", librosPrestados: [1, 2] },
    { id: 2, nombre: "María Gomez", email: "maria.gomez@gmail.com", librosPrestados: [3] },
    { id: 3, nombre: "Pedro Martinez", email: "pedro.martinez@gmail.com", librosPrestados: [] },
    { id: 4, nombre: "Ana Lopez", email: "ana.lopez@gmail.com", librosPrestados: [4, 5] },
    { id: 5, nombre: "Luis Fernandez", email: "luis.fernandez@gmail.com", librosPrestados: [6] },
];


// Punto 2: Funciones de Gestión de Libros

// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

// Esta función permite agregar un nuevo libro al array de libros.
function agregarLibro(id, titulo, autor, anio, genero){
    libros.push({id,titulo, autor, anio, genero, disponible: true});
    console.log(`Libro agregado exitosamente: ${titulo}`);// se muestra el nuevo libro agregado
}

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal. 

// Esta función permite buscar libros en el array de libros según un criterio específico (título, autor o género) y un valor de búsqueda. 
function buscarLibro(criterio, valor) {
    const criteriosValidos = ["titulo", "autor", "genero"];// te marca los criterios validos
    if (!criteriosValidos.includes(criterio)) {
        console.log("Criterio inválido. Use 'titulo', 'autor' o 'genero'.");
        return [];
    }
    if (!valor) {
        console.log("Debe ingresar un valor para buscar.");
        return [];
    }
    return libros.filter(libro => 
        libro[criterio] && 
        libro[criterio].toLowerCase().includes(valor.toLowerCase())
    );
}

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

// Esta función permite ordenar los libros en el array de libros según un criterio específico (título
// o año) utilizando el algoritmo de ordenamiento burbuja (bubble sort). Luego, muestra los libros ordenados en la consola.
function ordenarLibros(criterio) {
    const m = libros.length; // te da la totalidad de los libros
    for (let i = 0; i < m - 1; i++) { //se hace la comparación con otros libros
        for (let j = 0; j < m - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                // Intercambiar los libros si están en el orden incorrecto
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
            }
        }
    }
    console.log("libros ordenados por " + criterio + ":");
    libros.forEach(libro => { //se muestra listado ordenado de los libros
        console.log(`ID: ${libro.id}, Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}, Género: ${libro.genero}, Disponible: ${libro.disponible}`);
    });
}
// Punto 2: Funciones de Gestión de Libros (continuación)

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

// Esta función permite eliminar un libro del array de libros según su ID. Busca el libro por
// su ID y lo elimina del array si se encuentra.
function borrarLibro(id) {
    const libroIndex = libros.findIndex(libro => libro.id === id);// en el indice de libros se busca el indicado para borrarlo
    if (libroIndex !== -1) {
        libros.splice(libroIndex, 1);// se remueve el elemento indicado
        console.log(`Libro con ID ${id} eliminado exitosamente.`);// con exito
    } else {
        console.log(`Libro con ID ${id} no encontrado.`);// sin exito
    }
}

// Punto 3: Gestión de Usuarios

// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

// Esta función permite registrar un nuevo usuario en el sistema de biblioteca. Agrega un nuevo objeto de usuario al array de usuarios con un ID único, nombre y email.
function registrarUsuario(nombre, email) {
  const id= usuarios.length + 1; // se genera un nuevo id al usuario
    usuarios.push({ id, nombre, email, librosPrestados: [] });// se añade al usuario al array
    console.log(`Usuario registrado exitosamente: ${nombre}`);
    mostrarTodosLosUsuarios //se actualizan los usuarios
}   


// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.

// Esta función devuelve el array completo de usuarios, permitiendo ver todos los usuarios registrados en el sistema de biblioteca.
function mostrarTodosLosUsuarios() {
    console.log("Lista de usuarios:");
    usuarios.forEach(usuario => { //recorre los usuarios y muestra el detalle de la lista
        console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Email: ${usuario.email}`);
    });     
}
// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

// Esta función permite buscar un usuario en el array de usuarios por su email. Devuelve la
// información del usuario si se encuentra, o undefined si no se encuentra.
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
}

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

// Esta función permite eliminar un usuario del array de usuarios según su nombre y email. Busca el
// usuario por su nombre y email, y lo elimina del array si se encuentra.
function borrarUsuario(nombre, email) {
    const usuarioIndex = usuarios.findIndex(usuario => usuario.nombre.toLowerCase() === nombre.toLowerCase() && usuario.email.toLowerCase() === email.toLowerCase());
    if (usuarioIndex !== -1) { // encuentra al usuario
        usuarios.splice(usuarioIndex, 1); // se elimina del array al usuario
        console.log(`Usuario con nombre ${nombre} y email ${email} eliminado exitosamente.`);
    } else {
        console.log(`Usuario con nombre ${nombre} y email ${email} no encontrado.`);
    }
}
// Punto 4: Sistema de Préstamos

// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro); // se encuentra el librp prestado por id
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);//se encuentra el usuario al que se presto por id

    if (libro && usuario && libro.disponible) { //libro y usuario ok, y el libro esta disponible en biblioteca
        libro.disponible = false; // significa que el libro no esta en la biblioteca, osea no esta disponible
        usuario.librosPrestados.push(libro.id);//se añade el id del libro al listado que tiene el usuario de libros prestados
        console.log(`Libro con ID ${idLibro} prestado a usuario con ID ${idUsuario}.`);//
    } else {
        console.log("No se pudo prestar el libro. Verifique que el libro y el usuario existan y que el libro esté disponible.");
    }
function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro); // se halla al libro por el id
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);//se halla al usuario por el id
    if (libro && usuario && !libro.disponible) {//libro y usuario ok, y el libro no esta disponible en biblioteca
        libro.disponible = true; // se señala libro como disponible con true
        usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro); //e borra el id del libroen la lista de prestamos
        console.log(`Libro con ID ${idLibro} devuelto por usuario con ID ${idUsuario}.`);
        return true;
    }
    console.log(`Libro con ID ${idLibro} no encontrado o ya está disponible.`); // error 
    return false;
}

}

// Punto 5: Generación de Reportes
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// - Cantidad total de libros.
// - Cantidad de libros prestados.
// - Cantidad de libros por género.
// - Libro más antiguo y más nuevo.

// esta función genera un estado de los libros en general
function generarReporteLibros() {
    const totalLibros = libros.length; // te señala la totalidad de los libros que hay
    const librosPrestados = libros.filter(libro => !libro.disponible).length; // filtra los libros que estan prestados
    const cantidadPorGenero = libros.reduce((acc, libro) => { // muestra el total de libros segun el genero
        acc[libro.genero] = (acc[libro.genero] || 0) + 1;
        return acc;
    }, {});
    const libroMasAntiguo = libros.reduce((antiguo, libro) => (libro.anio < antiguo.anio ? libro : antiguo), libros[0]); // te muestra libros mas antiguos
    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.anio > nuevo.anio ? libro : nuevo), libros[0]);// te muestra libro mas nuevo

  console.log(`Cantidad total de libros: ${totalLibros}`);// se muestra cantidad de libros
    console.log(`Cantidad de libros prestados: ${librosPrestados}`);   //se muestra libros prestados
    console.log("Cantidad de libros por género:", cantidadPorGenero);// se muestra libros por genero
    console.log(`Libro más antiguo: ${libroMasAntiguo.titulo} (${libroMasAntiguo.anio})`); // se muestra libro mas antiguo
    console.log(`Libro más nuevo: ${libroMasNuevo.titulo} (${libroMasNuevo.anio})`);// se muestra libro mas nuevo
   
}
// Punto 6: Identificación Avanzada de Libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).

//esta función filtra los libros con mas de una palabra en el titulo
function librosConPalabrasEnTitulo() {
    const librosFiltrados = libros.filter(libro => {
        const palabras = libro.titulo.trim().split(/\s+/);
        return palabras.length > 1 && /^[a-zA-Z\s]+$/.test(libro.titulo);
    });
    const titulos = librosFiltrados.map(libro => libro.titulo); // libros filtrados por titulo
    console.log("Libros con más de una palabra en el título:", titulos);
    return titulos;
}
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// - Promedio de años de publicación de los libros.
// - Año de publicación más frecuente.
// - Diferencia en años entre el libro más antiguo y el más nuevo.
function calcularEstadisticas() {
    const anios = libros.map(libro => libro.anio); // años de publicación de los libros
    const promedio = anios.reduce((acc, anio) => acc + anio, 0) / anios.length; // promedia los años de las publicaciones de los libros
    const Frecuencia = anios.reduce((acc, anio) => {// nos da la frecuencia de cada publicación
        acc[anio] = (acc[anio] || 0) + 1;
        return acc;
    }, {});

    const anioMasFrecuente = Object.keys(Frecuencia).reduce((a, b) => Frecuencia[a] > Frecuencia[b] ? a : b);// año mas frecuente
    const libroMasAntiguo = Math.min(...anios);// año del libro mas antiguo
    const libroMasNuevo = Math.max(...anios);//año del libro mas nuevo
    const diferencia = libroMasNuevo - libroMasAntiguo;//diferencia entre el año del libro mas antiguo y el mas nuevo
    console.log(`Promedio de años de publicación: ${promedio.toFixed(2)}`);
    console.log(`Año de publicación más frecuente: ${anioMasFrecuente}`);
    console.log(`Diferencia entre el libro más antiguo y el más nuevo: ${diferencia}`);
}

// Punto 8: Manejo de Cadenas

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });
    console.log("Normalizando datos de libros...");// membrete
    console.log("Libros");// datos normalizados de libros
      console.log("Usuarios");// datos normalizados de usuarios
}

// Punto 9: Interfaz de Usuario por Consola

// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

// El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
const prompt = require('prompt-sync')();

function menuPrincipal() {
    while (true) { // bucle infinito, hasta la salida
        console.log("\n---Biblioteca Cuatiarenda ---");
        console.log("1. Agregar libro");
        console.log("2. Buscar libro");
        console.log("3. Ordenar libros");
        console.log("4. Borrar libro");
        console.log("5. Registrar usuario");
        console.log("6. Mostrar todos los usuarios");
        console.log("7. Buscar usuario");
        console.log("8. Borrar usuario");
        console.log("9. Prestar libro");
        console.log("10. Devolver libro");
        console.log("11. Generar reporte de libros");
        console.log("12. Libros con más de una palabra en el título");
        console.log("13. Calcular estadísticas");
        console.log("14. Normalizar datos");
        console.log("15. Salir");

        const opcion = parseInt(prompt("Seleccione una opción: ")); // pide que se seleccione una opcion del menu

        switch (opcion) { // se debe seleccionar una opcion que se visualiza en el menu correspondiente
            case 1:
                {
                    const id = parseInt(prompt("Ingrese ID del libro: "));// solicita id del libro
                    const titulo = prompt("Ingrese título del libro: ");// solicita titulo del libro
                    const autor = prompt("Ingrese autor del libro: ");// solicita autor del libro
                    const anio = parseInt(prompt("Ingrese año de publicación: "));// solicita año de publicación
                    const genero = prompt("Ingrese género del libro: ");// solicita género del libro
                    agregarLibro(id, titulo, autor, anio, genero);
                }
                break;
            case 2:
                {
                    const criterio = prompt("Ingrese criterio de búsqueda (titulo/autor/genero): ");//solicita busqueda por titulo, autor o genero
                    const valor = prompt(`Ingrese valor para buscar por ${criterio}: `);//solicita valor
                    const resultados = buscarLibro(criterio, valor);// se busca el libro 
                    console.log(resultados);// resultados por consola
                }
                break;
            case 3:
                {
                    const ordenarCriterio = prompt("Ingrese criterio para ordenar (titulo/año): ");// ordenamiento
                    ordenarLibros(ordenarCriterio);
                }
                break;
            case 4:
                {
                    const borrarId = parseInt(prompt("Ingrese ID del libro a borrar: "));// se pide id libro a borrar
                    borrarLibro(borrarId);
                }
                break;
            case 5:
                {
                    const nombreUsuario = prompt("Ingrese nombre del usuario: ");// se pide nombre del usuario para el registro
                    const emailUsuario = prompt("Ingrese email del usuario: ");// se pide email del usuario para el registro
                    registrarUsuario(nombreUsuario, emailUsuario);
                }
                break;
            case 6:
                mostrarTodosLosUsuarios();
                break;
            case 7:
                {
                    const emailBuscar = prompt("Ingrese email del usuario a buscar: ");// se pide email del usuario para la busqueda
                    console.log(buscarUsuario(emailBuscar));
                }
                break;
            case 8:
                {
                    const nombreBorrar = prompt("Ingrese nombre del usuario a borrar: ");// se pide nombre del usuario para borrarlo
                    const emailBorrar = prompt("Ingrese email del usuario a borrar: ");// se pide email del usuario para borrarlo
                    borrarUsuario(nombreBorrar, emailBorrar);
                }
                break;
            case 9:
                {
                    const idLibroPrestar = parseInt(prompt("Ingrese ID del libro a prestar: "));// se pide id del libro para prestarlo
                    const idUsuarioPrestar = parseInt(prompt("Ingrese ID del usuario: "));// se pide id del usuario para el prestamo
                    prestarLibro(idLibroPrestar, idUsuarioPrestar);
                }
                break;
            case 10:
                {
                    const idLibroDevolver = parseInt(prompt("Ingrese ID del libro a devolver: "));// se pide id libro que sera devuelto
                    const idUsuarioDevolver = parseInt(prompt("Ingrese ID del usuario: "));// se pide id del usuario que devolvera
                    devolverLibro(idLibroDevolver, idUsuarioDevolver);
                }
                break;
            case 11:
                generarReporteLibros(); // se genera el reporte del estado de los libros
                break;
            case 12:
                librosConPalabrasEnTitulo();// se filtra titulos con mas de una palabra
                break;
            case 13:
                calcularEstadisticas();// se realiza estadistica de los libros 
                break;
            case 14:
                normalizarDatos();
                console.log("Datos normalizados.");// normalizacion de datos
                break;
            case 15:
                console.log("Saliendo del sistema.");// se sale del sistema
                return;
            default:
                console.log("Opción no válida. Intente nuevamente.");// si la opcion ingresada no esta en el menu, salta invalidación
        }
    }
}

// Llamamos a la función para iniciar el menú principal
menuPrincipal(); // se llama a la función para lograr el funcionamiento del menu

