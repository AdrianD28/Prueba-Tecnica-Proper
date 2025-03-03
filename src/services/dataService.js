const data = require('../models/data');

const addRecord = (record) => {
  data.push(record);
};

const findIncorrectRecord = () => {
  return data.find(record => record.Id === 6);
};

const printTree = (data, parentId = 0, level = 0) => {
  data
    .filter(item => item.idPadre === parentId)
    .forEach(item => {
      console.log(' '.repeat(level * 2) + item.Nombre);
      printTree(data, item.Id, level + 1);
    });
};

module.exports = {
  addRecord,
  findIncorrectRecord,
  printTree
};