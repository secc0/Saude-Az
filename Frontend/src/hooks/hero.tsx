import { useEffect, useState } from "react";

export default function Teste() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/") // ou apenas '/' se estiver no mesmo domínio
      .then((res) => res.text())
      .then((data) => {
        console.log("Resposta da API:", data);
        setMensagem(data);
      })
      .catch((err) => console.error("Erro ao chamar API:", err));
  }, []);

  return (
    <div>
      <h1>Hero Section</h1>
      <p>Mensagem da API: {mensagem}</p>
    </div>
  );
}
