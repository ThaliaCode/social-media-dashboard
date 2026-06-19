

import Dashboard from "../src/assets/components/Dashboard";
import data from "../src/assets/Data/data.json";

function App() {
  return (
    <main className="lg:px-20">
   <Dashboard data={data} />
    </main>
  )
}

export default App
