import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
