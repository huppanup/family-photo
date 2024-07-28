import logo from './logo.svg';
import './App.css';
import { AuthProvider } from "./utils/AuthUtils"
import LoginTest from './LoginTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AuthProvider>
          <LoginTest />
          </AuthProvider>
      </header>
    </div>
  );
}

export default App;
