import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './routes/AppRouter';
import GlobalStyles from './assets/styles/GlobalStyles';

// Componente principal da aplicação
function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
