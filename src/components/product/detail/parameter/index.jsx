import { Button, Divider, Modal, notification } from "antd";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import ColorParameter from "./Color";
import SizeParamter from "./Size";
import { AiOutlineZoomIn, AiOutlineShoppingCart } from "react-icons/ai";
import ProductCounter from "../../../counter";
import { useState } from "react";
import ProductCartQuickView from "../../cart/QuickView";

const ProductDetailParameter = () => {
    const [open, setOpen] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = () => {
      api["success"]({
        message: 'Thêm vào giỏ hàng thành công!',
      });
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="col-span-6 bg-gray-50 rounded-lg p-6">
            <h3 className="text-[30px] font-medium">Adidas Galaxy 6 Shoes - Blue</h3>
            <p className="my-4 text-[25px] font-medium">1.200.000 vnd</p>
            <div className="flex items-center justify-between">
                <p>398 sản phẩm đã bán</p>
                <div className="flex items-center justify-center gap-3">
                    <p
                        className="flex items-center justify-center gap-1 cursor-pointer"
                    >
                        <AiOutlineHeart />
                    </p>
                    <p className="flex items-center justify-center gap-1 cursor-pointer">
                        <AiOutlineShareAlt />
                    </p>
                </div>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
                <ColorParameter />
                <SizeParamter />
            </div>
            <div className="flex items-center justify-between gap-3 mt-5">
                <ProductCounter />
                <Button
                    className="h-[50px] flex items-center justify-center gap-2"
                    block
                >
                    <AiOutlineZoomIn className="text-[16px]" />
                </Button>
                <Button
                    block
                    className="h-[50px] flex items-center justify-center gap-3"
                    onClick={handleOpen}
                >
                    <AiOutlineShoppingCart className="text-[16px]" />
                    <p className="font-medium">Thêm vào giỏ hàng</p>
                </Button>
            </div>
            <Divider />

            <Modal
                open={open}
                onCancel={handleClose}
                destroyOnClose
                title={"Added to cart"}
                footer={null}
                centered
            >
                <ProductCartQuickView />
                <div>
                <div className="flex items-center justify-between mb-3 text-[20px] mt-5">
                    <h3>Subtotal</h3>
                    <p className='font-bold'>
                        1.200.000 vnd
                    </p>
                    </div>
                    <p>Taxes and shipping fee will be calculated at checkout</p>
                </div>
                <Divider />

                <div className="flex items-center justify-center gap-3">
                    <Button
                        block
                        className="h-[50px]"
                        onClick={() => {
                            handleClose()
                            openNotificationWithIcon()
                        }}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </Modal>

            {contextHolder}
        </div>
    );
};

export default ProductDetailParameter;