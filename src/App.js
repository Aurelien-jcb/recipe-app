import './App.css';
import MainLayout from './containers/MainLayout'
import { Route, BrowserRouter, Redirect, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <MainLayout />
    </div>
  );
}

export default App;
