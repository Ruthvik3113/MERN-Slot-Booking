
import { AuthProvider } from './components/AuthContext';
import CalendarView from './components/CalendarView'; // Assuming your CalendarView component file

function App() {
  return (
    <AuthProvider>
      <div className="App bg-slate-400">
        <h1 className='flex justify-center font-bold text-4xl text-gray-200 font-monogit'>SLOT BOOKIEE</h1>
        <CalendarView />
      </div>
    </AuthProvider>
  );
}

export default App;
