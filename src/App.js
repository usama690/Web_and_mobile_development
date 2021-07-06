import LineChart from "./container/LineChart";
import BarChart from "./container/BarChart";
import DoughnutChart from "./container/DoughnutChart";
import "./App.css";
function App() {
  return (
      <div className="App">
        <div className="chart">
          {/* <LineChart /> */}
          <BarChart/>
          {/* <DoughnutChart /> */}
        </div>
      </div>
  );
}

export default App;
