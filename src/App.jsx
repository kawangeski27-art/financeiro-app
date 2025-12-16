import React, { useState, useEffect, useRef } from 'react';
import { 
  PlusCircle, Trash2, Wallet, TrendingUp, TrendingDown, 
  Calendar, Save, PieChart, Target, Calculator, ChevronLeft, ChevronRight,
  Download, Upload, Settings, X, AlertTriangle, Bell, ArrowLeft, Layers, RefreshCw
} from 'lucide-react';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// --- DADOS DO SEU BACKUP (EMBUTIDOS PARA SEGURANÇA) ---
const RESTORED_TRANSACTIONS = [
  { "id": 1765839177531, "month": "Dezembro", "year": 2025, "description": "Seguro do Carro", "amount": 262.7, "type": "despesa", "category": "Outros", "date": "28/12/2025" },
  { "id": 1765839222465, "month": "Dezembro", "year": 2025, "description": "Sem Parar ", "amount": 218.99, "type": "despesa", "category": "Outros", "date": "20/12/2025" },
  { "id": 1765839293301, "month": "Dezembro", "year": 2025, "description": "Freelance do metropoly", "amount": 409.67, "type": "receita", "category": "Freelance", "date": "15/12/2025" },
  { "id": 1765839336593, "month": "Dezembro", "year": 2025, "description": "Praia/Julia", "amount": 165.62, "type": "despesa", "category": "Lazer", "date": "16/12/2025" },
  { "id": 1765839369950, "month": "Janeiro", "year": 2026, "description": "Cartão de Credito", "amount": 3758.37, "type": "despesa", "category": "Cartão de Crédito ", "date": "03/01/2026" },
  { "id": 1765839399783, "month": "Janeiro", "year": 2026, "description": "Pensão ", "amount": 1518, "type": "receita", "category": "Salário", "date": "01/01/2026" },
  { "id": 1765839422279, "month": "Janeiro", "year": 2026, "description": "Bolça PIBC", "amount": 700, "type": "receita", "category": "Salário", "date": "07/01/2026" },
  { "id": 1765839461878, "month": "Dezembro", "year": 2025, "description": "Pensão", "amount": 1518, "type": "receita", "category": "Salário", "date": "01/12/2025" }
];

const RESTORED_BUDGETS = {
  "2025_Moradia": 350,
  "2025_Alimentação": 450,
  "2025_Combustível": 350,
  "2025_Cartão de Crédito ": 850
};

const RESTORED_CATEGORIES = {
  receita: ["Salário", "Freelance", "Investimentos", "Reembolso", "Outros"],
  despesa: ["Moradia", "Alimentação", "Transporte", "Saúde", "Lazer", "Educação", "Contas Fixas", "Outros", "Combustível", "Cartão de Crédito "]
};

export default function App() {
  const currentMonthIndex = new Date().getMonth();
  const [activeTab, setActiveTab] = useState(MONTHS[currentMonthIndex]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
  // --- INICIALIZAÇÃO INTELIGENTE ---
  // Verifica se o localStorage tem dados VÁLIDOS. Se estiver vazio [], usa o backup RESTORED.
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('financeiro_db_v2');
    const parsed = saved ? JSON.parse(saved) : null;
    return (parsed && parsed.length > 0) ? parsed : RESTORED_TRANSACTIONS;
  });
  
  const [budgets, setBudgets] = useState(() => {
    const saved = localStorage.getItem('financeiro_metas_v2');
    const parsed = saved ? JSON.parse(saved) : null;
    return (parsed && Object.keys(parsed).length > 0) ? parsed : RESTORED_BUDGETS;
  });
  
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('financeiro_cats_v2');
    const parsed = saved ? JSON.parse(saved) : null;
    return parsed ? parsed : RESTORED_CATEGORIES;
  });

  // --- ESTADOS DO FORMULÁRIO ---
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('despesa');
  const [category, setCategory] = useState(''); 
  const [transactionDate, setTransactionDate] = useState(new Date().toISOString().split('T')[0]);
  const [isInstallment, setIsInstallment] = useState(false);
  const [installments, setInstallments] = useState(2);

  // --- ESTADOS AUXILIARES ---
  const [editingBudget, setEditingBudget] = useState(null);
  const [tempBudgetVal, setTempBudgetVal] = useState('');
  
  // Calculadora
  const [investInitial, setInvestInitial] = useState('');
  const [investMonthly, setInvestMonthly] = useState('');
  const [investRate, setInvestRate] = useState(13.25);
  const [investTime, setInvestTime] = useState(12);
  const [investResult, setInvestResult] = useState(null);

  // Configuração de Categoria
  const [newCatName, setNewCatName] = useState('');
  const [newCatType, setNewCatType] = useState('despesa');

  const fileInputRef = useRef(null);

  // --- SALVAMENTO AUTOMÁTICO ---
  useEffect(() => { localStorage.setItem('financeiro_db_v2', JSON.stringify(transactions)); }, [transactions]);
  useEffect(() => { localStorage.setItem('financeiro_metas_v2', JSON.stringify(budgets)); }, [budgets]);
  useEffect(() => { localStorage.setItem('financeiro_cats_v2', JSON.stringify(categories)); }, [categories]);

  useEffect(() => {
    if (categories[type]?.length > 0 && !categories[type].includes(category)) {
      setCategory(categories[type][0]);
    }
  }, [type, categories]);

  // --- RESTAURAÇÃO MANUAL DE EMERGÊNCIA ---
  const handleForceRestore = () => {
    if(confirm("Isso irá substituir os dados atuais pelos dados do backup de 15/12/2025. Deseja continuar?")) {
      setTransactions(RESTORED_TRANSACTIONS);
      setBudgets(RESTORED_BUDGETS);
      setCategories(RESTORED_CATEGORIES);
      alert("Dados restaurados com sucesso!");
    }
  };

  // --- LÓGICA DE PREVISÃO SEMANAL ---
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date();
    const [d, m, y] = dateStr.split('/').map(Number);
    return new Date(y, m - 1, d);
  };

  const today = new Date();
  today.setHours(0,0,0,0);
  
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const walletBalance = transactions.reduce((acc, t) => {
    const tDate = parseDate(t.date);
    if (tDate <= today) {
       return t.type === 'receita' ? acc + t.amount : acc - t.amount;
    }
    return acc;
  }, 0);

  const upcomingExpenses = transactions.filter(t => {
    const tDate = parseDate(t.date);
    return t.type === 'despesa' && tDate > today && tDate <= nextWeek;
  }).sort((a,b) => parseDate(a.date) - parseDate(b.date));

  const upcomingTotal = upcomingExpenses.reduce((acc, t) => acc + t.amount, 0);
  const projectedBalance = walletBalance - upcomingTotal;

  // --- FUNÇÕES ---
  const handleBackToTransactions = () => {
    const currentMonthName = MONTHS[new Date().getMonth()];
    setActiveTab(currentMonthName);
  };

  const handleExportData = () => {
    const backupData = { transactions, budgets, categories, exportedAt: new Date().toISOString(), version: '2.5' };
    const link = document.createElement("a");
    link.href = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(backupData, null, 2))}`;
    link.download = `financeiro_backup_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '-')}.json`;
    link.click();
  };

  const handleImportFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.transactions && window.confirm(`Restaurar backup?`)) {
          setTransactions(parsed.transactions);
          if (parsed.budgets) setBudgets(parsed.budgets);
          if (parsed.categories) setCategories(parsed.categories);
          alert('Sucesso!');
        }
      } catch (er) { alert('Erro no arquivo.'); }
    };
    reader.readAsText(file);
    event.target.value = null;
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatName.trim() || categories[newCatType].includes(newCatName)) return;
    setCategories(prev => ({ ...prev, [newCatType]: [...prev[newCatType], newCatName] }));
    setNewCatName('');
  };

  const handleRemoveCategory = (type, name) => {
    if (confirm(`Remover "${name}"?`)) setCategories(prev => ({ ...prev, [type]: prev[type].filter(c => c !== name) }));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount || !transactionDate) return;
    
    const [y, m, d] = transactionDate.split('-').map(Number);
    const val = parseFloat(amount);
    
    const newItems = [];

    if (isInstallment && installments > 1) {
      for (let i = 0; i < installments; i++) {
        const targetMonthIndex = (m - 1) + i;
        const targetYear = y + Math.floor(targetMonthIndex / 12);
        const finalMonthIndex = targetMonthIndex % 12;

        newItems.push({
          id: Date.now() + i,
          month: MONTHS[finalMonthIndex],
          year: targetYear,
          description: `${description} (${i+1}/${installments})`,
          amount: val,
          type,
          category,
          date: `${d.toString().padStart(2, '0')}/${(finalMonthIndex + 1).toString().padStart(2, '0')}/${targetYear}`
        });
      }
      alert(`${installments} parcelas agendadas!`);
    } else {
      newItems.push({
        id: Date.now(),
        month: MONTHS[m - 1],
        year: y,
        description,
        amount: val,
        type,
        category,
        date: `${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y}`
      });
      const targetMonth = MONTHS[m - 1];
      if (targetMonth !== activeTab || y !== selectedYear) {
        alert(`Lançamento agendado para ${targetMonth}/${y}!`);
      }
    }

    setTransactions([...transactions, ...newItems]);
    setDescription('');
    setAmount('');
    setIsInstallment(false);
    setInstallments(2);
  };

  const removeTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  const handleSaveBudget = (cat) => {
    const val = parseFloat(tempBudgetVal);
    if (!isNaN(val)) setBudgets({ ...budgets, [`${selectedYear}_${cat}`]: val });
    setEditingBudget(null);
  };

  const calculateInvestment = () => {
    const P = parseFloat(investInitial) || 0;
    const PMT = parseFloat(investMonthly) || 0;
    const r = parseFloat(investRate) / 100;
    const n = parseFloat(investTime);
    const i = Math.pow(1 + r, 1/12) - 1;
    const finalAmount = (P * Math.pow(1 + i, n)) + (PMT * (Math.pow(1 + i, n) - 1) / i);
    const totalInvested = P + (PMT * n);
    const grossProfit = finalAmount - totalInvested;
    let taxRate = n * 30 > 720 ? 0.15 : n * 30 > 360 ? 0.175 : n * 30 > 180 ? 0.20 : 0.225;
    const tax = grossProfit * taxRate;
    setInvestResult({ totalInvested, grossProfit, tax, netAmount: finalAmount - tax, taxRate: taxRate * 100 });
  };

  const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  const yearlyTransactions = transactions.filter(t => t.year === selectedYear);
  const currentMonthTransactions = yearlyTransactions
    .filter(t => t.month === activeTab)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const totalIncome = currentMonthTransactions.filter(t => t.type === 'receita').reduce((acc, c) => acc + c.amount, 0);
  const totalExpense = currentMonthTransactions.filter(t => t.type === 'despesa').reduce((acc, c) => acc + c.amount, 0);
  const balance = totalIncome - totalExpense;

  const getCategoryProgress = (cat) => {
    const spent = currentMonthTransactions.filter(t => t.type === 'despesa' && t.category === cat).reduce((acc, c) => acc + c.amount, 0);
    const limit = budgets[`${selectedYear}_${cat}`] || 0;
    return { spent, limit, percentage: limit > 0 ? (spent / limit) * 100 : 0 };
  };

  const yearlyData = MONTHS.map(month => {
    const trans = yearlyTransactions.filter(t => t.month === month);
    const inc = trans.filter(t => t.type === 'receita').reduce((acc, c) => acc + c.amount, 0);
    const exp = trans.filter(t => t.type === 'despesa').reduce((acc, c) => acc + c.amount, 0);
    return { month, inc, exp, bal: inc - exp };
  });

  const yearlyIncome = yearlyData.reduce((acc, c) => acc + c.inc, 0);
  const yearlyExpense = yearlyData.reduce((acc, c) => acc + c.exp, 0);
  const yearlyBalance = yearlyIncome - yearlyExpense;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Principal */}
        <header className="flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4">
          <div className="w-full xl:w-auto">
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Wallet className="text-blue-600" /> Controle Financeiro
            </h1>
            <p className="text-slate-500 text-sm mt-1">Planejamento Estratégico & Investimentos</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 w-full xl:w-auto">
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <button onClick={() => setSelectedYear(y => y - 1)} className="p-2 hover:bg-white rounded-md text-slate-600"><ChevronLeft size={18} /></button>
              <span className="px-4 font-bold text-slate-700 min-w-[80px] text-center">{selectedYear}</span>
              <button onClick={() => setSelectedYear(y => y + 1)} className="p-2 hover:bg-white rounded-md text-slate-600"><ChevronRight size={18} /></button>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            
            <button onClick={() => setActiveTab('Investimentos')} className={`px-4 py-2 rounded-lg font-medium flex gap-2 transition-colors ${activeTab === 'Investimentos' ? 'bg-indigo-600 text-white' : 'bg-white border text-slate-700 hover:bg-slate-50'}`}>
              <Calculator size={18} /> <span className="hidden sm:inline">Investimentos</span>
            </button>
            <button onClick={() => setActiveTab('Resumo')} className={`px-4 py-2 rounded-lg font-medium flex gap-2 transition-colors ${activeTab === 'Resumo' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-700 hover:bg-slate-50'}`}>
              <PieChart size={18} /> <span className="hidden sm:inline">Resumo</span>
            </button>
            <button onClick={() => setActiveTab('Configuracoes')} className={`px-4 py-2 rounded-lg font-medium flex gap-2 transition-colors ${activeTab === 'Configuracoes' ? 'bg-slate-700 text-white' : 'bg-white border text-slate-700 hover:bg-slate-50'}`}>
              <Settings size={18} /> <span className="hidden sm:inline">Categorias</span>
            </button>

            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <button onClick={handleExportData} className="p-2 text-slate-600 border rounded-lg hover:text-blue-600 transition-colors" title="Exportar Backup"><Download size={20} /></button>
            <button onClick={() => fileInputRef.current.click()} className="p-2 text-slate-600 border rounded-lg hover:text-emerald-600 transition-colors" title="Importar Backup"><Upload size={20} /></button>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleImportFile} accept=".json" />
          </div>
        </header>

        {/* Barra de Meses */}
        {!['Resumo', 'Investimentos', 'Configuracoes'].includes(activeTab) && (
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {MONTHS.map(month => (
                <button key={month} onClick={() => setActiveTab(month)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === month ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white text-slate-600 border hover:bg-slate-50'}`}>{month}</button>
              ))}
            </div>
          </div>
        )}

        {/* --- TELAS ESPECIAIS --- */}
        {['Resumo', 'Investimentos', 'Configuracoes'].includes(activeTab) ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  {activeTab === 'Resumo' && <><PieChart className="text-blue-600"/> Resumo Anual de {selectedYear}</>}
                  {activeTab === 'Investimentos' && <><Calculator className="text-indigo-600"/> Calculadora de Investimentos</>}
                  {activeTab === 'Configuracoes' && <><Settings className="text-slate-600"/> Configuração de Categorias</>}
                </h2>
                <button 
                  onClick={handleBackToTransactions}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <ArrowLeft size={16} /> Voltar para Lançamentos
                </button>
             </div>

             <div className="p-6">
               {activeTab === 'Configuracoes' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200 mb-2">
                        <div className="flex justify-between items-center mb-3">
                           <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider">Adicionar Nova Categoria</h2>
                           <button onClick={handleForceRestore} className="text-xs flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100 hover:bg-red-100"><RefreshCw size={12}/> Restaurar Backup Inicial</button>
                        </div>
                        <form onSubmit={handleAddCategory} className="flex gap-4 items-end">
                          <div className="flex-1"><label className="block text-xs font-medium text-slate-500 mb-1">Nome da Categoria</label><input type="text" value={newCatName} onChange={(e) => setNewCatName(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: Academia" /></div>
                          <div className="w-40"><label className="block text-xs font-medium text-slate-500 mb-1">Tipo</label><select value={newCatType} onChange={(e) => setNewCatType(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="despesa">Despesa</option><option value="receita">Receita</option></select></div>
                          <button type="submit" className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors">Criar</button>
                        </form>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <h3 className="font-bold text-emerald-600 mb-4 flex items-center gap-2"><TrendingUp size={18}/> Receitas</h3>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">{categories.receita.map(cat => <div key={cat} className="flex justify-between items-center p-2 bg-slate-50 rounded-lg group text-sm"><span className="font-medium text-slate-700">{cat}</span><button onClick={() => handleRemoveCategory('receita', cat)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><X size={14} /></button></div>)}</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2"><TrendingDown size={18}/> Despesas</h3>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">{categories.despesa.map(cat => <div key={cat} className="flex justify-between items-center p-2 bg-slate-50 rounded-lg group text-sm"><span className="font-medium text-slate-700">{cat}</span><button onClick={() => handleRemoveCategory('despesa', cat)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><X size={14} /></button></div>)}</div>
                    </div>
                  </div>
               )}

               {activeTab === 'Investimentos' && (
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div><label className="text-sm font-medium text-slate-600">Aporte Inicial (R$)</label><input type="number" value={investInitial} onChange={(e) => setInvestInitial(e.target.value)} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none mt-1" /></div>
                        <div><label className="text-sm font-medium text-slate-600">Aporte Mensal (R$)</label><input type="number" value={investMonthly} onChange={(e) => setInvestMonthly(e.target.value)} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none mt-1" /></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div><label className="text-sm font-medium text-slate-600">Taxa Anual (% CDI)</label><input type="number" value={investRate} onChange={(e) => setInvestRate(e.target.value)} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none mt-1" /></div>
                        <div><label className="text-sm font-medium text-slate-600">Tempo (Meses)</label><input type="number" value={investTime} onChange={(e) => setInvestTime(e.target.value)} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none mt-1" /></div>
                      </div>
                      <button onClick={calculateInvestment} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex justify-center items-center gap-2 transition-all shadow-lg shadow-indigo-200"><TrendingUp size={20} /> Calcular Rendimento</button>
                    </div>
                    <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                      {!investResult ? <div className="text-center text-slate-400 relative z-10"><Target className="w-16 h-16 mx-auto mb-4 opacity-30" /><p>Preencha os dados ao lado para simular.</p></div> : 
                        <div className="space-y-8 relative z-10">
                          <div><p className="text-sm font-medium text-indigo-300 uppercase tracking-wider">Valor Líquido Estimado</p><h3 className="text-5xl font-bold text-white mt-2">{formatCurrency(investResult.netAmount)}</h3></div>
                          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700/50">
                            <div><p className="text-xs text-slate-400">Total Investido</p><p className="font-semibold text-xl">{formatCurrency(investResult.totalInvested)}</p></div>
                            <div><p className="text-xs text-emerald-400">Rendimento Bruto</p><p className="font-semibold text-xl text-emerald-400">+{formatCurrency(investResult.grossProfit)}</p></div>
                          </div>
                        </div>
                      }
                    </div>
                 </div>
               )}

               {activeTab === 'Resumo' && (
                 <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <SummaryCard title="Receita Total" value={yearlyIncome} icon={TrendingUp} color="text-emerald-600" />
                      <SummaryCard title="Despesa Total" value={yearlyExpense} icon={TrendingDown} color="text-red-600" />
                      <SummaryCard title="Saldo Final" value={yearlyBalance} icon={Wallet} color={yearlyBalance >= 0 ? "text-blue-600" : "text-red-600"} />
                    </div>
                    <div className="overflow-x-auto border rounded-xl border-slate-200">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">Mês</th><th className="p-4 text-emerald-600">Receitas</th><th className="p-4 text-red-600">Despesas</th><th className="p-4">Saldo</th></tr></thead>
                        <tbody className="divide-y divide-slate-100">{yearlyData.map((d) => <tr key={d.month} className="hover:bg-slate-50"><td className="p-4 font-medium">{d.month}</td><td className="p-4 text-emerald-600">{formatCurrency(d.inc)}</td><td className="p-4 text-red-600">{formatCurrency(d.exp)}</td><td className={`p-4 font-bold ${d.bal >= 0 ? 'text-blue-600' : 'text-red-600'}`}>{formatCurrency(d.bal)}</td></tr>)}</tbody>
                      </table>
                    </div>
                 </div>
               )}
             </div>

             <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
               <button onClick={handleBackToTransactions} className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">Voltar para Dashboard <ArrowLeft className="w-4 h-4" /></button>
             </div>
          </div>
        ) : (
          /* --- MENSAL (DASHBOARD) --- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-6">
              
              {/* === PREVISÃO SEMANAL (VISÍVEL SE HOUVER DADOS) === */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-amber-200 animate-fade-in">
                  <h2 className="font-bold text-amber-800 flex items-center gap-2 mb-4">
                    <Bell className="w-5 h-5" /> Previsão (7 dias)
                  </h2>
                  
                  {upcomingExpenses.length > 0 ? (
                    <>
                      <div className="space-y-3 mb-4">
                        {upcomingExpenses.map(t => (
                          <div key={t.id} className="flex justify-between items-center text-sm bg-white/60 p-2 rounded border border-amber-100">
                            <div>
                              <p className="font-semibold text-slate-700">{t.description}</p>
                              <p className="text-xs text-slate-500">{t.date}</p>
                            </div>
                            <span className="font-bold text-red-600">- {formatCurrency(t.amount)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-amber-200/50">
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Saldo Atual (Hoje):</span>
                          <span className="font-semibold">{formatCurrency(walletBalance)}</span>
                        </div>
                        <div className="flex justify-between text-xs text-red-600 mb-2">
                          <span>A Pagar:</span>
                          <span className="font-bold">- {formatCurrency(upcomingTotal)}</span>
                        </div>
                        <div className={`flex justify-between items-center p-2 rounded-lg ${projectedBalance >= 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                          <span className="text-xs font-bold uppercase">Saldo Projetado</span>
                          <span className="font-bold">{formatCurrency(projectedBalance)}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4 text-amber-700/70">
                      <p className="text-sm font-medium">Tudo tranquilo!</p>
                      <p className="text-xs mt-1">Nenhuma conta para vencer nos próximos 7 dias.</p>
                      <div className="mt-3 text-xs bg-white/50 p-2 rounded inline-block">
                        Saldo Atual: <strong>{formatCurrency(walletBalance)}</strong>
                      </div>
                    </div>
                  )}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
                <h2 className="font-semibold text-slate-700 flex items-center justify-between">{activeTab} de {selectedYear} <Calendar className="w-4 h-4 text-slate-400" /></h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg"><span className="text-emerald-700 text-sm">Entradas</span><span className="text-emerald-700 font-bold">{formatCurrency(totalIncome)}</span></div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg"><span className="text-red-700 text-sm">Saídas</span><span className="text-red-700 font-bold">{formatCurrency(totalExpense)}</span></div>
                  <div className="pt-2 border-t border-slate-100"><div className="flex justify-between items-center"><span className="text-slate-600 font-medium">Saldo</span><span className={`text-lg font-bold ${balance >= 0 ? 'text-blue-600' : 'text-red-600'}`}>{formatCurrency(balance)}</span></div></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2"><PlusCircle className="w-5 h-5 text-blue-600" /> Novo Lançamento</h3>
                <form onSubmit={handleAddTransaction} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <button type="button" onClick={() => { setType('receita'); }} className={`py-2 text-sm rounded-lg border transition-all ${type === 'receita' ? 'bg-emerald-100 border-emerald-200 text-emerald-700 font-bold' : 'bg-white border-slate-200 text-slate-500'}`}>Receita</button>
                    <button type="button" onClick={() => { setType('despesa'); }} className={`py-2 text-sm rounded-lg border transition-all ${type === 'despesa' ? 'bg-red-100 border-red-200 text-red-700 font-bold' : 'bg-white border-slate-200 text-slate-500'}`}>Despesa</button>
                  </div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Descrição</label><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Supermercado..." className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-xs font-medium text-slate-500 mb-1">Data</label><input type="date" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                    <div><label className="block text-xs font-medium text-slate-500 mb-1">{isInstallment ? 'Valor da Parcela' : 'Valor'}</label><input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0,00" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
                  </div>
                  
                  {type === 'despesa' && (
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <input type="checkbox" id="installment" checked={isInstallment} onChange={(e) => setIsInstallment(e.target.checked)} className="rounded text-blue-600 focus:ring-blue-500" />
                        <label htmlFor="installment" className="text-sm font-medium text-slate-600 flex items-center gap-1"><Layers size={14} /> Compra Parcelada?</label>
                      </div>
                      {isInstallment && (
                        <div className="animate-fade-in">
                           <label className="block text-xs font-medium text-slate-500 mb-1">Nº de Parcelas</label>
                           <input type="number" min="2" max="48" value={installments} onChange={(e) => setInstallments(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                           <p className="text-[10px] text-slate-400 mt-1">Serão criados lançamentos para os próximos meses.</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Categoria</label><select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">{categories[type].map(cat => (<option key={cat} value={cat}>{cat}</option>))}</select></div>
                  <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-sm transition-colors"><Save className="w-4 h-4" /> Adicionar</button>
                </form>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-indigo-600" /> Metas de {selectedYear}</h3>
                <div className="space-y-4">
                  {categories.despesa.map(cat => {
                    const { spent, limit, percentage } = getCategoryProgress(cat);
                    const isOver = percentage > 100;
                    return (
                      <div key={cat} className="space-y-1">
                        <div className="flex justify-between items-end">
                          <span className="text-xs font-medium text-slate-600">{cat}</span>
                          <div className="flex items-center gap-2">
                             {editingBudget === cat ? (
                               <input autoFocus type="number" className="w-20 px-1 py-0.5 text-xs border rounded bg-slate-50 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Meta" value={tempBudgetVal} onChange={(e) => setTempBudgetVal(e.target.value)} onBlur={() => handleSaveBudget(cat)} onKeyDown={(e) => e.key === 'Enter' && handleSaveBudget(cat)} />
                             ) : (
                               <button onClick={() => { setEditingBudget(cat); setTempBudgetVal(budgets[`${selectedYear}_${cat}`] || ''); }} className="text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer">{limit > 0 ? formatCurrency(limit) : 'Definir'}</button>
                             )}
                          </div>
                        </div>
                        {limit > 0 && (
                          <div className="relative pt-1">
                            <div className="flex mb-1 items-center justify-between"><span className={`text-[10px] font-semibold ${isOver ? 'text-red-600' : 'text-slate-500'}`}>{formatCurrency(spent)}</span><span className="text-[10px] text-slate-400">{percentage.toFixed(0)}%</span></div>
                            <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-100"><div style={{ width: `${Math.min(percentage, 100)}%` }} className={`transition-all duration-500 ${isOver ? 'bg-red-500' : percentage > 70 ? 'bg-yellow-400' : 'bg-emerald-400'}`}></div></div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-[500px]">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center"><h3 className="font-semibold text-slate-700">Extrato de {activeTab}</h3><span className="text-xs text-slate-400">{currentMonthTransactions.length} itens</span></div>
              <div className="flex-1 overflow-auto">
                {currentMonthTransactions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 py-10"><Wallet className="w-12 h-12 mb-2 opacity-20" /><p>Nenhum lançamento.</p></div>
                ) : (
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 sticky top-0 z-10">
                      <tr><th className="p-4 w-32">Data</th><th className="p-4">Descrição</th><th className="p-4 hidden sm:table-cell">Categoria</th><th className="p-4 text-right">Valor</th><th className="p-4 w-10"></th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentMonthTransactions.map((t) => (
                        <tr key={t.id} className="hover:bg-slate-50 group">
                          <td className="p-4 text-slate-500">{t.date}</td>
                          <td className="p-4 font-medium text-slate-700">{t.description}<div className="text-xs text-slate-400 sm:hidden mt-1">{t.category}</div></td>
                          <td className="p-4 text-slate-500 hidden sm:table-cell"><span className="px-2 py-1 rounded-full bg-slate-100 text-xs">{t.category}</span></td>
                          <td className={`p-4 text-right font-bold ${t.type === 'receita' ? 'text-emerald-600' : 'text-red-600'}`}>{t.type === 'despesa' ? '-' : '+'} {formatCurrency(t.amount)}</td>
                          <td className="p-4 text-right"><button onClick={() => removeTransaction(t.id)} className="p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-colors"><Trash2 className="w-4 h-4" /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SummaryCard({ title, value, icon: Icon, color }) {
  const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between">
      <div><p className="text-slate-500 text-sm font-medium mb-1">{title}</p><h3 className={`text-2xl font-bold ${color}`}>{formatCurrency(value)}</h3></div>
      <div className={`p-3 rounded-lg bg-slate-50 ${color}`}><Icon className="w-6 h-6" /></div>
    </div>
  );
}