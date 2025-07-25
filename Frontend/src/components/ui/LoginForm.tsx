import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

type UserType = "company" | "admin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("company");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // try {
    //   const response = await fetch("https://saude-az.onrender.com/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //     credentials: "include",
    //   });

    //   if (!response.ok) {
    //     const data = await response.json();
    //     throw new Error(data.message || "Erro ao logar");
    //   }

    //   toast({
    //     title: "Login bem-sucedido",
    //     description: `Bem-vindo de volta! Você foi autenticado como ${
    //       userType === "company" ? "empresa" : "administrador"
    //     }.`,
    //   });

    //   if (userType === "company") {
    //     window.location.href = "/company-dashboard";
    //   } else {
    //     window.location.href = "/admin-dashboard";
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Erro no login",
    //     description:
    //       "Ocorreu um erro ao tentar fazer login. Verifique suas credenciais.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setLoading(false);
    // }
    
    try {
  const response = await fetch("https://saude-az.onrender.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao logar");
  }

  const { token } = data;

  if (!token) throw new Error("Token não recebido do servidor");

  // Armazena o token (exemplo com localStorage)
  localStorage.setItem("auth_token", token);

  toast({
    title: "Login bem-sucedido",
    description: `Bem-vindo de volta! Você foi autenticado como ${
      userType === "company" ? "empresa" : "administrador"
    }.`,
  });

  const redirectPath =
    userType === "company" ? "/company-dashboard" : "/admin-dashboard";

  window.location.href = redirectPath;
} catch (error) {
  toast({
    title: "Erro no login",
    description:
      error instanceof Error
        ? error.message
        : "Ocorreu um erro ao tentar fazer login.",
    variant: "destructive",
  });
} finally {
  setLoading(false);
}
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Bem-vindo de volta
        </h1>
        <p className="text-slate-600 mt-2">
          Entre com suas credenciais para acessar sua conta
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-health-600 hover:text-health-700"
            >
              Esqueceu a senha?
            </Link>
          </div>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-slate-600">
          Não tem uma conta?{" "}
          <Link
            to="/register"
            className="font-medium text-health-600 hover:text-health-700"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
