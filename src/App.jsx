import Header from "./components/Header";
import BMICalculator from "./components/BMICalculator";
import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <div className="App">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <BMICalculator />
        </main>
        <footer style={{textAlign: 'center'}}>
          <p>พัฒนาด้วย React | GitHub: <a href="https://github.com/pnwboon/bmi-calculator-react" target="_blank" rel="noopener noreferrer">BMI Calculator Repo</a> | โปรไฟล์ GitHub: <a href="https://github.com/pnwboon" target="_blank" rel="noopener noreferrer">My GitHub Profile</a> </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
