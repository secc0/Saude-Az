
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
import AddEmployeeForm, { plans } from "@/components/dashboard/AddEmployeeForm";

type Employee = {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "active" | "pending" | "inactive";
  price?: number; // Add price property
};

const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@empresa.com",
    role: "Desenvolvedor",
    department: "Plano Prime Individual",
    status: "active",
    price: 40.90,
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria.santos@empresa.com",
    role: "Designer",
    department: "Plano Prime Familiar",
    status: "active",
    price: 69.90,
  },
  {
    id: "3",
    name: "Pedro Almeida",
    email: "pedro.almeida@empresa.com",
    role: "Analista",
    department: "Plano Premium Individual",
    status: "pending",
    price: 19.90,
  },
  {
    id: "4",
    name: "Ana Souza",
    email: "ana.souza@empresa.com",
    role: "Gerente",
    department: "Plano Essencial",
    status: "active",
    price: 19.90,
  },
  {
    id: "5",
    name: "Lucas Ferreira",
    email: "lucas.ferreira@empresa.com",
    role: "Vendedor",
    department: "Plano Premium Familiar",
    status: "inactive",
    price: 30.90,
  },
];

const CompanyDashboard = () => {        
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const { toast } = useToast();

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total value
  const totalValue = filteredEmployees
    .filter(emp => emp.status === 'active')
    .reduce((sum, emp) => sum + (emp.price || 0), 0);

  const handleStatusChange = (id: string, newStatus: "active" | "pending" | "inactive") => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, status: newStatus } : emp
      )
    );
    
    toast({
      title: "Status atualizado",
      description: "O status do colaborador foi atualizado com sucesso.",
    });
  };

  const handleAddEmployee = (newEmployee: Employee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleGenerateReport = () => {
    toast({
      title: "Relatório gerado",
      description: "O relatório foi gerado e está disponível para download.",
    });
  };

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
              Empresa ABC Ltda.
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
              Dashboard da Empresa
            </h1>
            <p className="text-slate-600 mt-1">
              Gerencie seus colaboradores e benefícios de saúde
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={() => setIsAddEmployeeModalOpen(true)}>
              <Plus className="h-4 w-4 mr-2" /> Adicionar Colaborador
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="employees">Colaboradores</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total de Colaboradores</CardTitle>
                  <CardDescription>Todos os colaboradores cadastrados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-health-600">{employees.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Colaboradores Ativos</CardTitle>
                  <CardDescription>Com acesso aos benefícios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    {employees.filter(e => e.status === 'active').length}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Uso dos Benefícios</CardTitle>
                  <CardDescription>Última semana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-600">75%</div>
                </CardContent>
              </Card>
            </div>

            {/* Chart section */}
            <Card>
              <CardHeader>
                <CardTitle>Utilização dos Serviços</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-slate-50 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-slate-500 mb-2">Gráfico de utilização dos serviços</p>
                    <p className="text-slate-400 text-sm">(Os dados reais seriam exibidos em um gráfico aqui)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                      <p className="font-medium">Maria Santos agendou consulta</p>
                      <p className="text-sm text-slate-500">Clínica Geral - Dr. Roberto</p>
                    </div>
                    <span className="text-sm text-slate-500">Hoje, 14:30</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <div>
                      <p className="font-medium">João Silva adicionado ao plano</p>
                      <p className="text-sm text-slate-500">Plano Básico</p>
                    </div>
                    <span className="text-sm text-slate-500">Ontem, 10:15</span>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <div>
                      <p className="font-medium">Relatório mensal gerado</p>
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

          <TabsContent value="employees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Colaboradores</CardTitle>
                <CardDescription>
                  Gerencie os colaboradores cadastrados na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <Input
                      className="pl-10"
                      placeholder="Buscar colaboradores..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left p-3 font-medium text-slate-600">Nome</th>
                        <th className="text-left p-3 font-medium text-slate-600">Plano</th>
                        <th className="text-left p-3 font-medium text-slate-600">Cargo</th>
                        <th className="text-right p-3 font-medium text-slate-600">Valor</th>
                        <th className="text-left p-3 font-medium text-slate-600">Status</th>
                        <th className="text-right p-3 font-medium text-slate-600">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEmployees.map((employee) => (
                        <tr key={employee.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{employee.name}</p>
                              <p className="text-sm text-slate-500">{employee.email}</p>
                            </div>
                          </td>
                          <td className="p-3">{employee.department}</td>
                          <td className="p-3">{employee.role}</td>
                          <td className="p-3 text-right">
                            {employee.price ? `R$ ${employee.price.toFixed(2)}` : '-'}
                          </td>
                          <td className="p-3">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${employee.status === 'active' ? 'bg-green-100 text-green-800' : 
                                employee.status === 'pending' ? 'bg-amber-100 text-amber-800' : 
                                'bg-slate-100 text-slate-800'}
                            `}>
                              {employee.status === 'active' ? 'Ativo' : 
                                employee.status === 'pending' ? 'Pendente' : 
                                'Inativo'}
                            </div>
                          </td>
                          <td className="p-3 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" size="sm">Editar</Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleStatusChange(
                                  employee.id, 
                                  employee.status === 'active' ? 'inactive' : 'active'
                                )}
                              >
                                {employee.status === 'active' ? 'Desativar' : 'Ativar'}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/* Total row */}
                      <tr className="bg-slate-50 font-medium">
                        <td colSpan={3} className="p-3 text-right">
                          Total:
                        </td>
                        <td className="p-3 text-right">
                          R$ {totalValue.toFixed(2)}
                        </td>
                        <td colSpan={2}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-slate-500">Mostrando {filteredEmployees.length} de {employees.length} colaboradores</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>Anterior</Button>
                  <Button variant="outline" size="sm" disabled>Próximo</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios</CardTitle>
                <CardDescription>
                  Gere e baixe relatórios da sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Relatório de Utilização</h3>
                    <p className="text-slate-600 mb-4">Acompanhe como os colaboradores estão utilizando os benefícios de saúde.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div> */}
                  
                  {/* <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Relatório Financeiro</h3>
                    <p className="text-slate-600 mb-4">Visualize os custos e economia com o plano de saúde complementar.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div> */}
                  
                  <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Lista de Colaboradores</h3>
                    <p className="text-slate-600 mb-4">Exporte a lista completa de colaboradores com seus status.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div>
                  
                  {/* <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Histórico de Serviços</h3>
                    <p className="text-slate-600 mb-4">Veja todos os serviços utilizados pelos colaboradores.</p>
                    <Button onClick={handleGenerateReport}>
                      <Download className="h-4 w-4 mr-2" /> Gerar Relatório
                    </Button>
                  </div> */}
                </div>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Relatório Personalizado</CardTitle>
                    <CardDescription>Selecione os dados que deseja incluir</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Crie relatórios personalizados selecionando os dados específicos que deseja analisar.
                    </p>
                    <Button>Criar Relatório Personalizado</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add Employee Modal */}
      <AddEmployeeForm 
        isOpen={isAddEmployeeModalOpen}
        onClose={() => setIsAddEmployeeModalOpen(false)}
        onAddEmployee={handleAddEmployee}
      />
    </div>
  );
};

export default CompanyDashboard;
