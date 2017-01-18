function validateNombr(evn){
    var nombre = document.getElementById("name").value;
    if(nombre.length==0){
        producePrompt("Escribe tu nombre","red");
        return false;
    }
}
function producePrompt(mensaje,ubicacion,color){
    document.getElementById(ubicacion).innerHTML=mensaje;
    document.getElementById(ubicacion).style.color= color;
    
}

//VALIDACION DE NOMBRE


function validateNombre(evento){
    
        var nombre = document.getElementById("name").value;
    
    
        var nombreArray = nombre.split("");
        var primeraLetra = nombreArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var separacion= false;
      
        for(var i=1; i<nombreArray.length; i++){
            if(separacion)
            {    
                mayuscula+= nombreArray[i].toUpperCase();
                
            }
            else
                mayuscula+=nombreArray[i];
            if(nombreArray[i] == " ")
                separacion= true;
            
        }
       document.getElementById("name").value = mayuscula;
   
}


function validateName(event){
    numeros= window.event.keyCode;
    if((numeros>=65 && numeros<=90)||numeros==8||numeros==32){
            
        } else{
            event.preventDefault();
        }
}

  
//VALIDACION DE APELLIDO

function validateApellido(event){
    
        var apellido = document.getElementById("lastname").value;
        
        var apellidoArray = apellido.split("");
        var primeraLetra = apellidoArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var separacion = false;
      
        for(var i=1;i<apellidoArray.length;i++){
            if(separacion)
            {    
                mayuscula+= apellidoArray[i].toUpperCase();
                separacion = false;
            }
            else
                mayuscula+=apellidoArray[i];
            if(apellidoArray[i] == " ")
                separacion = true;
            
        }
       document.getElementById("lastname").value = mayuscula; 
}

function validateLastname(event){
    numeros= window.event.keyCode;
    if((numeros>=65 && numeros<=90)||numeros==8||numeros==32){
            
        } else{
            event.preventDefault();
        }
}


//VALIDACION DE EMAIL.
    
function validateEmail(evento){
    
  var email = document.getElementById("email").value;
  var correo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   
 
    if(!correo.test(email)){
      alert ("Correo inválido. Ejemplo: name@enlace.ku");
     
    }else{
      return false;  
    }
}

//VALIDACION DE CONTRASEÑA
    
document.getElementById("input-password").setAttribute("minlength","6");

  function validatePass(evento){
      var pass=document.getElementById("input-password").value;
      
      if(pass==="123456"||pass==="098754"||pass==="password"){
          alert("Password ingresado no válido");
          return false;
      }
  }

//VALIDACIONN DE SELECTOR

function validateSelector(evento){
    var selector= document.querySelector("select").value;
    
    if(selector==0){
        alert("Tienes que seleccionar una opcion");
        
    }
}

function validateForm(){
    validateSelector();
}

