import './App.css';
import MainLayout from './containers/MainLayout'
import { AppContextProvider } from './storage/context/appContext';
import { UserContextProvider } from './storage/context/userContext';

function App() {
  return (
    <AppContextProvider>
      <UserContextProvider>
          <MainLayout />
      </UserContextProvider>
    </AppContextProvider>
  );
}

export default App;
