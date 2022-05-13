
var usuarios = ['test@gmail.com'];

$(function() {

  $("form[name='registration']").validate({

    rules: {

      firstname: "required",

      lastname: "required",

      email: {

        required: true,

        email: true

      },

      password: {

        required: true,

        minlength: 5

      }

    },

    messages: {

      firstname: "Por favor, introduzca su nombre",

      lastname: "Por favor, introduzca su apellido",

      password: {

        required: "Por favor proporcione una contraseña",

        minlength: "Su contraseña debe tener al menos 5 caracteres."

      },

      email: "Por favor, introduce una dirección de correo electrónico válida"

    },

    submitHandler: function(form) {

      form.submit();

    }

  });

  $("form[name='logearse']").validate({

    rules: {

      email: {

        required: true,

        email: true

      },

      password: {

        required: true,

        minlength: 5

      }

    },

    messages: {

      password: {

        required: "Por favor proporcione una contraseña",

        minlength: "Su contraseña debe tener al menos 5 caracteres."

      },

      email: "Por favor, introduce una dirección de correo electrónico válida"

    },

    submitHandler: function(form) {
      console.log($("#email").val());
      
        form.submit();
      }
    }
  );

});

function buscarUsuario(correo){
  var usuario = usuarios.find( usuario => usuario === correo);
  if(typeof(usuario) !== "undefined"){
    return true;
  } else {
    return false;
  }
}
