import './App.css';
import UserLayout from './containers/UserLayout';
import MainLayout from './containers/MainLayout';
import { AppContextProvider } from './storage/context/appContext';
import { UserContextProvider } from './storage/context/userContext';
import { useState } from 'react';
import {
  ThemeProvider,
  createTheme
} from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: 'red',
      main: '#1fb2a7',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

function App() {
  const [seeNavbar, setSeeNavbar] = useState(false);
  return (

    <AppContextProvider>
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          {seeNavbar ? <MainLayout /> : <UserLayout />}
        </ThemeProvider>
      </UserContextProvider>
    </AppContextProvider>
  );
}

export default App;
