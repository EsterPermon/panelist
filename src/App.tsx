import SideBar from './components/SideBar';
import './i18n';
import PageContainer from './components/PageContainer';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import TwinPanel from './pages/TwinPanel';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <SideBar />
          <Routes>
            <Route path="/" element={<PageContainer />}>
              <Route path="/home" element={<Home />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/twin-panel" element={<TwinPanel />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
