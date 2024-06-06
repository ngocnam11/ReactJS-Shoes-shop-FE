import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./layout";
import HomePage from "./pages/home";
import { useEffect } from "react";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/products/detail";
import CartPage from "./pages/cart";

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/home");
        }
    }, [pathname])

	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index path="/" element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/products/1" element={<ProductDetailPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/accessory" element={<HomePage />} />
				<Route path="/contact" element={<HomePage />} />
			</Route>
		</Routes>
	);
}

export default App;
