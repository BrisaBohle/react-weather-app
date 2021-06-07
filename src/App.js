import './App.css';
 import Weather from "./Weather";
export default 
function App() {
  return (
    <div className="App">
<div className="container">
      <Weather defaultCity="Oslo"/>
      <footer>
      <a href="https://github.com/BrisaBohle/react-weather-app" target="_blank" rel="noreferrer">Open-Sounce code</a>, by <a href="https://brisa-bohle.netlify.app/" target="_blank" rel="noreferrer">Brisa Bøhle</a>
    </footer>
    </div>
    </div>
  );
}


