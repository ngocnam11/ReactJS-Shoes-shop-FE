import Product from "../../../assets/products/shoe1.avif";

const ProductDetailImage = () => {
    return (
        <div className="col-span-6">
            <div className="grid grid-cols-4">
                <div className="col-span-3 h-[600px]">
                    <img
                        src={Product}
                        alt="Detail"
                        className="w-full h-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailImage;