import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import Features from './components/features';
import Header from './components/header/index';




function App() {

  return (
    <div className="App">
      
      <Header />
      
      <div className="features">
        <Features file={icon1} alt="ferramenta parafuso" title="Declarative" text="React makes it painless to create interactive UIs." />
        <Features file={icon2} alt="tela computador" title="Components" text="Build encapsulated components that manage their state." />
        <Features file={icon3} alt="tela engrenagem" title="Single-Way" text="A set of immutable values are passed to the component's." />
        <Features file={icon4} alt="codigo" title="JSX" text="Statically-typed designed to run on modern browsers." />
      </div>
      

      
    </div>
  );
}

export default App;
