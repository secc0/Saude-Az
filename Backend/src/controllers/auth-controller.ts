import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Company from 'models/company-model';
import {env} from "../config/environment-validation"
import { AuthService } from 'services/auth-service';

export class AuthController {
  public async register(req: Request, res: Response): Promise<Response> {
    const {
      companyName,
      cnpj,
      contactName,
      email,
      emailFinanceiro,
      phone,
      password,
      confirmPassword,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "As senhas não coincidem!" });
    }

    try {
      const existingCompany = await Company.findOne({
        $or: [{ cnpj }, { email }],
      });
      if (existingCompany) {
        return res
          .status(400)
          .json({ message: "CNPJ ou E-mail já registrados!" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newCompany = {
        companyName,
        cnpj,
        contactName,
        email,
        emailFinanceiro,
        phone,
        password: hashedPassword,
      };

      await AuthService.register(newCompany)
      
      return res.status(201).json({ message: 'Registro realizado com sucesso!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor!" });
    }
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "E-mail e senha são obrigatórios." });
    }

    try {
      const token = await AuthService.login(email, password)
      
      res.cookie('token', token, {

        httpOnly: true,
        secure: true, // HTTPS obrigatório
        sameSite: "none", // permite envio entre domínios diferentes
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ message: "Login bem-sucedido!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new AuthController();
