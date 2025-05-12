import bcrypt from "bcryptjs"
import { env } from "config/environment-validation";
import jwt from 'jsonwebtoken';

import Company from "models/company-model"

export class AuthService{
    static async register(company: any){
        try{
            const newCompany = new Company(company)
            return await newCompany.save()
        }catch(err){
            console.error(err)
            throw new Error('Erro ao registrar empresa')
        }
    }
    static async login(email:string, password:string){
        try {
            const company = await Company.findOne({ email });
            
            if (!company) {
                throw new Error('Empresa não encontrada.');
            }

            const isPasswordValid = await bcrypt.compare(password, company.password);
            
            if (!isPasswordValid) {
                throw new Error('Senha invalida')
            }
            const token = jwt.sign({ id: company._id }, env.JWT_SECRET, { expiresIn: '7d' });
            return token
    }catch(err){
        console.error(err)
        throw new Error('Erro ao realizar login')
    }
}
}