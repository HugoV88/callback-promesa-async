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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`El empleado con el id ${id} no existe`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        callback(`No se encuentra el salario para el usuario ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: salarioDB.id
        })
    }
}

getEmpleado(4, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        getSalario(empleado, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`El empleado con el nombre ${resp.nombre} tiene un salario de $${resp.salario}`)
            }
        })
    }
})