const ProductCounterInView = () => {
    return (
        <div
            className="px-3 rounded-lg h-[50px] flex items-center justify-center gap-3"
            style={{ border: "1px solid lightgray" }}
        >
            <span className="select-none cursor-pointer">
                -
            </span>
            <span className="select-none">1</span>
            <span className="select-none cursor-pointer">
                +
            </span>
        </div>
    );
};

export default ProductCounterInView;