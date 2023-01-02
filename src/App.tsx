import { Routes, Route } from 'react-router-dom';
import { general } from "./pages/index";
function App() {
  return (
    <div className="App">
   <Routes>
        {
          general?.map((item, index) => (
            <Route key={index}  path={item.path} element={item.el} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
