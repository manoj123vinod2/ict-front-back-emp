import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
     
      <Route path="/add" element={<Add data={{ename:"",eage:"",eposition:"",esalary:""}} method="post"/>} />
      <Route path="/view" element={<View/>} />

      </Routes>
    </div>
  );
}

export default App;
