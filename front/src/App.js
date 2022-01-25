import './App.css';
import Home from "./components/Home";
import Total from "./components/Total";
import Lee from "./components/Lee";
import Ahn from "./components/Ahn";
import Yoon from "./components/Yoon";
import Can_Button from './components/Can_button';
import HomeButton from './components/HomeButton';


function App() {
  const can_list = ['이재명', '윤석열', '안철수']
  const can_enlist = ['Lee', "Yoon", "Ahn"]

  return (
    <div className="App">
      <Can_Button name={can_list[0]}></Can_Button>
      <HomeButton></HomeButton>
    </div>
  );
}

export default App;
