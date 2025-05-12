import mongoose, { Schema, Document } from 'mongoose';

interface IColaborator extends Document {
  nomeCompleto: string;
  cpf: string;
  email: string;
  cargo: string;
  telefone: string;
  genero: string;
  dataNascimento: Date;
  estadoCivil: string;
  cep: string;
  cidade: string;
  estado: string;
  rua: string;
  numero: string;
  complemento?: string;
  senha: string;
  comparePassword: (inputPassword: string) => boolean;
}

const colaboratorSchema: Schema<IColaborator> = new Schema(
  {
    nomeCompleto: { type: String, required: true, trim: true },
    cpf: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v: string) => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(v),
        message: (props: any) => `${props.value} não é um CPF válido!`
      }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (v: string) => /\S+@\S+\.\S+/.test(v),
        message: (props: any) => `${props.value} não é um e-mail válido!`
      }
    },
    cargo: { type: String, required: true },
    telefone: { type: String, required: true },
    genero: { type: String, enum: ['Masculino', 'Feminino', 'Outro'], required: true },
    dataNascimento: { type: Date, required: true },
    estadoCivil: { type: String, required: true },
    cep: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String },
    senha: {
      type: String,
      required: true,
      minlength: 6
    }
  },
  { timestamps: true,
    collection: "workers"
   }
);

colaboratorSchema.methods.comparePassword = function (inputPassword: string): boolean {
  return this.senha === inputPassword;
};

const Colaborator = mongoose.model<IColaborator>('Colaborator', colaboratorSchema);

export default Colaborator;
