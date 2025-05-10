
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const RegisterForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [emailFinanceiro, setEmailFinanceiro] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Erro de validação",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // This would connect to your registration service
      // For now, we'll just simulate the registration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Sua conta foi criada. Você já pode fazer login.",
      });
      
      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao tentar criar sua conta. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCNPJ = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, "");
    
    // Apply CNPJ mask: xx.xxx.xxx/xxxx-xx
    return digits
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };
  
  const formatPhone = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, "");
    
    // Apply phone mask: (xx) xxxxx-xxxx
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Cadastre sua empresa</h1>
        <p className="text-slate-600 mt-2">
          Preencha o formulário abaixo para criar sua conta
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="companyName">Nome da Empresa</Label>
            <Input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Nome da sua empresa"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              type="text"
              id="cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(formatCNPJ(e.target.value))}
              placeholder="00.000.000/0000-00"
              maxLength={18}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactName">Nome do Responsável</Label>
            <Input
              type="text"
              id="contactName"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Nome completo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(00) 00000-0000"
              maxLength={15}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="empresa@email.com"
              required
            />
          </div>

             <div className="space-y-2">
            <Label htmlFor="emailFinanceiro">E-mail financeiro</Label>
            <Input
              type="email"
              id="emailFinanceiro"
              value={emailFinanceiro}
              onChange={(e) => setEmailFinanceiro(e.target.value)}
              placeholder="empresa@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={8}
              required
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="confirmPassword">Confirme a Senha</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              minLength={8}
              required
            />
          </div>
        </div>

        <div className="text-sm text-slate-600">
          Ao se cadastrar você concorda com nossos{" "}
          <Link to="/terms" className="text-health-600 hover:text-health-700">
            Termos de Serviço
          </Link>{" "}
          e{" "}
          <Link to="/privacy" className="text-health-600 hover:text-health-700">
            Política de Privacidade
          </Link>
          .
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Processando..." : "Criar Conta"}
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-slate-600">
          Já tem uma conta?{" "}
          <Link
            to="/login"
            className="font-medium text-health-600 hover:text-health-700"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
