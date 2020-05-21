var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

//mongodb+srv://usuario1:<password>cluster0-pxn5q.godb.net/test?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://usuario1:gFKuucg1t1XIqTvM@cluster0-pxn5q.mongodb.net/libros?retryWrites=true&w=majority', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

  function nuevoLibro() {
    var libro = Libro({
      Autor: " Dan Brown",
      Titulo: "Codigo da Vinci",
      isbn: "587313035X"
    });

    libro.save(function(err, data) {
      if (err) {
        console.log("------------------------ERROR --------------------------");
        console.log(err);
      } else {
        console.log("--------------------------OK ---------------------------");
        console.log(data);
      }
    });
  }


function nuevoLibroT() {
  var librosT=[
    { Autor: "Miguel de Servantes",Titulo:"Don Quijote de la Manch" ,isbn:"507313035X" },
    { Autor: "J. K. Rowlinge",Titulo:"Harry Potter" ,isbn:"607313035X"},
    { Autor: "Hilda Perera",Titulo:"Perdido" ,isbn:"607313035X"},
    { Autor: "Jose Emilio Pacheco",Titulo:"Las Batallas en el Desierto" ,isbn:"407313035X"},
    { Autor: "Miguel de Servantes",Titulo:"EL senior mancha" ,isbn:"500313035X"},
    { Autor: "STEPHEN CHBOSKY",Titulo:"Las Ventajas de ser invicible" ,isbn:"200313035X"},
    { Autor: "Stephen Hawking",Titulo:"Breve Historia del Tiempo" ,isbn:"100313035X"},
    { Autor: "Stephen King",Titulo:"Eso" ,isbn:"150313035X"},
    { Autor: "J.R.R. Tolkien",Titulo:"Senior de los anillos" ,isbn:"999313035X"},
    { Autor: "Dan Brown",Titulo:"Codigo de da Vinci" ,isbn:"332313035X"},


  ];

  Libro.collection.insert(librosT,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function findByisbn(isbn){
  Libro.find({isbn:isbn},function(err,documentos){
    console.log(documentos);
  });
}

function modificarTituloByIsbn(isbn, Titulo, Autor){
  Libro.findOneAndUpdate({isbn:isbn},
    {Titulo:Titulo},function(err,documentos){
    if (err) {
      console.log(err);
    }
    console.log(documentos);
  });
}


function main() {
  //nuevoLibro();
//  nuevoLibroT();
//findByisbn("332313035X");
modificarTituloByIsbn("332313035X", "Dan Vinci");

}

main(); // ejecutamos main
