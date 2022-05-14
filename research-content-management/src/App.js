import logo from './logo.svg';
import './App.css';
import './components/Message'
import Message from './components/Message';
import Counter from './components/Counter';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/message" element={<Message />} />
        <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
