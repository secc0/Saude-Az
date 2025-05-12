import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useRedirectIfAuthenticated() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/teste", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          navigate("/company-dashboard");
        }
      })
      .catch(() => {
        // Usuário não está logado → deixa continuar na página
      });
  }, [navigate]);
}
