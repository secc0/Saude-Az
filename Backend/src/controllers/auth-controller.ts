import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Company from 'models/company-model';

export class AuthController {
  public async register(req: Request, res: Response): Promise<Response> {
    console.log("--------------------------------------------")
    console.log(req.body)
    console.log("--------------------------------------------")
    const { companyName, cnpj, contactName, email, emailFinanceiro,phone, password, confirmPassword } = req.body;


    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'As senhas não coincidem!' });
    }

    try {
      const existingCompany = await Company.findOne({ $or: [{ cnpj }, { email }] });
      if (existingCompany) {
        return res.status(400).json({ message: 'CNPJ ou E-mail já registrados!' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newCompany = new Company({
        companyName,
        cnpj,
        contactName,
        email,
        emailFinanceiro,
        phone,
        password: hashedPassword,
      });

      await newCompany.save();

      return res.status(201).json({ message: 'Registro realizado com sucesso!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor!' });
    }
  }
}

export default new AuthController();
