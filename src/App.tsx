import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
function App() {
  return (
    <div style={{width:'100%',height:'100%',overflow:'hidden' }}>
    <Router>
      <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
