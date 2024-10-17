//FUNCIONES
/* 
function hello(){
    console.log('Hola Js');
    console.log('Hola html');
    console.log('Hola css');
}

hello();
hello();
hello();
hello();
hello();
*/

//retorno de una función

/*
function hello(){

    return "hola js";

}

const result = hello();
console.log(result);
*/
//hello();

//retorna objeto vacio
/*
function hello(){
    return {};
}

console.lg(hello());
*/

//retorna valor del objeto
/*
funtion hello(){
    return{
        nombre: 'Mauricio'
    }
}
console.log(hello());
*/

//funcion que retorna a otra funcion
/*
function hello(){
    return function (){
        return "Hola JS"
    
    }
}

console.log(hello()());
*/

//=== USO DE PARAMETROS EN FUNCIONES ===
/*
function hellpconJS(name){
    return 'Hola' + name
}

console.log(hellpconJS('Mauricio'));
*/

//Pasar más de un parámetro a la función
/*
function hellpconJS(x,y){
    return x + y;

}

console.log(hellpconJS(10,20));
console.log(hellpconJS(10,80));
*/

//control de errores en parametros
/*
function hellpconJS(x,y=0){
  return x * y;
}

console.log(hellpconJS(10));
*/

//=== OBJETOS ===

const user = {
    nombre : 'Mauricio',
    apellidoM : 'Novaro',
    edad : 17,
    edoCivil:'Soltero',
    domicilio : {
        ciudad : 'CDMX',
        calle : 'Calle 9',
        numero : 003

    },
    amigos:['Fernando', 'Andre', 'Michelle'],
    activo:false,
    sendMensaje: function(){
        return 'enviando mensaje'
    }
}


alert(user.domicilio.ciudad + ', ' + user.domicilio.calle + ', ' + user.domicilio.numero);
console.log(user.amigos);
alert(user.activo);
console.log(user.nombre + ', ' + user.apellidoM + ', ' + user.edad);
alert(user.sendMensaje());