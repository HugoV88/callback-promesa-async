let empleados = [{
    nombre: 'Hugo Vargas',
    id: 1
}, {
    nombre: 'Mairelys Rondon',
    id: 2
}, {
    nombre: 'Elsa Celis',
    id: 3
}]

let salarios = [{
    salario: 3000,
    id: 1
}, {
    salario: 2000,
    id: 2
}]

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`El empleado con el id ${id} no existe`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`El salario del empleado ${empleado.nombre} no existe`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return (`El empleado ${resp.nombre} tiene un salario de $${resp.salario}`);
}

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));