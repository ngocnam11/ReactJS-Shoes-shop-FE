import { useNavigate } from "react-router-dom";
import Shoe from "../../../assets/products/shoe1.avif";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/products/1")
    }

    return (
        <div className="relative cursor-pointer" onClick={handleNavigate}>
            <img
                src={Shoe}
                alt="Product card image"
                className="w-full h-[350px] object-cover rounded-lg"
            />
            <p className="my-2 text-[13px]">Adidas Galaxy 6 Shoes - Blue</p>
            <p className="text-[16px] font-bold">1.200.000 vnd</p>
        </div>
    );
};

export default ProductCard;