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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`El empleado con el id ${id} no existe`);
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`El empleado con el nombre ${empleado.nombre} no tiene salario definido`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    })
}

getEmpleado(4).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    })
    .catch(err => console.log(err));