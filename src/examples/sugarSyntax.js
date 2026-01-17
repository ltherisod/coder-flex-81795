//SPREAD OPERATOR (...)

const numbers = [1,2,3]
const NewNumbers = numbers.concat([4,5,6,7,8,9,10]) //[1,2,3,4,5,6,7,8,9,10]


const SugarNumbers = [...numbers,4,5,6,7,8,9,10]



//DESTRUCTING

//ARRAYS

const colors = ['Amarillo', 'Violeta', 'Naranja']

const colorAmarillo = colors[0] //Amarillo

const ColorViotal = colors[1] //Violeta

const [amarillo, violeta, naranja]= colors


//OBJETOS
const alumno = {
    nombre:'Carlos',
    edad:25,
    ciudad:'Mendoza'
}

console.log( alumno.nombre)

const {nombre, edad}=alumno



//Condicionales

let mensaje;

if(edad >=18){
    mensaje='Sos mayor de edad'
}else{
    mensaje = 'Sos menor de edad'
}

//sugar
//Ternario

const sugarMensaje = edad >= 18 ? 'Sos mayor de edad' : 'Sos menor de edad'


//concatenar dato+ string

console.log('Hola'+nombre+' ¿como te va?') //HolaJuan ¿como te va?

console.log(`Hola ${nombre} ¿como te va?`)


//FUNCTIONS

function sumar (a,b){
    return a+b
}

const sumarArrow = (a,b)=> {
    //logica
    return a+b
}

const sumarParantesis = (a,b)=> (
    a+b
)


const sugarArrow = (a,b)=> a+b

