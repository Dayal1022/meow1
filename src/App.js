
import './App.css';
import Todo from './componenets/todo';

function App() {
  return (
    <div className="container border border-primary rounded mt-5"
    style={{
      background:  `url(https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?cs=srgb&dl=pexels-guillaume-meurice-1591447.jpg&fm=jpg)`,
      backgroundSize:'cover'
    }}>
      <Todo/>
    </div>
  );
}

export default App;
