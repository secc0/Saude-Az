import { useEffect, useState } from "react";

export default function useApiMessage() {
  const [mensagem, setMensagem] = useState<string>("");

  useEffect(() => {
    fetch("https://saude-az.onrender.com/teste", {
      credentials: "include", // importante para enviar o cookie com JWT
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Resposta da API:", data);
        setMensagem(data.message); // <- acessa o campo específico
      })
      .catch((err) => console.error("Erro ao chamar API:", err));
  }, []);

  return mensagem;
}
