import { Request, Response } from "express";
import Colaborador from "models/workers-model";

// Mapeamento de valores de plano
// Em vez de usar números, retorna os valores como strings com "R$"
const PLANO_VALORES: Record<string, number> = {
  "Prime Individual": 40.9,
  "Prime Familiar": 69.9,
  "Premium Individual": 19.9,
  "Premium Familiar": 30.9,
  "Plano Essencial": 19.9,
};

export class WorkerController {
  public async addWorker(req: Request, res: Response): Promise<Response> {
    const {
      produto,
      cpf,
      nomeCompleto,
      dataNascimento,
      telefone,
      sexo,
      email,
      cep,
      estado,
      cidade,
      bairro,
      complemento,
      logradouro,
      numeroEndereco,
    } = req.body;

    const empresaId = req.user?.id;

    if (!empresaId) {
      return res.status(403).json({ message: "Empresa não autenticada." });
    }

    const valor = PLANO_VALORES[produto]; // valor como string
    console.log("Plano recebido:", produto);
    console.log("Valor correspondente:", PLANO_VALORES[produto]);

    try {
      const existingWorker = await Colaborador.findOne({ cpf });
      if (existingWorker) {
        return res
          .status(400)
          .json({ message: "Já existe um colaborador com esse CPF!" });
      }

      const newWorker = new Colaborador({
        produto,
        valor, // string formatada
        cpf,
        nomeCompleto,
        dataNascimento,
        telefone,
        sexo,
        email,
        cep,
        estado,
        cidade,
        bairro,
        complemento,
        logradouro,
        numeroEndereco,
        empresa: empresaId,
      });

      await newWorker.save();

      return res
        .status(201)
        .json({ message: "Colaborador registrado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno do servidor!" });
    }
  }

  public async listWorkers(req: Request, res: Response): Promise<Response> {
    const empresaId = req.user?.id;

    if (!empresaId) {
      return res.status(403).json({ message: "Empresa não autenticada." });
    }

    try {
      const colaboradores = await Colaborador.find({ empresa: empresaId }).sort(
        { createdAt: -1 }
      );
      return res.status(200).json(colaboradores);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar colaboradores." });
    }
  }
}

export default new WorkerController();
