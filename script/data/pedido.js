

//Esta Era un alerta que me funcionaba perfectamente y al amanecer no quiso seguir funcionando. 

// const elementProcesarCompra = document.getElementById('procesarcompra')

// elementProcesarCompra.addEventListener('click', procesarcompraAlert)

// function procesarcompraAlert(e) {
//   e.preventDefault();
//   Swal.fire({
//     title: 'Custom width, padding, color, background.',
//     width: 600,
//     padding: '3em',
//     color: '#716add',
//     background: '#fff url(/images/trees.png)',
//     backdrop: `
//       rgba(0,0,123,0.4)
//       url("/images/nyan-cat.gif")
//       left top
//       no-repeat
//     `
//   })
// }



//Guardando en el localStorage

const cliente = [],
      correo = []
    

const guardarItems = document.getElementById('procesarcompra')
guardarItems.addEventListener('click', procesarCompra)



function procesarCompra() {

 const clientes = document.getElementById('cliente').value
 const correos = document.getElementById('correo').value
 

  cliente.push(clientes)
  correo.push(correos)
  


  localStorage.setItem('user', JSON.stringify(cliente))
  localStorage.setItem('email', JSON.stringify(correo))
  

}


