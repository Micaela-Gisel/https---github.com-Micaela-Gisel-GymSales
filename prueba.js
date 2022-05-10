
function convertirDatos(RegistrarEnBd){

  var objRecibido = JSON.parse(localStorage.getItem("registro"));
      
document.write(objRecibido.Nombre+": " +objRecibido.Apellido+" : " +objRecibido.Email+": " +objRecibido.Contrasenia+": " + objRecibido.Telefono);