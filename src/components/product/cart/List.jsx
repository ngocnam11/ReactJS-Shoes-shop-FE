import { Divider } from "antd";
import ProductCartOrdered from "./Ordered";

const ProductCartList = ({ cartItems = [] }) => {
    return (
        <>
            <div className="grid grid-cols-6 gap-3 text-[20px] text-left px-3">
                <div className="col-span-2">Sản phẩm</div>
                <div className="col-span-1"></div>
                <div className="col-span-1">Giá</div>
                <div className="col-span-1">Số lượng</div>
                <div className="col-span-1">Tổng</div>
            </div>
            <Divider />
            <div
                className="grid grid-cols-6 gap-3 text-left mb-7"
            >
                <div className="col-span-2 px-3">
                    <ProductCartOrdered />
                </div>
                <div className="col-span-1 flex items-center justify-center gap-2">
                </div>
                <div className="col-span-1 flex items-center">
                    1.200.000 vnd
                </div>
                <div className="col-span-1 flex items-center">
                    1
                </div>
                <div className="col-span-1 flex items-center">
                    1.200.000 vnd
                </div>
            </div>
        </>
    );
};

export default ProductCartList;