import mongoose, { Schema, Document } from 'mongoose';

interface ICompany extends Document {
  companyName: string;
  cnpj: string;
  contactName: string;
  email: string;
  emailFinanceiro: String
  phone: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  comparePassword(inputPassword: string): boolean;
}

const companySchema: Schema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true
    },
    cnpj: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: function (v: string): boolean {
          return /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/.test(v);
        },
        message: (props: any) => `${props.value} não é um CNPJ válido!`
      }
    },
    contactName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v: string): boolean {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props: any) => `${props.value} não é um e-mail válido!`
      }
    },
    emailFinanceiro: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v: string): boolean {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props: any) => `${props.value} não é um e-mail válido!`
      }
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

companySchema.methods.comparePassword = function (inputPassword: string): boolean {
  return this.password === inputPassword;
};

const Company = mongoose.model<ICompany>('Company', companySchema);

export default Company;
