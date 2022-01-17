//Guardando datos en el localStorage
const nombre = [],
    apellido = [],
    email = [],
    cedula = [],
    contraseña = [],
    ncontraseña = [];

    const elementBotonGuardar = document.getElementById('btnGuardar')

    elementBotonGuardar.addEventListener('click', Guardar)



    function Guardar() {
        const nomb = document.getElementById('name').value,
            apelli = document.getElementById('lastName').value,
            ema = document.getElementById('email').value,
            cedu = document.getElementById('id').value,
            contra = document.getElementById('password').value,
            ncontra = document.getElementById('password2').value;



      nombre.push(nomb)
      apellido.push(apelli)
      email.push(ema)
      cedula.push(cedu)
      contraseña.push(contra)
      ncontraseña.push(ncontra)

      
      localStorage.setItem('nombre_user', JSON.stringify(nombre))
      localStorage.setItem('apellido_lastna', JSON.stringify(apellido))
      localStorage.setItem('email_correo', JSON.stringify(email))
      localStorage.setItem('cc_cedula', JSON.stringify(cedula))
      localStorage.setItem('contrase_contra', JSON.stringify(contraseña))
      localStorage.setItem('ncontrase_contrase', JSON.stringify(contraseña))
    }



     

            
    








