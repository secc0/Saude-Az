// src/hooks/useAuthGuard.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// export default function useAuthGuard() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://saude-az.onrender.com/authRouteCheck", {
//       credentials: "include",
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error();
//       })
//       .catch(() => {
//         navigate("/login");
//       });
//   }, [navigate]);
// }

export default function useAuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("https://saude-az.onrender.com/authRouteCheck", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error();
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);
}

