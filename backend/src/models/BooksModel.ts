import mongoose, { Document, Schema } from "mongoose";

// Definição da interface para o documento
interface IBook extends Document {
  course: string;
  title: string;
  author: string;
  publisher: string;
  year: number;
}

// Definição do Schema
const bookSchema: Schema = new Schema({

  course: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true
   },
  publisher: { 
    type: String, 
    required: true 
  },
  year: { 
    type: Number, 
    required: true 
  },
});

// Criação do modelo
const Book = mongoose.model("Book", bookSchema);

export default Book;

// Criando o modelo baseado no schema
//const EventoModel = mongoose.model('Evento', eventoSchema);

//export default EventoModel
