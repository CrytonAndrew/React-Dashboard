import './App.css';
import PopChart from './components/PopChart';
import LineChart from './components/LineChart';
import DonutChart from './components/DonutChart';

function App() {
  return (
    <div className="App">
      <PopChart />
      <LineChart />
      <DonutChart />
    </div>
  );
}

export default App;
