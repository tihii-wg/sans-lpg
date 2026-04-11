import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLatout from "./ui/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath:true
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/ro" replace />} />
        <Route path="/:lang/*" element={<AppLatout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
