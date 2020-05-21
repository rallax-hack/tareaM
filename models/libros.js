var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  Autor: String,
  Titulo: String,
  isbn: String
});

module.exports = mongoose.model('Libro', LibroSchema);
