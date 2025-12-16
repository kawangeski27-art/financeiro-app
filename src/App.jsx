import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  serverTimestamp 
} from 'firebase/firestore';
import { 
  Plus, 
  Trash2, 
  Check, 
  Loader2, 
  AlertCircle,
  LogOut,
  LogIn
} from 'lucide-react';

// ---------------------------------------------------------
// CONFIGURAÇÃO DO FIREBASE
// ---------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",
  authDomain: "financeiro-app-df224.firebaseapp.com",
  projectId: "financeiro-app-df224",
  storageBucket: "financeiro-app-df224.firebasestorage.app",
  messagingSenderId: "1061825731478",
  appId: "1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Monitora o estado da autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // Se não tiver usuário, paramos de carregar (mostra tela de login)
      // Se tiver usuário, o loading continua true até carregar as tarefas
      if (!currentUser) setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Busca tarefas quando o usuário está logado
  useEffect(() => {
    if (!user) {
      setTasks([]);
      return;
    }

    setLoading(true);
    const tasksRef = collection(db, 'users', user.uid, 'tasks');
    const q = query(tasksRef); 

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      loadedTasks.sort((a, b) => {
        const dateA = a.createdAt?.toMillis() || 0;
        const dateB = b.createdAt?.toMillis() || 0;
        return dateB - dateA;
      });

      setTasks(loadedTasks);
      setLoading(false);
    }, (err) => {
      console.error("Erro dados:", err);
      setError("Erro ao carregar tarefas.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  // Função de Login com Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Erro login:", err);
      setError("Falha ao fazer login com Google.");
      setLoading(false);
    }
  };

  // Função de Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Erro logout:", err);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim() || !user) return;

    try {
      const tasksRef = collection(db, 'users', user.uid, 'tasks');
      await addDoc(tasksRef, {
        text: newTask.trim(),
        completed: false,
        createdAt: serverTimestamp()
      });
      setNewTask('');
    } catch (err) {
      setError("Erro ao salvar tarefa.");
    }
  };

  const toggleTask = async (task) => {
    try {
      const taskRef = doc(db, 'users', user.uid, 'tasks', task.id);
      await updateDoc(taskRef, { completed: !task.completed });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const taskRef = doc(db, 'users', user.uid, 'tasks', taskId);
      await deleteDoc(taskRef);
    } catch (err) {
      console.error(err);
    }
  };

  // --- TELA DE LOGIN (Se não estiver logado) ---
  if (!user && !loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <LogIn className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Bem-vindo</h1>
          <p className="text-slate-500 mb-8">Faça login para gerenciar suas tarefas</p>
          
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Entrar com Google
          </button>
        </div>
      </div>
    );
  }

  // --- TELA PRINCIPAL (App) ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-md mx-auto p-4 sm:p-6 lg:p-8">
        
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Minhas Tarefas</h1>
            <p className="text-sm text-slate-500 mt-1">
              Olá, {user?.displayName?.split(' ')[0]}!
            </p>
          </div>
          <button 
            onClick={handleLogout}
            className="h-10 w-10 bg-white border border-slate-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 rounded-full flex items-center justify-center text-slate-500 transition-all"
            title="Sair"
          >
             <LogOut className="w-5 h-5" />
          </button>
        </header>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleAddTask} className="mb-6 relative">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="O que precisa ser feito?"
            className="w-full pl-4 pr-12 py-3.5 bg-white rounded-xl shadow-sm border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
          />
          <button
            type="submit"
            disabled={!newTask.trim()}
            className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </form>

        <div className="space-y-3">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 text-slate-400 animate-spin" />
            </div>
          ) : tasks.length === 0 ? (
            <div className="text-center py-12 text-slate-400 bg-white/50 rounded-xl border border-dashed border-slate-200">
              <p>Sua lista está vazia.</p>
            </div>
          ) : (
            tasks.map((task) => (
              <div 
                key={task.id}
                className={`group flex items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100 transition-all ${
                  task.completed ? 'opacity-75 bg-slate-50' : 'hover:shadow-md hover:border-blue-100'
                }`}
              >
                <button
                  onClick={() => toggleTask(task)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${
                    task.completed 
                      ? 'bg-blue-500 border-blue-500 text-white' 
                      : 'border-slate-300 text-transparent hover:border-blue-400'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </button>
                
                <span className={`flex-grow text-slate-700 ${task.completed ? 'line-through text-slate-400' : ''}`}>
                  {task.text}
                </span>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}