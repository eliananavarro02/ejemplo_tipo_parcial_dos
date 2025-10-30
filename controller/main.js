//Controlador principal
//Funciones

//CRUD (Create, Read, Update, Delete)
function crearEmpleado() {
  document.getElementById('divAgregarEmpleado').style.display = 'block';
}

//Función Agregar Empleado (C - Crear)
function agregarEmpleado(e) {
  e.preventDefault();
  alert("Entró a agregar empleado");

  const empleado = new Empleado(
    document.getElementById('cc').value,
    document.getElementById('nombresyApellidos').value,
    document.getElementById('direccion').value,
    document.getElementById('email').value,
    document.getElementById('telefono').value,
    document.getElementById('sueldoBase').value,
    document.getElementById('tipoEmpleado').value,
    document.getElementById('tipoBonificacion').value
  );

  // Obtener lista existente o crear nueva
  let empleados = JSON.parse(localStorage.getItem('empleados')) || [];

  // Agregar nuevo empleado
  empleados.push(empleado);

  // Guardar nuevamente
  localStorage.setItem('empleados', JSON.stringify(empleados));

  // Actualizar tabla
  mostrarEmpleados();

  // Limpiar formulario
  document.getElementById('formEmpleado').reset();
}

// Muestra empleados en tabla
function mostrarEmpleados() {
  const tbody = document.querySelector('#tablaEmpleado tbody');
  tbody.innerHTML = '';

  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

  empleados.forEach((emp, index) => {
    const fila = `<tr>
      <td>${index + 1}</td>
      <td>${emp.cc}</td>
      <td>${emp.nombresyApellidos}</td>
      <td>${emp.direccion}</td>
      <td>${emp.email}</td>
      <td>${emp.telefono}</td>
      <td>${emp.sueldoBase}</td>
      <td>${emp.tipoEmpleado}</td>
      <td>${emp.tipoBonificacion}</td>
      <td>${emp.sueldoTotal}</td>
    </tr>`;
    tbody.innerHTML += fila;
  });

  hallarTotalNomina();

}

function hallarTotalNomina() {
    
  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

  let totalNomina = empleados.reduce((total, emp) => total + parseInt(emp.sueldoTotal), 0);
  document.getElementById('totalNomina').textContent = totalNomina;
}

// Cargar empleados guardados al iniciar
document.addEventListener("DOMContentLoaded", () => {
  
  mostrarEmpleados();

  document.getElementById('formEmpleado').addEventListener('submit', agregarEmpleado);

});
