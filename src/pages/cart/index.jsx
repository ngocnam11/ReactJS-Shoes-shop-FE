import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ProductCartList from "../../components/product/cart/List";

const CartPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container m-auto py-16 text-center">
            <div className="flex items-center justify-between mb-10 px-3">
                <h1 className="text-left text-3xl">Giỏ hàng</h1>
                <div className="text-right flex items-center gap-4 justify-end">
                    <Button
                        size="large"
                        onClick={() => navigate("/products")}
                    >
                        Tiếp tục mua sắm
                    </Button>
                </div>
            </div>
            <ProductCartList/>
        </div>
    );
};

export default CartPage;