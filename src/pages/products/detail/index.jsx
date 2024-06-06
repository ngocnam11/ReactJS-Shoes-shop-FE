import { useEffect } from "react";
import BestSelling from "../../home/components/BestSelling";
import ProductDetailImage from "../../../components/product/detail/Image";
import ProductDetailParameter from "../../../components/product/detail/parameter";

const ProductDetailPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container m-auto p-10">
            <div className="grid grid-cols-12 gap-20">
                <ProductDetailImage />
                <ProductDetailParameter />
            </div>
            <div className="h-[60px]"></div>
            <BestSelling />
        </div>
    );
};

export default ProductDetailPage;