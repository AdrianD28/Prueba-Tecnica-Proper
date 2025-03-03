const dataService = require('../services/dataService');
const data = require('../models/data');

// Agregar registros nuevos
dataService.addRecord({ Id: 12, Nombre: 'NuevoGato', idPadre: 2 });
dataService.addRecord({ Id: 13, Nombre: 'NuevoFido', idPadre: 9 });


// Encontrar el registro incorrecto
const incorrectRecord = dataService.findIncorrectRecord();
console.log(`Registro incorrecto: ${incorrectRecord.Nombre} (Id: ${incorrectRecord.Id})`);

dataService.printTree(data);