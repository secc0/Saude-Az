// src/hooks/useAuthGuard.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/authRouteCheck", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error();
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);
}
