
class Empleado{

	//Atributos


	//Constructor
	
	constructor(cc, nombresyApellidos, direccion, email, telefono, sueldoBase, tipoEmpleado, tipoBonificacion){
		this.cc = cc;
		this.nombresyApellidos = nombresyApellidos;
		this.direccion = direccion;
		this.email = email;
		this.telefono = telefono;
		this.sueldoBase = parseInt(sueldoBase);
		this.tipoEmpleado = tipoEmpleado;
		this.tipoBonificacion = tipoBonificacion;
		this.sueldoTotal = this.calcularSueldoTotal();
	}

	//Métodos
	calcularSueldoTotal() {
    let adicion = 0;
    if (this.tipoBonificacion === 'A') adicion = 200000;
    else if (this.tipoBonificacion === 'B') adicion = 150000;
    else if (this.tipoBonificacion === 'C') adicion = 100000;
    else if (this.tipoBonificacion === 'D') adicion = 50000;

    return parseInt(this.sueldoBase) + parseInt(adicion);
  }
}