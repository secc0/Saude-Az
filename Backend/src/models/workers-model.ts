import mongoose, { Schema, Document } from "mongoose";

interface IColaborador extends Document {
  produto: string;
  valor: number;
  cpf: string;
  nomeCompleto: string;
  dataNascimento: Date;
  telefone: string;
  sexo: string;
  email: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  complemento?: string;
  logradouro: string;
  numeroEndereco: string;
  empresa: mongoose.Types.ObjectId; // <- adicionado corretamente
}

const colaboradorSchema: Schema = new Schema(
  {
    produto: {
      type: String,
      required: true,
      trim: true,
    },
    valor: {
      type: String,
      required: true,
      trim: true,
    },

    cpf: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: function (v: string): boolean {
          return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v);
        },
        message: (props: any) => `${props.value} não é um CPF válido!`,
      },
    },
    nomeCompleto: {
      type: String,
      required: true,
      trim: true,
    },
    dataNascimento: {
      type: Date,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
      trim: true,
    },
    sexo: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v: string): boolean {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props: any) => `${props.value} não é um e-mail válido!`,
      },
    },
    cep: {
      type: String,
      required: true,
      trim: true,
    },
    estado: {
      type: String,
      required: true,
      trim: true,
    },
    cidade: {
      type: String,
      required: true,
      trim: true,
    },
    bairro: {
      type: String,
      required: true,
      trim: true,
    },
    complemento: {
      type: String,
      trim: true,
    },
    logradouro: {
      type: String,
      required: true,
      trim: true,
    },
    numeroEndereco: {
      type: String,
      required: true,
      trim: true,
    },
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true, collection: "colaboradores" }
);

const Colaborador = mongoose.model<IColaborador>(
  "Colaborador",
  colaboradorSchema
);

export default Colaborador;
