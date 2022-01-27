import './App.css';
import Home from "./components/Home";
import Total from "./components/Total";
import Lee from "./components/Lee";
import Ahn from "./components/Ahn";
import Yoon from "./components/Yoon";
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/total/*" element={<Total/>}/>
      <Route path="/lee/*" element={<Lee/>}/>
      <Route path="/yoon/*" element={<Yoon/>}/>
      <Route path="/ahn/*" element={<Ahn/>}/>
      <Route path="*" element={"Not Found"}/>
      </Routes>
    </div>
  );
}

export default App;
