
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

    try {
      // This would connect to your authentication service
      // For now, we'll just simulate a login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Login bem-sucedido",
        description: `Bem-vindo de volta! Você foi autenticado como ${
          userType === "company" ? "empresa" : "administrador"
        }.`,
      });

      // Redirect to the appropriate dashboard based on user type
      if (userType === "company") {
        window.location.href = "/company-dashboard";
      } else {
        window.location.href = "/admin-dashboard";
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro ao tentar fazer login. Verifique suas credenciais.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Bem-vindo de volta</h1>
        <p className="text-slate-600 mt-2">
          Entre com suas credenciais para acessar sua conta
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="userType">Tipo de Usuário</Label>
          <RadioGroup
            value={userType}
            onValueChange={(value) => setUserType(value as UserType)}
            className="flex space-x-4"
            defaultValue="company"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="company" id="company" />
              <Label htmlFor="company" className="cursor-pointer">
                Empresa
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="admin" id="admin" />
              <Label htmlFor="admin" className="cursor-pointer">
                Administrador
              </Label>
            </div>
          </RadioGroup>
        </div>

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
