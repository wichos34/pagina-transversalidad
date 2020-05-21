//var nombre = document.getElementById("nombre");
//var pasword = document.getElementById("password");
//var error = document.getElementById("error");
//error.style.color = "red";
//function enviarFormulario(){
  //  console.log("Enviando formulario...");
    
    //var mensajesError = [];
    //if(nombre.value === null || nombre.value === ''){
      //     mensajesError.push('Ingresa tu nombre');

    //}
    //if(password.value === null || password.value === ''){
      //  mensajesError.push('Ingresa tu password');
        
 //}
   //  error.innerHTML = mensajesError.join(',');
    //return false;
//}
var form = document.getElementById('formulario');
form.addEventListener('submit', function(evt){
    evt.preventDefault();

    error.style.color = "red";
    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
           mensajesError.push('Ingresa tu nombre');

    }
    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa tu password');
        
 }
     error.innerHTML = mensajesError.join(',');
    return false;

});