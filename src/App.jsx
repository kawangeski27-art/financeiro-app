import React, { useState, useEffect, useRef } from 'react';
import { 
  PlusCircle, Trash2, Wallet, TrendingUp, TrendingDown, 
  Calendar, Save, PieChart, Target, Calculator, ChevronLeft, ChevronRight,
  Download, Upload, Settings, X, Bell, ArrowLeft, Layers, LogOut, Lock, User, RefreshCw, AlertTriangle
} from 'lucide-react';

// --- IMPORTAÇÕES DO FIREBASE ATUALIZADAS ---
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  onAuthStateChanged, 
  GoogleAuthProvider,
  signInWithPopup,
  signOut 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from 'firebase/firestore';

// --- CONFIGURAÇÃO DO FIREBASE ---
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : {
      apiKey: "AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",
      authDomain: "financeiro-app-df224.firebaseapp.com",
      projectId: "financeiro-app-df224",
      storageBucket: "financeiro-app-df224.firebasestorage.app",
      messagingSenderId: "1061825731478",
      appId: "1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"
    };

// Inicializa o Firebase no próprio arquivo
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// --- DADOS INICIAIS (Limpos, sem backup fixo) ---
const DEFAULT_CATEGORIES = {
  receita: ["Salário", "Freelance", "Investimentos", "Reembolso", "Outros"],
  despesa: ["Moradia", "Alimentação", "Transporte", "Saúde", "Lazer", "Educação", "Contas Fixas", "Outros", "Combustível", "Cartão de Crédito "]
};

export default function App() {
  const currentMonthIndex = new Date().getMonth();
  const [activeTab, setActiveTab] = useState(MONTHS[currentMonthIndex]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
  // --- ESTADOS DE AUTENTICAÇÃO ---
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  // --- INICIALIZAÇÃO INTELIGENTE ---
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState({});
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

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

  // --- 1. GERENCIAMENTO DE USUÁRIO (LOGIN/LOGOUT) ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // Se não tiver usuário, paramos o loading para mostrar a tela de login
      if (!currentUser) setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // --- 2. CARREGAMENTO DE DADOS DA NUVEM ---
  useEffect(() => {
    if (user) {
      setLoading(true); // Carregando dados...
      const fetchData = async () => {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setTransactions(data.transactions || []);
            setBudgets(data.budgets || {});
            setCategories(data.categories || DEFAULT_CATEGORIES);
          } else {
            // Usuário novo: Começa limpo, apenas com categorias padrão
            setTransactions([]);
            setBudgets({});
            setCategories(DEFAULT_CATEGORIES);
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [user]);

  // --- 3. SALVAMENTO AUTOMÁTICO NA NUVEM (DEBOUNCED) ---
  useEffect(() => {
    if (user && !loading) {
      const saveData = async () => {
        try {
          await setDoc(doc(db, "users", user.uid), {
            transactions,
            budgets,
            categories,
            lastUpdated: new Date().toISOString(),
            email: user.email // Salva o email para referência
          }, { merge: true });
        } catch (error) {
          console.error("Erro ao salvar:", error);
        }
      };
      
      const timeoutId = setTimeout(() => {
        saveData();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [transactions, budgets, categories, user, loading]);

  // --- AUTENTICAÇÃO HANDLERS (GOOGLE) ---
  const handleLogin = async () => {
    setAuthError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      setAuthError("Erro ao fazer login com Google. Tente novamente.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setTransactions([]);
  };

  // --- CATEGORIA PADRÃO ---
  useEffect(() => {
    if (categories[type]?.length > 0 && !categories[type].includes(category)) {
      setCategory(categories[type][0]);
    }
  }, [type, categories]);

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
  const handleExportData = () => {
    const backupData = { transactions, budgets, categories, exportedAt: new Date().toISOString(), version: '3.0 (Cloud)' };
    const link = document.createElement("a");
    link.href = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(backupData, null, 2))}`;
    link.download = `financeiro_cloud_backup_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '-')}.json`;
    link.click();
  };

  const handleImportFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.transactions && window.confirm(`Importar dados para sua conta na nuvem? Isso substituirá os dados atuais da conta ${user.email}.`)) {
          setTransactions(parsed.transactions);
          if (parsed.budgets) setBudgets(parsed.budgets);
          if (parsed.categories) setCategories(parsed.categories);
          alert('Dados carregados! O salvamento automático enviará para a nuvem em instantes.');
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

  // --- TELA DE LOGIN ---
  if (!user && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-slate-200">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
              <Wallet className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Controle Financeiro</h1>
            <p className="text-slate-500 text-sm mt-2">Seus dados seguros na nuvem.</p>
          </div>

          {authError && (
            <div className="p-3 mb-4 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
              <AlertTriangle size={16}/> {authError}
            </div>
          )}

          <div className="space-y-4">
            <button 
              onClick={handleLogin}
              className="w-full py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-3"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Entrar com Google
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-slate-400">
            <p>Acesso seguro e sincronizado.</p>
          </div>
        </div>
      </div>
    );
  }

  // --- LOADING GERAL ---
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-500"><RefreshCw className="w-6 h-6 animate-spin mr-2"/> Carregando seus dados...</div>;

  // --- APLICAÇÃO PRINCIPAL ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4">
          <div className="w-full xl:w-auto">
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Wallet className="text-blue-600" /> Controle Financeiro</h1>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> 
              Conectado como {user.displayName || user.email}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 w-full xl:w-auto">
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <button onClick={() => setSelectedYear(y => y - 1)} className="p-2 hover:bg-white rounded-md text-slate-600"><ChevronLeft size={18} /></button>
              <span className="px-4 font-bold text-slate-700 min-w-[80px] text-center">{selectedYear}</span>
              <button onClick={() => setSelectedYear(y => y + 1)} className="p-2 hover:bg-white rounded-md text-slate-600"><ChevronRight size={18} /></button>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <button onClick={() => setActiveTab('Investimentos')} className={`px-4 py-2 rounded-lg font-medium flex gap-2 ${activeTab === 'Investimentos' ? 'bg-indigo-600 text-white' : 'bg-white border text-slate-700'}`}><Calculator size={18} /> <span className="hidden sm:inline">Investimentos</span></button>
            <button onClick={() => setActiveTab('Resumo')} className={`px-4 py-2 rounded-lg font-medium flex gap-2 ${activeTab === 'Resumo' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-700'}`}><PieChart size={18} /> <span className="hidden sm:inline">Resumo</span></button>
            <button onClick={() => setActiveTab('Configuracoes')} className={`px-4 py-2 rounded-lg font-medium flex gap-2 ${activeTab === 'Configuracoes' ? 'bg-slate-700 text-white' : 'bg-white border text-slate-700'}`}><Settings size={18} /> <span className="hidden sm:inline">Config</span></button>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <button onClick={handleExportData} className="p-2 text-slate-600 border rounded-lg hover:text-blue-600" title="Exportar Backup"><Download size={20} /></button>
            <button onClick={() => fileInputRef.current.click()} className="p-2 text-slate-600 border rounded-lg hover:text-emerald-600" title="Importar Backup"><Upload size={20} /></button>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleImportFile} accept=".json" />
            <button onClick={handleLogout} className="p-2 text-red-500 border border-red-100 bg-red-50 rounded-lg hover:bg-red-100" title="Sair"><LogOut size={20} /></button>
          </div>
        </header>

        {/* Barra Meses */}
        {!['Resumo', 'Investimentos', 'Configuracoes'].includes(activeTab) && (
          <div className="overflow-x-auto pb-2 scrollbar-hide"><div className="flex gap-2 min-w-max">{MONTHS.map(m => (<button key={m} onClick={() => setActiveTab(m)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === m ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white text-slate-600 border'}`}>{m}</button>))}</div></div>
        )}

        {/* --- TELAS PRINCIPAIS --- */}
        {['Resumo', 'Investimentos', 'Configuracoes'].includes(activeTab) ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  {activeTab === 'Resumo' && <><PieChart className="text-blue-600"/> Resumo Anual {selectedYear}</>}
                  {activeTab === 'Investimentos' && <><Calculator className="text-indigo-600"/> Investimentos</>}
                  {activeTab === 'Configuracoes' && <><Settings className="text-slate-600"/> Configurações</>}
                </h2>
                <button onClick={() => setActiveTab(MONTHS[new Date().getMonth()])} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100"><ArrowLeft size={16} /> Voltar</button>
             </div>
             <div className="p-6">
               {activeTab === 'Configuracoes' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center mb-3">
                           <h2 className="text-sm font-bold text-slate-600 uppercase">Nova Categoria</h2>
                        </div>
                        <form onSubmit={handleAddCategory} className="flex gap-4 items-end"><div className="flex-1"><label className="block text-xs font-medium text-slate-500 mb-1">Nome</label><input type="text" value={newCatName} onChange={(e) => setNewCatName(e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></div><div className="w-40"><label className="block text-xs font-medium text-slate-500 mb-1">Tipo</label><select value={newCatType} onChange={(e) => setNewCatType(e.target.value)} className="w-full px-3 py-2 border rounded-lg"><option value="despesa">Despesa</option><option value="receita">Receita</option></select></div><button type="submit" className="px-6 py-2 bg-slate-800 text-white rounded-lg">Criar</button></form>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200"><h3 className="font-bold text-emerald-600 mb-4 flex gap-2"><TrendingUp size={18}/> Receitas</h3><div className="space-y-2 max-h-60 overflow-y-auto">{categories.receita.map(c => <div key={c} className="flex justify-between p-2 bg-slate-50 rounded-lg group text-sm"><span>{c}</span><button onClick={() => handleRemoveCategory('receita', c)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100"><X size={14} /></button></div>)}</div></div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200"><h3 className="font-bold text-red-600 mb-4 flex gap-2"><TrendingDown size={18}/> Despesas</h3><div className="space-y-2 max-h-60 overflow-y-auto">{categories.despesa.map(c => <div key={c} className="flex justify-between p-2 bg-slate-50 rounded-lg group text-sm"><span>{c}</span><button onClick={() => handleRemoveCategory('despesa', c)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100"><X size={14} /></button></div>)}</div></div>
                  </div>
               )}
               {activeTab === 'Investimentos' && (
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4"><div><label className="text-sm text-slate-600">Inicial (R$)</label><input type="number" value={investInitial} onChange={(e) => setInvestInitial(e.target.value)} className="w-full p-3 border rounded-lg" /></div><div><label className="text-sm text-slate-600">Mensal (R$)</label><input type="number" value={investMonthly} onChange={(e) => setInvestMonthly(e.target.value)} className="w-full p-3 border rounded-lg" /></div></div>
                      <div className="grid grid-cols-2 gap-4"><div><label className="text-sm text-slate-600">Taxa (% CDI)</label><input type="number" value={investRate} onChange={(e) => setInvestRate(e.target.value)} className="w-full p-3 border rounded-lg" /></div><div><label className="text-sm text-slate-600">Meses</label><input type="number" value={investTime} onChange={(e) => setInvestTime(e.target.value)} className="w-full p-3 border rounded-lg" /></div></div>
                      <button onClick={calculateInvestment} className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl flex justify-center gap-2"><TrendingUp size={20} /> Calcular</button>
                    </div>
                    <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center shadow-xl relative overflow-hidden">
                      {!investResult ? <div className="text-center text-slate-400 z-10"><Target className="w-16 h-16 mx-auto mb-4 opacity-30" /><p>Simular investimento.</p></div> : 
                        <div className="space-y-8 z-10"><div><p className="text-sm text-indigo-300 uppercase">Valor Líquido</p><h3 className="text-5xl font-bold mt-2">{formatCurrency(investResult.netAmount)}</h3></div><div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700/50"><div><p className="text-xs text-slate-400">Total Investido</p><p className="font-semibold text-xl">{formatCurrency(investResult.totalInvested)}</p></div><div><p className="text-xs text-emerald-400">Bruto</p><p className="font-semibold text-xl text-emerald-400">+{formatCurrency(investResult.grossProfit)}</p></div></div></div>
                      }
                    </div>
                 </div>
               )}
               {activeTab === 'Resumo' && (
                 <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4"><SummaryCard title="Receita" value={yearlyIncome} icon={TrendingUp} color="text-emerald-600" /><SummaryCard title="Despesa" value={yearlyExpense} icon={TrendingDown} color="text-red-600" /><SummaryCard title="Saldo" value={yearlyBalance} icon={Wallet} color={yearlyBalance >= 0 ? "text-blue-600" : "text-red-600"} /></div>
                    <div className="overflow-x-auto border rounded-xl border-slate-200"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">Mês</th><th className="p-4 text-emerald-600">Receitas</th><th className="p-4 text-red-600">Despesas</th><th className="p-4">Saldo</th></tr></thead><tbody className="divide-y divide-slate-100">{yearlyData.map((d) => <tr key={d.month} className="hover:bg-slate-50"><td className="p-4 font-medium">{d.month}</td><td className="p-4 text-emerald-600">{formatCurrency(d.inc)}</td><td className="p-4 text-red-600">{formatCurrency(d.exp)}</td><td className={`p-4 font-bold ${d.bal >= 0 ? 'text-blue-600' : 'text-red-600'}`}>{formatCurrency(d.bal)}</td></tr>)}</tbody></table></div>
                 </div>
               )}
             </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-amber-200">
                  <h2 className="font-bold text-amber-800 flex items-center gap-2 mb-4"><Bell className="w-5 h-5" /> Previsão (7 dias)</h2>
                  {upcomingExpenses.length > 0 ? (
                    <>
                      <div className="space-y-3 mb-4">{upcomingExpenses.map(t => (<div key={t.id} className="flex justify-between items-center text-sm bg-white/60 p-2 rounded border border-amber-100"><div><p className="font-semibold text-slate-700">{t.description}</p><p className="text-xs text-slate-500">{t.date}</p></div><span className="font-bold text-red-600">- {formatCurrency(t.amount)}</span></div>))}</div>
                      <div className="pt-3 border-t border-amber-200/50"><div className="flex justify-between text-xs text-slate-600 mb-1"><span>Saldo Hoje:</span><span className="font-semibold">{formatCurrency(walletBalance)}</span></div><div className="flex justify-between text-xs text-red-600 mb-2"><span>A Pagar:</span><span className="font-bold">- {formatCurrency(upcomingTotal)}</span></div><div className={`flex justify-between items-center p-2 rounded-lg ${projectedBalance >= 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}><span className="text-xs font-bold uppercase">Projeção</span><span className="font-bold">{formatCurrency(projectedBalance)}</span></div></div>
                    </>
                  ) : <div className="text-center py-4 text-amber-700/70"><p className="text-sm font-medium">Tudo tranquilo!</p><div className="mt-3 text-xs bg-white/50 p-2 rounded inline-block">Saldo: <strong>{formatCurrency(walletBalance)}</strong></div></div>}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4"><h2 className="font-semibold text-slate-700 flex justify-between">{activeTab} {selectedYear} <Calendar className="w-4 h-4 text-slate-400" /></h2><div className="space-y-3"><div className="flex justify-between p-3 bg-emerald-50 rounded-lg"><span className="text-emerald-700 text-sm">Entradas</span><span className="text-emerald-700 font-bold">{formatCurrency(totalIncome)}</span></div><div className="flex justify-between p-3 bg-red-50 rounded-lg"><span className="text-red-700 text-sm">Saídas</span><span className="text-red-700 font-bold">{formatCurrency(totalExpense)}</span></div><div className="pt-2 border-t border-slate-100 flex justify-between"><span className="text-slate-600 font-medium">Saldo</span><span className={`text-lg font-bold ${balance >= 0 ? 'text-blue-600' : 'text-red-600'}`}>{formatCurrency(balance)}</span></div></div></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2"><PlusCircle className="w-5 h-5 text-blue-600" /> Novo Lançamento</h3>
                <form onSubmit={handleAddTransaction} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 mb-2"><button type="button" onClick={() => setType('receita')} className={`py-2 text-sm rounded-lg border ${type === 'receita' ? 'bg-emerald-100 border-emerald-200 text-emerald-700 font-bold' : 'bg-white text-slate-500'}`}>Receita</button><button type="button" onClick={() => setType('despesa')} className={`py-2 text-sm rounded-lg border ${type === 'despesa' ? 'bg-red-100 border-red-200 text-red-700 font-bold' : 'bg-white text-slate-500'}`}>Despesa</button></div>
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Descrição</label><input type="text" value={description} onChange={e => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div className="grid grid-cols-2 gap-4"><div><label className="block text-xs font-medium text-slate-500 mb-1">Data</label><input type="date" value={transactionDate} onChange={e => setTransactionDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></div><div><label className="block text-xs font-medium text-slate-500 mb-1">{isInstallment?'Valor Parcela':'Valor'}</label><input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></div></div>
                  {type === 'despesa' && <div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="flex items-center gap-2 mb-2"><input type="checkbox" checked={isInstallment} onChange={e => setIsInstallment(e.target.checked)} className="rounded text-blue-600" /><label className="text-sm font-medium text-slate-600 flex items-center gap-1"><Layers size={14} /> Parcelado?</label></div>{isInstallment && <div className="animate-fade-in"><label className="block text-xs font-medium text-slate-500 mb-1">Nº Parcelas</label><input type="number" min="2" max="48" value={installments} onChange={e => setInstallments(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm" /></div>}</div>}
                  <div><label className="block text-xs font-medium text-slate-500 mb-1">Categoria</label><select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-lg">{categories[type].map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                  <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium flex justify-center gap-2"><Save className="w-4 h-4" /> Adicionar</button>
                </form>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-indigo-600" /> Metas {selectedYear}</h3>
                <div className="space-y-4">{categories.despesa.map(cat => { const {spent, limit, percentage} = getCategoryProgress(cat); const isOver = percentage > 100; return (<div key={cat} className="space-y-1"><div className="flex justify-between items-end"><span className="text-xs font-medium text-slate-600">{cat}</span><div className="flex items-center gap-2">{editingBudget === cat ? <input autoFocus type="number" className="w-20 px-1 py-0.5 text-xs border rounded" placeholder="Meta" value={tempBudgetVal} onChange={e => setTempBudgetVal(e.target.value)} onBlur={() => handleSaveBudget(cat)} onKeyDown={e => e.key === 'Enter' && handleSaveBudget(cat)} /> : <button onClick={() => { setEditingBudget(cat); setTempBudgetVal(budgets[`${selectedYear}_${cat}`] || ''); }} className="text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer">{limit > 0 ? formatCurrency(limit) : 'Definir'}</button>}</div></div>{limit > 0 && (<div className="relative pt-1"><div className="flex mb-1 items-center justify-between"><span className={`text-[10px] font-semibold ${isOver ? 'text-red-600' : 'text-slate-500'}`}>{formatCurrency(spent)}</span><span className="text-[10px] text-slate-400">{percentage.toFixed(0)}%</span></div><div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-100"><div style={{ width: `${Math.min(percentage, 100)}%` }} className={`transition-all duration-500 ${isOver ? 'bg-red-500' : percentage > 70 ? 'bg-yellow-400' : 'bg-emerald-400'}`}></div></div></div>)}</div>)})}</div>
              </div>
            </div>
            <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-[500px]">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center"><h3 className="font-semibold text-slate-700">Extrato {activeTab}</h3><span className="text-xs text-slate-400">{currentMonthTransactions.length} itens</span></div>
              <div className="flex-1 overflow-auto">
                {currentMonthTransactions.length === 0 ? <div className="flex flex-col items-center justify-center h-full text-slate-400 py-10"><Wallet className="w-12 h-12 mb-2 opacity-20" /><p>Nenhum lançamento.</p></div> : 
                  <table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500 sticky top-0 z-10"><tr><th className="p-4 w-32">Data</th><th className="p-4">Descrição</th><th className="p-4 hidden sm:table-cell">Categoria</th><th className="p-4 text-right">Valor</th><th className="p-4 w-10"></th></tr></thead><tbody className="divide-y divide-slate-100">{currentMonthTransactions.map(t => (<tr key={t.id} className="hover:bg-slate-50 group"><td className="p-4 text-slate-500">{t.date}</td><td className="p-4 font-medium text-slate-700">{t.description}<div className="text-xs text-slate-400 sm:hidden mt-1">{t.category}</div></td><td className="p-4 text-slate-500 hidden sm:table-cell"><span className="px-2 py-1 rounded-full bg-slate-100 text-xs">{t.category}</span></td><td className={`p-4 text-right font-bold ${t.type === 'receita' ? 'text-emerald-600' : 'text-red-600'}`}>{t.type === 'despesa' ? '-' : '+'} {formatCurrency(t.amount)}</td><td className="p-4 text-right"><button onClick={() => removeTransaction(t.id)} className="p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-colors"><Trash2 className="w-4 h-4" /></button></td></tr>))}</tbody></table>
                }
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
  return (<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between"><div><p className="text-slate-500 text-sm font-medium mb-1">{title}</p><h3 className={`text-2xl font-bold ${color}`}>{formatCurrency(value)}</h3></div><div className={`p-3 rounded-lg bg-slate-50 ${color}`}><Icon className="w-6 h-6" /></div></div>);
}