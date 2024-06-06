import Product from "../../../assets/products/shoe1.avif";

const ProductCartOrdered = ({ cartItem }) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 h-[150px]">
                <img
                    src={Product}
                    alt="Product"
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
            <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                <div className="w-full">
                    <p className="text-[16px] mb-1">Adidas</p>
                    <p className="font-medium text-[16px]">Adidas Galaxy 6 Shoes</p>
                </div>
                <div className="ml-4 flex items-center w-full text-[16px] mb-2">
                    40 | <p className="capitalize ml-1 flex items-center gap-2">
                        blue
                        <p className="w-[25px] h-[25px] rounded-lg" style={{ background: "blue" }}></p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCartOrdered;