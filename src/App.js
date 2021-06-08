import './App.css';
 import Weather from "./Weather";
export default 
function App() {
  return (
    <div className="App">
<div className="container">
      <Weather defaultCity="Oslo"/>
      <footer>
     This project was coded by <a href="https://brisa-bohle.netlify.app/" target="_blank" rel="noreferrer">Brisa Bøhle</a>, open-sourced on<a href="https://github.com/BrisaBohle/react-weather-app" target="_blank" rel="noreferrer"> GitHub</a> and hosted on <a href="https://quirky-borg-52727d.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a> 
    </footer>
    </div>
    </div>
  );
}


