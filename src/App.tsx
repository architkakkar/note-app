import { Route, Routes } from "react-router";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
