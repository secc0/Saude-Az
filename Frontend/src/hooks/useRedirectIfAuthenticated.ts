import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// export default function useRedirectIfAuthenticated() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://saude-az.onrender.com/authRouteCheck", {
//       credentials: "include",
//     })
//       .then((res) => {
//         if (res.ok) {
//           navigate("/company-dashboard");
//         }
//       })
//       .catch(() => {
//         // Usuário não está logado → deixa continuar na página
//       });
//   }, [navigate]);
// }

export default function useRedirectIfAuthenticated() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      // Sem token, deixa o usuário continuar na página de login ou similar
      return;
    }

    fetch("https://saude-az.onrender.com/authRouteCheck", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          navigate("/company-dashboard");
        }
      })
      .catch(() => {
        // Usuário não está autenticado → deixa continuar na página
      });
  }, [navigate]);
}
