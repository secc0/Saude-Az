import { Request, Response } from "express";
import Colaborador from "models/workers-model";

// Mapeamento completo de planos e valores
const PLANOS = {
  "Prime Individual": {
    valor: 40.9,
    nome: "Plano Prime Individual",
  },
  "Prime Familiar": {
    valor: 69.9,
    nome: "Plano Prime Familiar",
  },
  "Premium Individual": {
    valor: 19.9,
    nome: "Plano Premium Individual",
  },
  "Premium Familiar": {
    valor: 30.9,
    nome: "Plano Premium Familiar",
  },
  "Plano essencial": {
    valor: 11.9,
    nome: "Plano Essencial",
  },
};

export class WorkerController {
  public async addWorker(req: Request, res: Response): Promise<Response> {
    const { produto, ...dados } = req.body;
    const empresaId = req.user?.id;

    if (!empresaId) {
      return res.status(403).json({ message: "Empresa não autenticada." });
    }

    // Verifica se o plano existe
    const plano = PLANOS[produto as keyof typeof PLANOS];
    if (!plano) {
      return res.status(400).json({
        message: "Plano inválido",
        planosDisponiveis: Object.keys(PLANOS),
      });
    }

    try {
      // Verifica se CPF já existe
      const existingWorker = await Colaborador.findOne({ cpf: dados.cpf });
      if (existingWorker) {
        return res.status(400).json({
          message: "Já existe um colaborador com este CPF!",
        });
      }

      // Cria novo colaborador
      const newWorker = new Colaborador({
        ...dados,
        produto: plano.nome, // Usa o nome formatado do plano
        valor: plano.valor,
        empresa: empresaId,
      });

      await newWorker.save();

      return res.status(201).json({
        message: "Colaborador registrado com sucesso!",
        colaborador: {
          id: newWorker._id,
          plano: plano.nome,
          valor: plano.valor,
        },
      });
    } catch (error) {
      console.error("Erro ao cadastrar colaborador:", error);
      return res.status(500).json({
        message: "Erro interno no servidor",
        detalhes: error instanceof Error ? error.message : String(error),
      });
    }
  }

  public async listWorkers(req: Request, res: Response): Promise<Response> {
    const empresaId = req.user?.id;

    if (!empresaId) {
      return res.status(403).json({ message: "Empresa não autenticada." });
    }

    try {
      const colaboradores = await Colaborador.find({ empresa: empresaId })
        .sort({ createdAt: -1 })
        .select("-__v -empresa"); // Remove campos desnecessários

      return res.status(200).json(colaboradores);
    } catch (error) {
      console.error("Erro ao listar colaboradores:", error);
      return res.status(500).json({
        message: "Erro ao buscar colaboradores",
        detalhes: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

export default new WorkerController();
