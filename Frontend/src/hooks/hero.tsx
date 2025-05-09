// src/hooks/hero.tsx
import { useEffect, useState } from "react";

type Livro = {
  id: number;
  titulo: string;
  autor: string;
  tema: string;
};

export default function useApiMessage() {
  const [mensagem, setMensagem] = useState<Livro[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json()) // <- aqui está a chave
      .then((data) => {
        console.log("Resposta da API:", data);
        setMensagem(data);
      })
      .catch((err) => console.error("Erro ao chamar API:", err));
  }, []);

  return mensagem;
}
