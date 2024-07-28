import { Route, Routes } from "react-router-dom";
import { Category } from "./pages/category";
import { MainLayout } from "./layout/main-layout";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { EditProduct } from "./pages/editproduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Category />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
