
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Download, Plus, Search } from "lucide-react";

type Company = {
  id: string;
  name: string;
  cnpj: string;
  contactName: string;
  contactEmail: string;
  employeesCount: number;
  planType: "basic" | "standard" | "premium";
  status: "active" | "pending" | "inactive";
};

const mockCompanies: Company[] = [
  {
    id: "1",
    name: "Tech Solutions Ltda",
    cnpj: "12.345.678/0001-90",
    contactName: "João Silva",
    contactEmail: "joao@techsolutions.com",
    employeesCount: 25,
    planType: "standard",
    status: "active",
  },
  {
    id: "2",
    name: "Marketing Digital SA",
    cnpj: "23.456.789/0001-01",
    contactName: "Maria Souza",
    contactEmail: "maria@marketingdigital.com",
    employeesCount: 12,
    planType: "basic",
    status: "active",
  },
  {
    id: "3",
    name: "Construção Horizonte",
    cnpj: "34.567.890/0001-12",
    contactName: "Pedro Santos",
    contactEmail: "pedro@horizonteconstrucao.com",
    employeesCount: 40,
    planType: "premium",
    status: "pending",
  },
  {
    id: "4",
    name: "Café Aroma Express",
    cnpj: "45.678.901/0001-23",
    contactName: "Ana Costa",
    contactEmail: "ana@cafearoma.com",
    employeesCount: 8,
    planType: "basic",
    status: "inactive",
  },
  {
    id: "5",
    name: "Contabilidade Precisa",
    cnpj: "56.789.012/0001-34",
    contactName: "Roberto Almeida",
    contactEmail: "roberto@contabilidadeprecisa.com",
    employeesCount: 15,
    planType: "standard",
    status: "active",
  },
];

const AdminDashboard = () => {
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.cnpj.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.contactEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: string, newStatus: "active" | "pending" | "inactive") => {
    setCompanies(
      companies.map((company) =>
        company.id === id ? { ...company, status: newStatus } : company
      )
    );
    
    toast({
      title: "Status atualizado",
      description: "O status da empresa foi atualizado com sucesso.",
    });
  };

  const handleGenerateReport = () => {
    toast({
      title: "Relatório gerado",
      description: "O relatório foi gerado e está disponível para download.",
    });
  };

  const totalEmployees = companies.reduce((acc, company) => acc + company.employeesCount, 0);
  const activeCompanies = companies.filter(company => company.status === "active").length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top navigation */}
      <header className="bg-white shadow-sm border-b border-slate-200 py-4">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" asChild>
              <a href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Voltar ao site</span>
              </a>
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Administrador
            </Button>
            <Button variant="outline" size="sm">
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Painel Administrativo
            </h1>
            <p className="text-slate-600 mt-1">
              Gerencie empresas, colaboradores e relatórios
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Adicionar Empresa
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="companies">Empresas</TabsTrigger>
            <TabsTrigger value="employees">Colaboradores</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total de Empresas</CardTitle>
                  <CardDescription>Empresas cadastradas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-health-600">{companies.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Empresas Ativas</CardTitle>
                  <CardDescription>Com planos ativos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{activeCompanies}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total de Colaboradores</CardTitle>
                  <CardDescription>Todos os colaboradores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-600">{totalEmployees}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Taxa de Utilização</CardTitle>
                  <CardDescription>Últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">68%</div>
                </CardContent>
              </Card>
            </div>

            {/* Chart section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Empresas por Plano</CardTitle>
                  <CardDescription>Distribuição atual</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-slate-50 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-slate-500 mb-2">Gráfico de distribuição de planos</p>
                      <p className="text-slate-400 text-sm">(Os dados reais seriam exibidos em um gráfico de pizza aqui)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Novos Cadastros</CardTitle>
                  <CardDescription>Últimos 12 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-slate-50 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-slate-500 mb-2">Gráfico de novos cadastros</p>
                      <p className="text-slate-400 text-sm">(Os dados reais seriam exibidos em um gráfico de linha aqui)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Últimas ações realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <div>
                      <p className="font-medium">Nova empresa cadastrada</p>
                      <p className="text-sm text-slate-500">Contabilidade Precisa</p>
                    </div>
                    <span className="text-sm text-slate-500">Hoje, 14:30</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <div>
                      <p className="font-medium">Status de empresa alterado</p>
                      <p className="text-sm text-slate-500">Café Aroma Express - Inativo</p>
                    </div>
                    <span className="text-sm text-slate-500">Ontem, 10:15</span>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <div>
                      <p className="font-medium">Relatório global gerado</p>
                      <p className="text-sm text-slate-500">Abril 2023</p>
                    </div>
                    <span className="text-sm text-slate-500">02/05/2023, 09:45</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver todas as atividades</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Empresas</CardTitle>
                <CardDescription>
                  Gerencie as empresas cadastradas na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <Input
                      className="pl-10"
                      placeholder="Buscar empresas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left p-3 font-medium text-slate-600">Empresa</th>
                        <th className="text-left p-3 font-medium text-slate-600">Contato</th>
                        <th className="text-left p-3 font-medium text-slate-600">Colaboradores</th>
                        <th className="text-left p-3 font-medium text-slate-600">Plano</th>
                        <th className="text-left p-3 font-medium text-slate-600">Status</th>
                        <th className="text-right p-3 font-medium text-slate-600">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCompanies.map((company) => (
                        <tr key={company.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{company.name}</p>
                              <p className="text-sm text-slate-500">{company.cnpj}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <div>
                              <p>{company.contactName}</p>
                              <p className="text-sm text-slate-500">{company.contactEmail}</p>
                            </div>
                          </td>
                          <td className="p-3">{company.employeesCount}</td>
                          <td className="p-3">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${company.planType === 'premium' ? 'bg-purple-100 text-purple-800' : 
                                company.planType === 'standard' ? 'bg-blue-100 text-blue-800' : 
                                'bg-green-100 text-green-800'}
                            `}>
                              {company.planType === 'premium' ? 'Premium' : 
                                company.planType === 'standard' ? 'Padrão' : 
                                'Básico'}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${company.status === 'active' ? 'bg-green-100 text-green-800' : 
                                company.status === 'pending' ? 'bg-amber-100 text-amber-800' : 
                                'bg-slate-100 text-slate-800'}
                            `}>
                              {company.status === 'active' ? 'Ativo' : 
                                company.status === 'pending' ? 'Pendente' : 
                                'Inativo'}
                            </div>
                          </td>
                          <td className="p-3 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" size="sm">Detalhes</Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleStatusChange(
                                  company.id, 
                                  company.status === 'active' ? 'inactive' : 'active'
                                )}
                              >
                                {company.status === 'active' ? 'Desativar' : 'Ativar'}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-slate-500">Mostrando {filteredCompanies.length} de {companies.length} empresas</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>Anterior</Button>
                  <Button variant="outline" size="sm" disabled>Próximo</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="employees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lista Global de Colaboradores</CardTitle>
                <CardDescription>
                  Visualize todos os colaboradores cadastrados na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <Input
                      className="pl-10"
                      placeholder="Buscar colaboradores..."
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left p-3 font-medium text-slate-600">Nome</th>
                        <th className="text-left p-3 font-medium text-slate-600">Empresa</th>
                        <th className="text-left p-3 font-medium text-slate-600">E-mail</th>
                        <th className="text-left p-3 font-medium text-slate-600">Status</th>
                        <th className="text-right p-3 font-medium text-slate-600">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-3">
                          <p className="font-medium">João Silva</p>
                        </td>
                        <td className="p-3">Tech Solutions Ltda</td>
                        <td className="p-3">joao.silva@empresa.com</td>
                        <td className="p-3">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Ativo
                          </div>
                        </td>
                        <td className="p-3 text-right">
                          <Button variant="outline" size="sm">Detalhes</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-3">
                          <p className="font-medium">Maria Santos</p>
                        </td>
                        <td className="p-3">Marketing Digital SA</td>
                        <td className="p-3">maria.santos@empresa.com</td>
                        <td className="p-3">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Ativo
                          </div>
                        </td>
                        <td className="p-3 text-right">
                          <Button variant="outline" size="sm">Detalhes</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-3">
                          <p className="font-medium">Pedro Almeida</p>
                        </td>
                        <td className="p-3">Construção Horizonte</td>
                        <td className="p-3">pedro.almeida@empresa.com</td>
                        <td className="p-3">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Pendente
                          </div>
                        </td>
                        <td className="p-3 text-right">
                          <Button variant="outline" size="sm">Detalhes</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-3">
                          <p className="font-medium">Ana Costa</p>
                        </td>
                        <td className="p-3">Café Aroma Express</td>
                        <td className="p-3">ana.costa@empresa.com</td>
                        <td className="p-3">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                            Inativo
                          </div>
                        </td>
                        <td className="p-3 text-right">
                          <Button variant="outline" size="sm">Detalhes</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-slate-500">Mostrando 4 de 100 colaboradores</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>Anterior</Button>
                  <Button variant="outline" size="sm">Próximo</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios Administrativos</CardTitle>
                <CardDescription>
                  Gere e baixe relatórios globais da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Relatório de Empresas</h3>
                    <p className="text-slate-600 mb-4">Lista completa de todas as empresas cadastradas com seus planos e status.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div> */}
                  
                  <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Relatório de Colaboradores</h3>
                    <p className="text-slate-600 mb-4">Lista completa de todos os colaboradores por empresa.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div>
                  
                  {/* <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Relatório Financeiro</h3>
                    <p className="text-slate-600 mb-4">Resumo financeiro com receitas, custos e projeções.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div> */}
                  
                  {/* <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Relatório de Utilização</h3>
                    <p className="text-slate-600 mb-4">Análise de utilização dos serviços por empresa e categoria.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div> */}
                </div>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Exportação em Massa</CardTitle>
                    <CardDescription>Exporte múltiplos relatórios de uma vez</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Selecione os relatórios que deseja exportar e o formato de saída (PDF ou Excel).
                    </p>
                    <Button>Exportar Relatórios</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
