// src/hooks/hero.tsx
import { useEffect, useState } from "react";

export default function useApiMessage() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000") // ajuste a URL se necessário
      .then((res) => res.text())
      .then((data) => {
        console.log("Resposta da API:", data);
        setMensagem(data);
      })
      .catch((err) => console.error("Erro ao chamar API:", err));
  }, []);

  return mensagem;
}
