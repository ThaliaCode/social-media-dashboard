

import Dashboard from "../src/assets/components/Dashboard";
import data from "../src/assets/Data/data.json";

function App() {
  return (
    <main>
   <Dashboard data={data} />
    </main>
  )
}

export default App
