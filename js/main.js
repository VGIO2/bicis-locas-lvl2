function validar()
{
  validateNombre();
  validateApellido();
  validateEmail();
  validatePass();
  validateSelector();

}

function removeMessage(_inputID)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling != null)
	   elemento.parentNode.removeChild(elemento.nextSibling);
	
}

function createMessage(_inputID, _message)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling == null)
	{
		//El span no existe
		var span = document.createElement('span');
		span.innerHTML = _message;
		elemento.parentNode.appendChild(span);
	}else{
		//El span ya existe
		if(elemento.nextSibling.tagName == 'SPAN')
		{
			elemento.nextSibling.innerHTML = _message;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);

			var span = document.createElement('span');
			span.innerHTML = _message;
			elemento.parentNode.appendChild(span);
            
		}
	}
}

function validateNombre(event){
    var nombre=document.getElementById("name").value;
    var text="Ingrese su nombre";
    if(nombre==""){
        createMessage("name", text);
    }
    else{
        removeMessage("name");
    }
}
  
//VALIDACION DE APELLIDO

function validateApellido(event){
    var apellido=document.getElementById("lastname").value;
    var text="Ingrese su apellido";
    if(apellido==""){
        createMessage("lastname", text);
    }
    else{
        removeMessage("lastname");
    }
}
//VALIDACION DE EMAIL.
    
function validateEmail(event){
    
  var email = document.getElementById("email");
  var text ="Correo inválido. Ejemplo: name@enlace.xy";
    
    if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email.value)){
          removeMessage("email");
        
    }else{
        
        if(email.value.length>=0){
           
           createMessage("email",text);
        }
    }
}

//VALIDACION DE CONTRASEÑA

function validatePass(event){
    
      var pass=document.getElementById("input-password");
      var text= "Ingrese su contraseña";
      
      if(pass.value==="123456"||pass.value==="098754"||pass.value.length<=6){
         createMessage("input-password",text);
      }else{
          removeMessage("input-password");
      }
  }

//VALIDACION DE SELECTOR

function validateSelector(event){
    var selector= document.getElementById("select").value;
    var text="Escoger al menos un tipo de bicicleta";
    
    if(selector==0){;
        createMessage("select",text);
    }else{
        removeMessage("select");
    }
}


