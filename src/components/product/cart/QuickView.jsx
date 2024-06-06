import { Divider } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import Product from "../../../assets/products/shoe1.avif";
import ProductCounterInView from "../../counter/InView";

const ProductCartQuickView = () => {
    return (
        <>
            <div
                className="grid grid-cols-3 gap-3"
            >
                <div className="col-span-1">
                    <img
                        src={Product}
                        alt="Product"
                        className="h-[150px] w-full rounded-md object-cover"
                    />
                </div>
                <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                    <div className="flex items-start justify-between w-full">
                        <div className="w-full">
                            <p>Adidas Galaxy 6 Shoes</p>
                            <p className="font-medium">Adidas</p>
                        </div>
                        <AiOutlineClose
                            className="cursor-pointer text-[20px]"
                        />
                    </div>
                    <div className="mb-3 flex items-center justify-between w-full">
                        <ProductCounterInView />
                        <p>1.200.000 vnd</p>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
};

export default ProductCartQuickView;