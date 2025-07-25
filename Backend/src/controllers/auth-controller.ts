import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Company from "models/company-model";
import { env } from "../config/environment-validation";

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

      return res
        .status(201)
        .json({ message: "Registro realizado com sucesso!" });
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
      const company = await Company.findOne({ email });

      if (!company) {
        return res.status(404).json({ message: "Empresa não encontrada." });
      }

      const isPasswordValid = await bcrypt.compare(password, company.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Senha incorreta." });
      }

      const token = jwt.sign(
        {
          id: company._id,
          companyName: company.companyName,
        },
        env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      console.log(token);
      
      // res.cookie("token", token, {
      //   httpOnly: true,
      //   secure: true,
      //   sameSite: "none", // isso é ESSENCIAL para cross-site
      //   maxAge: 7 * 24 * 60 * 60 * 1000,
      // });
      
      // return res.status(200).json({
      //   message: "Login bem-sucedido!",
      // });
      return res.status(200).json({message: "Login bem-sucedido!", token})
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
  public async logout(req: Request, res: Response): Promise<Response> {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      return res.status(200).json({ message: "Logout realizado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao fazer logout." });
    }
  }
}

export default new AuthController();
